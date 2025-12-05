"use client";

export default function GoogleMap({ src }) {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video sm:aspect-[4/3] lg:aspect-[21/9]">
        <iframe
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
        />
      </div>
    </section>
  );
}
