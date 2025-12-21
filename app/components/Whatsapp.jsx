"use client";
import Image from "next/image";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/16399982048?text=Hello%20I%20want%20to%20know%20more%20about%20your%20packges"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 block"
      aria-label="Chat on WhatsApp"
    >
      <svg
        className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 text-blue-500 drop-shadow-lg hover:scale-110 transition"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.8L0 24l6.5-2c1.6.9 3.5 1.4 5.5 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0zm0 22c-1.8 0-3.5-.5-5-1.3l-.4-.2-3.8 1.2 1.2-3.8-.2-.4C1.5 15.5 1 13.8 1 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5.5-7.5c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.15.2-.3.2-.6.05-.3-.15-1.3-.5-2.5-1.55-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.45.15-.6.15-.15.3-.35.45-.5.15-.2.2-.3.3-.5.1-.2.05-.4 0-.55-.05-.15-.7-1.7-1-2.3-.25-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.08-.75.4-.25.32-.95 1-1 2.2-.05 1.2.8 2.35 1.15 2.8.35.45 2 3.2 5.05 4.5.7.3 1.25.48 1.7.62.7.22 1.35.2 1.85.12.55-.1 1.7-.7 2-1.4.25-.7.25-1.3.18-1.4-.08-.12-.25-.2-.55-.35z" />
      </svg>
    </a>
  );
}