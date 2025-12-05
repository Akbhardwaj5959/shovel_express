"use client";
import Image from "next/image";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/918287651345?text=Hello%20I%20want%20to%20know%20more%20about%20your%20classes"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 block"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp.jpg"
        alt="WhatsApp"
        width={48}
        height={48}
        className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-lg hover:scale-110 transition rounded-full"
        priority
      />
    </a>
  );
}