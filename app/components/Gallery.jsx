// pages/gallery.js
import React from "react";

const gallerySections = [
  {
    id: "driveway",
    title: "Before / After Driveways",
    subtitle: "Snow clearing transformations for residential driveways",
    images: [
      "/student/2.png",
      "/student/3.png",
      "/student/4.png",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Lot Snow Removal",
    subtitle: "Parking lots and business properties kept clear all winter",
    images: [
      "/student/2.png",
      "/student/3.png",
      "/student/4.png",
    ],
  },
  {
    id: "black-ice",
    title: "Black Ice Scraping",
    subtitle: "Hazardous ice patches removed for safe walking and driving",
    images: [
      "/student/2.png",
      "/student/3.png",
      "/student/4.png",
    ],
  },
  {
    id: "equipment",
    title: "Equipment & Crews",
    subtitle: "Shovels, plows, salters and winter-ready trucks",
    images: [
      "/student/2.png",
      "/student/3.png",
      "/student/4.png",
    ],
  },
];

const GalleryPage = () => {
  return (
    <main className="min-h-screen text-black">
      {/* Header */}
      <section className="px-4 pt-30 pb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Gallery
        </h1>
        <p className="mt-2 text-sm sm:text-base text-iceBlue/80 max-w-2xl mx-auto">
          Before/after driveway clearing, commercial lot snow removal, black ice
          scraping, and the equipment that keeps Edmonton moving.
        </p>
      </section>

      {/* Gallery sections */}
      <section className="max-w-6xl mx-auto px-3 sm:px-4 pb-16 space-y-12">
        {gallerySections.map((section) => (
          <div key={section.id} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {section.title}
                </h2>
                <p className="text-xs sm:text-sm text-iceBlue/80">
                  {section.subtitle}
                </p>
              </div>
              <p className="text-[11px] sm:text-xs text-iceBlue/70">
                Swipe on mobile • Click to expand
              </p>
            </div>

            {/* Swipeable row on mobile, grid on desktop */}
            <div className="glass-ice ice-border snow-bg rounded-3xl p-3 sm:p-4">
              <div
                className="
                  flex gap-3 overflow-x-auto pb-2 
                  sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0
                "
              >
                {section.images.map((src, idx) => (
                  <figure
                    key={idx}
                    className="
                      relative min-w-[70%] sm:min-w-0
                      rounded-2xl overflow-hidden bg-black/40
                      border border-white/15
                      hover:border-iceBlue hover:scale-[1.02]
                      transition-transform duration-200
                    "
                  >
                    <img
                      src={src}
                      alt={section.title}
                      className="h-52 sm:h-48 w-full object-cover"
                      loading="lazy"
                    />
                    {/* Light gradient overlay for snow vibe */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deepNavy/60 via-transparent to-transparent" />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default GalleryPage;
