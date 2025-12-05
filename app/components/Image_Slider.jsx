// components/BannerSlider.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = ["/banner1.png", "/banner2.png", "/banner3.png"];

const SLIDE_INTERVAL = 4000; // 4 sec

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[380px] overflow-hidden">
      {slides.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Banner ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Optional overlay content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white mt-20 px-4">
          <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
            THE SHOVEL EXPRESS
          </h1>
          <p className="mt-2 text-sm md:text-lg drop-shadow">
            Reliable snow & ice removal.
          </p>
          <Link href="/contact">
            <button
              className="
                inline-flex items-center justify-center
                px-4 sm:px-6 md:px-8
                py-2 sm:py-2.5 md:py-3
                rounded-md
                bg-[#0d4f92]
                text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide
                text-white
                shadow-sm
                hover:bg-[#1462b5]
                transition-colors duration-200 mt-10
                "
            >
              GET A FREE QUOTE
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
