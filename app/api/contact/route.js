// app/api/contact/route.js
import nodemailer from "nodemailer";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, address, serviceNeeded, preferredDate, phone, email, notes } =
      body;

    if (!name || !address || !serviceNeeded || !phone || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
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
            Notes: ${notes || "None"}

            Approx Location: ${locationInfo}
             `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
