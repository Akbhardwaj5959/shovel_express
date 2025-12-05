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
    notes: "",
  });

  const [status, setStatus] = useState({ loading: false, message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus({ loading: false, message: "Request sent successfully!" });
      setForm({
        name: "",
        address: "",
        serviceNeeded: "",
        preferredDate: "",
        phone: "",
        email: "",
        notes: "",
      });
    } catch (err) {
      setStatus({ loading: false, message: err.message });
    }
  };

  return (
    <main className="min-h-screen pt-40 text-white flex items-center justify-center px-4 py-16" style={{
          backgroundImage: "url('/snow_fram2.png')",
          // optional dark overlay ke liye:
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "overlay",
        }}>
      <div className="max-w-6xl w-full/50 glass-ice-800 ice-border rounded-3xl p-6 sm:p-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        {/* LEFT: FORM */}
        <section>
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-2">
            Book Your Snow Removal
          </h1>
          <p className="text-sm sm:text-base text-iceBlue/80 mb-6">
            Fill in your details and our team will confirm your booking for
            Edmonton & Area.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide mb-1">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wide mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wide mb-1">
                Address
              </label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1">
                  Service Needed
                </label>
                <select
                  name="serviceNeeded"
                  value={form.serviceNeeded}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
                >
                  <option value="" className="text-black">Select service</option>
                  <option className="text-black">Driveway Snow Removal</option>
                  <option className="text-black">Commercial Lot Snow Removal</option>
                  <option className="text-black">Black Ice Removal</option>
                  <option className="text-black">Seasonal Monthly Plan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wide mb-1">
                Extra Notes
              </label>
              <textarea
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-iceBlue"
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="mt-2 w-full cursor-pointer sm:w-auto rounded-full bg-[#1490FF] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1490FF]/40 hover:bg-[#0f7de0] transition disabled:opacity-60"
            >
              {status.loading ? "Booking..." : "Book Your Snow Removal Now"}
            </button>

            {status.message && (
              <p className="text-xs text-iceBlue/80 mt-1">{status.message}</p>
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
