"use client";
import Image from "next/image";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/16399982048?text=Hello%20I%20want%20to%20know%20more%20about%20your%20packges"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 block"
      aria-label="Chat on WhatsApp"
    >
      {/* <Image
        src="/whatsapp.jpg"
        alt="WhatsApp"
        width={48}
        height={48}
        className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-lg hover:scale-110 transition rounded-full"
        priority
      /> */}

       <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full flex items-center justify-center drop-shadow-lg hover:scale-110 transition hover:bg-blue-600">
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </div>
    </a>
  );
}