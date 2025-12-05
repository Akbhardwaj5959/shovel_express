import React from 'react'
import Commercial_price from '../components/Commercial_price'
import Residential_Price from '../components/Residential_Price'

const page = () => {
  return (
     <div className="min-h-screen text-black ">
      {/* Heading wrapper */}
      <header className="pt-24 pb-8 px-4 sm:pt-28 md:pt-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Our Pricing Plans
        </h1>
        <p className="mt-2 text-sm sm:text-base text-center text-iceBlue/80">
          Flexible monthly plans for every driveway
        </p>
      </header>

      {/* Content container with max-width and padding */}
      <main className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 pb-12">
        <section className="mb-12">
          <Residential_Price />
        </section>

        <section className="mb-12">
          <Commercial_price />
        </section>
      </main>
    </div>
  )
}

export default page
