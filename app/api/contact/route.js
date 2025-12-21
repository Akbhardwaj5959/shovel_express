
import nodemailer from "nodemailer";
import axios from "axios";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const address = formData.get("address");
    const serviceNeeded = formData.get("serviceNeeded");
    const preferredDate = formData.get("preferredDate");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const additionalWork = JSON.parse(formData.get("additionalWork") || "[]");
    const notes = formData.get("notes");

    if (!name || !address || !serviceNeeded || !phone || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // ---------- Collect all photos ----------
    const photoFiles = [];
    let photoIndex = 0;
    while (formData.has(`photo_${photoIndex}`)) {
      const photoFile = formData.get(`photo_${photoIndex}`);
      if (photoFile) {
        photoFiles.push(photoFile);
      }
      photoIndex++;
    }

    // ---------- User IP & location ----------
    const forwarded = req.headers.get("x-forwarded-for");
    const ip =
      (forwarded || "").split(",")[0] || req.headers.get("x-real-ip") || "";

    let locationInfo = "Unknown";
    try {
      if (ip) {
        const geoRes = await axios.get(`https://ipapi.co/${ip}/json/`);
        const g = geoRes.data;
        locationInfo = `${g.city || ""}, ${g.region || ""}, ${
          g.country_name || ""
        } (IP: ${ip})`;
      }
    } catch (err) {
      // location fail ho jaye to ignore, mail fir bhi bhejna hai
    }

    // ---------- Nodemailer transporter ----------
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.CONTACT_EMAIL_USER,
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    // Prepare attachments
    const attachments = [];
    for (const photoFile of photoFiles) {
      const buffer = Buffer.from(await photoFile.arrayBuffer());
      attachments.push({
        filename: photoFile.name,
        content: buffer,
        contentType: photoFile.type,
      });
    }

    const mailOptions = {
      from: `"Shovel Express Form" <${process.env.CONTACT_EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL_TO || process.env.CONTACT_EMAIL_USER,
      subject: `New Snow Removal Booking from ${name}`,
      text: `
            New booking request received:

            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Address: ${address}

            Service Needed: ${serviceNeeded}
            Preferred Date: ${preferredDate || "Not specified"}
            Additional Work: ${
              additionalWork && additionalWork.length > 0
                ? additionalWork.join(", ")
                : "None"
            }
            Notes: ${notes || "None"}

            Photos Attached: ${photoFiles.length > 0 ? `Yes (${photoFiles.length} image(s))` : "No"}
            Approx Location: ${locationInfo}
             `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    console.error("Error details:", error.message, error.stack);
    return new Response(JSON.stringify({ error: error.message || "Failed to send email" }), {
      status: 500,
    });
  }
}
