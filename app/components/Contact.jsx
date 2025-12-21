"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    serviceNeeded: "",
    preferredDate: "",
    phone: "",
    email: "",
    additionalWork: [],
    notes: "",
    photos: [],
  });

  const [status, setStatus] = useState({ loading: false, message: "", type: "" });
  const [photoError, setPhotoError] = useState("");

  const additionalWorkOptions = [
    "Black Ice",
    "Corner lot",
    "Scraping & Salting",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const files = e.target.files;
    setPhotoError("");

    if (!files || files.length === 0) return;

    const newPhotos = [...form.photos];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check total count (max 4 images)
      if (newPhotos.length >= 4) {
        setPhotoError("Maximum 4 images allowed");
        break;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        setPhotoError("Please upload only image files");
        continue;
      }

      // Validate file size (1MB - 5MB)
      const minSize = 1 * 1024 * 1024; // 1MB
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (file.size < minSize) {
        setPhotoError(`${file.name}: Image size must be at least 1MB`);
        continue;
      }

      if (file.size > maxSize) {
        setPhotoError(`${file.name}: Image size must not exceed 5MB`);
        continue;
      }

      // Add file to photos array
      newPhotos.push(file);
    }

    setForm({ ...form, photos: newPhotos });
  };

  const removePhoto = (index) => {
    setForm({
      ...form,
      photos: form.photos.filter((_, i) => i !== index),
    });
    setPhotoError("");
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      additionalWork: checked
        ? [...prevForm.additionalWork, value]
        : prevForm.additionalWork.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", type: "" });

    try {
      // Create FormData to send file and form data
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("address", form.address);
      formData.append("serviceNeeded", form.serviceNeeded);
      formData.append("preferredDate", form.preferredDate);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("additionalWork", JSON.stringify(form.additionalWork));
      formData.append("notes", form.notes);
      if (form.photos.length > 0) {
        form.photos.forEach((photo, index) => {
          formData.append(`photo_${index}`, photo);
        });
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus({ 
        loading: false, 
        message: "Request sent successfully!", 
        type: "success" 
      });
      setForm({
        name: "",
        address: "",
        serviceNeeded: "",
        preferredDate: "",
        phone: "",
        email: "",
        additionalWork: [],
        notes: "",
        photos: [],
      });
    } catch (err) {
      setStatus({ 
        loading: false, 
        message: err.message, 
        type: "error" 
      });
    }
  };

  return (
    <main className="min-h-screen pt-40 text-black flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full/50 glass-ice-800  ice-border rounded-3xl p-6 sm:p-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        {/* LEFT: FORM */}
        <section >
          <h1 className="text-3xl text-black sm:text-4xl font-bold mb-2">
            Book Your Snow Removal
          </h1>
          <p className="text-sm sm:text-base text-iceBlue/80 mb-6">
            Fill in your details and our team will confirm your booking for
            Edmonton & Area.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-s uppercase tracking-wide mb-1">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/10 border border-black/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
                />
              </div>

              <div>
                <label className="block text-s uppercase tracking-wide mb-1">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/10 border border-black/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
                />
              </div>
            </div>

            <div>
              <label className="block text-s uppercase tracking-wide mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/10 border border-black/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
              />
            </div>

            <div>
              <label className="block text-s uppercase tracking-wide mb-1">
                Address
              </label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/10 border border-black/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-s uppercase tracking-wide mb-1">
                  Service Needed
                </label>
                <select
                  name="serviceNeeded"
                  value={form.serviceNeeded}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/10 border border-black/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
                >
                  <option value="" className="text-black">Select service</option>
                  <option className="text-black">Residental Snow Removal</option>
                  <option className="text-black">Commercial Snow Removal</option>
                  
                </select>
              </div>

              <div>
                <label className="block text-s uppercase tracking-wide mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/10 border border-black/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
                />
              </div>
            </div>

            <div>
              <label className="block text-s uppercase tracking-wide mb-1">
                Add - ons
              </label>
              <div className="space-y-2 bg-white/5 p-3 rounded-xl border border-black/50">
                {additionalWorkOptions.map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={option}
                      checked={form.additionalWork.includes(option)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 rounded border-black/50 bg-white/10 cursor-pointer"
                    />
                    <span className="ml-2 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-s uppercase tracking-wide mb-1">
                Extra Notes
              </label>
              <textarea
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/10 border border-black/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
              />
            </div>

            <div>
              <label className="block text-s uppercase tracking-wide mb-1">
                Upload Photos (Optional - Max 4)
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="w-full flex flex-col items-center justify-center px-4 py-3 bg-white/5 border-2 border-dashed border-iceBlue/40 rounded-xl cursor-pointer hover:bg-white/10 transition">
                  <div className="flex flex-col items-center justify-center pt-2 pb-2">
                    <svg className="w-6 h-6 text-iceBlue/70 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-xs text-iceBlue/70">
                      {form.photos.length > 0 
                        ? `${form.photos.length} image(s) selected` 
                        : "Click to upload images"}
                    </p>
                    <p className="text-xs text-iceBlue/60">JPG, PNG up to 5MB each (min 1MB) - Max 4 images</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Display uploaded images */}
              {form.photos.length > 0 && (
                <div className="mt-3 space-y-2">
                  <p className="text-xs font-semibold text-iceBlue/80">Selected Images:</p>
                  <div className="space-y-2 bg-white/5 p-3 rounded-xl">
                    {form.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white/10 p-2 rounded-lg border border-iceBlue/20"
                      >
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a1 1 0 001 1h12a1 1 0 001-1V6a2 2 0 00-2-2H4zm12 12H4a2 2 0 01-2-2v-4a1 1 0 00-1-1H.5a1.5 1.5 0 001.5 1.5h3V4a4 4 0 014-4h4a4 4 0 014 4v10a1.5 1.5 0 001.5-1.5h-.5a1 1 0 00-1 1v4a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-xs text-iceBlue/80 truncate">
                            {photo.name} ({(photo.size / (1024 * 1024)).toFixed(2)}MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="ml-2 px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded hover:bg-red-500/40 transition"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {photoError && (
                <p className="text-xs text-red-400 mt-2">{photoError}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="mt-2 w-full cursor-pointer sm:w-auto rounded-full bg-[#1490FF] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1490FF]/40 hover:bg-[#0f7de0] transition disabled:opacity-60"
            >
              {status.loading ? "Booking..." : "Book Your Snow Removal Now"}
            </button>

            {status.message && (
              <p className={`text-xs mt-1 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </p>
            )}
          </form>
        </section>

        {/* RIGHT: MAP / INFO CARD */}
        <aside className="glass-ice rounded-3xl p-5 border border-white/20 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-1">Service Area</h2>
            <p className="text-xs text-iceBlue/80 mb-4">
              Edmonton, St. Albert, Sherwood Park, Fort Saskatchewan, Leduc.
            </p>
            <div className="w-full h-64 rounded-2xl bg-black/30 overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97940.071!2d-113.686!3d53.544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a022458e14d2a7%3A0x25e5be3b5e5!2sEdmonton%2C%20AB!5e0!3m2!1sen!2sca!4v1700000000000"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="mt-4 text-xs text-iceBlue/80">
            <p>Phone: +1 (555) 123‑4567</p>
            <p>Email: hello@shovelexpress.ca</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
