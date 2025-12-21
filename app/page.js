"use client";

import services from "@/data/cards.json";
import CountsDetails from "./components/CountsDetails";
import Mentors from "./components/Mentors";
import CardEffect from "./components/CardEffect";
import Image_Slider from "./components/Image_Slider";
import ServicesStrip from "./components/Icon_Saction";


export default function Home() {
  return (
    <main className="min-h-screen  relative">
      <Image_Slider />
      <ServicesStrip />
      <div className="py-12">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Featured Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            Explore our top services curated just for you.
          </p>
        </div>
      </div>
      <div
        className=" grid
              grid-cols-1
              sm:grid-cols-1      
              lg:grid-cols-2       
              gap-6 sm:gap-8
              justify-items-center
              p-10  min-h-screen
              rounded-3xl
            "
        style={{
          backgroundImage: "url('/snow_fram2.png')",
          // optional dark overlay ke liye:
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "overlay",
        }}
      >
        {services.map((cards, index) => (
          <CardEffect
            key={index}
            title={cards.title}
            description={cards.description}
            image={cards.image}
            buttonText={cards.buttonText}
          />
        ))}
      </div>

      <CountsDetails />
      <Mentors />
    </main>
  );
}
