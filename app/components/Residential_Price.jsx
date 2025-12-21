import Link from "next/link";

// pages/index.js
export default function Residential_Price() {
  const plans = [
    {
      label: "2-car monthly plan",
      price: 180,
      oldPrice: 180,
      tag: "Popular",
    },
    {
      label: "3-car monthly plan",
      price: 200,
      oldPrice: 400,
      tag: "Best value",
    },
    {
      label: "4-5 car monthly plan",
      price: 220,
      oldPrice: 220,
      tag: "Premium",
    },
  ];
 
  return (
    <main className="min-h-screen mt-25 bg-blue-200 text-black rounded-3xl shadow-lg shadow-blue-300/40">
      {/* Top gradient bar */}
      <div className="h-2 w-full bg-gradient-to-r from-iceBlue/70 via-white/60 to-iceBlue/70" />

      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Residental</h1>
            <p className="text-sm text-iceBlue/80">
              Flexible monthly plans for every driveway
            </p>
          </div>

          <button className=" cursor-pointer rounded-full bg-[#1490FF] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1490FF]/40 hover:bg-[#0f7de0] transition">
          <Link href="/contact">
            Contact Us
          </Link>
          </button>
        </header>

        {/* Pricing cards */}
        <section className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className="relative  glass-ice ice-border rounded-3xl p-6 shadow-frost hover:-translate-y-1 hover:shadow-2xl transition transform"
            >
              {/* Snow glow corners */}
              {/* <div className="pointer-events-none absolute -top-6 -left-4 h-16 w-16 bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0,transparent_60%)] opacity-80" />
              <div className="pointer-events-none absolute -top-6 -right-4 h-16 w-16 bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0,transparent_60%)] opacity-80" /> */}

              {/* Tag */}
              <span className="inline-flex rounded-full bg-iceBlue/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-iceBlue mb-3">
                {plan.tag}
              </span>

              {/* Plan label */}
              <h2 className="mb-3 text-sm font-semibold tracking-wide text-black/90">
                {plan.label}
              </h2>

              {/* Main price */}
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-black leading-none">
                    ${plan.price}
                  </span>
                  <span className="pb-1 text-sm text-iceBlue/80">/ month</span>
                </div>
                <p className="mt-1 text-xs text-black/70">
                  Priority clearing, guaranteed within 24 hours of snowfall
                </p>
              </div>

              {/* Old / secondary price */}
              <p className="mb-6 text-sm text-iceBlue/70 line-through">
                ${plan.oldPrice}
              </p>

              {/* CTA */}
              <button className="w-full cursor-pointer rounded-full bg-[#1490FF] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1490FF]/40 hover:bg-[#0f7de0] transition">
              <Link href="/contact">
                Book Now
              </Link>
              </button>
            </div>
          ))}
        </section>

        {/* Additional pricing info - styled card */}
        <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-iceBlue/10 border-2 border-iceBlue/40 rounded-2xl shadow-md hover:shadow-lg hover:border-iceBlue/70 transition duration-300 transform hover:-translate-y-0.5">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg border border-iceBlue/20 hover:bg-white hover:border-iceBlue/50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <p className="text-sm font-medium text-black">
                One-time driveway clearing: <span className="font-bold text-blue-600">$50</span>
              </p>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg border border-iceBlue/20 hover:bg-white hover:border-iceBlue/50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2zm6.5 11.5c0 1.4-1.1 2.5-2.5 2.5H8c-1.4 0-2.5-1.1-2.5-2.5S6.6 9 8 9h8c1.4 0 2.5 1.1 2.5 2.5z" />
              </svg>
              <p className="text-sm font-medium text-black">
                Add-ons: <span className="font-bold">Corner Lot +$30</span>, <span className="font-bold">Black Ice +$40</span>
              </p>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg border border-iceBlue/20 hover:bg-white hover:border-iceBlue/50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.41 1.41L13 5v4h4l1.59-1.59L20 8l-8 8-8-8 1.41-1.41L7 9h4V5l-0.41-1.59L12 2z" />
              </svg>
              <p className="text-sm font-medium text-black">
                Regular seasonal clients get <span className="font-bold text-blue-600">priority response</span> during storms
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
