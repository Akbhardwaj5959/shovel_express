"use client"
import React, { useState } from "react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We operate across Edmonton and nearby suburbs — if you're unsure, contact us with your address and we'll confirm service availability.",
  },
  {
    q: "How quickly can you clear a driveway after snowfall?",
    a: "Typical response time is 1–4 hours for priority/residential customers depending on storm intensity and current job queue.",
  },
  {
    q: "Do you offer seasonal contracts or one-off visits?",
    a: "Both. We provide affordable seasonal plans for repeat service and single-visit options for occasional needs.",
  },
  {
    q: "Are you insured and what equipment do you use?",
    a: "Yes — we are fully insured. We use commercial-grade plows, shovels, and snow blowers suited for residential and commercial sites.",
  },
  {
    q: "What safety measures are taken during heavy storms?",
    a: "We prioritize safe access routes, mark hazards, and follow local weather advisories. Staff are trained and use protective gear.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="max-w-4xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-sky-50 to-blue-50/60 dark:from-slate-800 rounded-3xl shadow-lg shadow-blue-300/40 p-1 shadow-lg">
        <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-sky-700 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.41 1.41M7.05 16.95l-1.41 1.41M18.36 18.36l-1.41-1.41M7.05 7.05L5.64 5.64" />
            </svg>
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-blue-100/40 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between px-4 py-3 text-left bg-gradient-to-r from-white to-sky-50 hover:from-sky-50 hover:to-white"
                >
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6 2a1 1 0 00-1 1v2a1 1 0 001 1h.5A7.5 7.5 0 0114 13.5V14a1 1 0 001 1h2a1 1 0 001-1V7a1 1 0 00-1-1h-2a1 1 0 01-1-1V3a1 1 0 00-1-1H6z" />
                    </svg>
                    <span className="font-medium text-slate-800">{f.q}</span>
                  </div>

                  <svg
                    className={`h-5 w-5 text-sky-600 transform transition-transform duration-200 ${openIndex === i ? "rotate-180" : "rotate-0"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`px-4 pt-0 pb-4 text-sm text-white transition-[max-height] duration-300 ease-in-out overflow-hidden ${openIndex === i ? "max-h-96" : "max-h-0"}`}
                >
                  <p className="mt-3">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
