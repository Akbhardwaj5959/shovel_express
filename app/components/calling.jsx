"use client";

export default function CallingFloat() {
  return (
    <a
      href="tel:+918287651345"
      className="fixed z-50 bottom-16 right-3 xs:bottom-20 xs:right-4 sm:bottom-24 sm:right-5 md:bottom-28 md:right-6 block"
      aria-label="Call us"
    >
      <svg
        className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 text-blue-500 drop-shadow-lg hover:scale-110 transition"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
      </svg>
    </a>
  );
}
