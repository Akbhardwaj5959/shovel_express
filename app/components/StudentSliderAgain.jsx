"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Nishant Kumar",
    // location: "Shalom Hills International School, Sector-43",
    feedback:"Lorem2025 ipsum dolor sit amet consectetur adipisicing elit. Officia, cumque.",
    // image: "/Mentors/prince.jpg",
    bgColor: "bg-gray-500 text-white",
  },
  {
    id: 2,
    name: "Abhijit Jayarajan",
    // location: "Shalom Hills International School, Sector-43",
    feedback:"Lorem2025 ipsum dolor sit amet consectetur adipisicing elit. Officia, cumque.",
    // image: "/Mentors/2.jpg",
    bgColor: "bg-blue-500 text-white",
  },
  {
    id: 3,
    name: "Abhijit Jayarajan",
    // location: "Shalom Hills International School, Sector-43",
    feedback:"Lorem2025 ipsum dolor sit amet consectetur adipisicing elit. Officia, cumque.",
    // image: "/Mentors/3.jpg",
    bgColor: "bg-gray-500 text-white",
  },
  {
    id: 4,
    name: "Abhijit Jayarajan",
    // location: "Shalom Hills International School, Sector-43",
    feedback:"Lorem2025 ipsum dolor sit amet consectetur adipisicing elit. Officia, cumque.",
    // image: "/Mentors/4.jpg",
    bgColor: "bg-blue-500 text-white",
  },
  {
    id: 5,
    name: "Abhijit Jayarajan",
    // location: "Shalom Hills International School, Sector-43",
    feedback:"Lorem2025 ipsum dolor sit amet consectetur adipisicing elit. Officia, cumque.",
    // image: "/Mentors/5.jpg",
    bgColor: "bg-gray-500 text-white",
  },
  {
    id: 6,
    name: "Abhijit Jayarajan",
    // location: "Shalom Hills International School, Sector-43",
    feedback:"Lorem2025 ipsum dolor sit amet consectetur adipisicing elit. Officia, cumque.",
    // image: "/Mentors/7.jpg",
    bgColor: "bg-blue-500 text-white",
  },
  {
    id: 7,
    name: "Abhijit Jayarajan",
    // location: "Shalom Hills International School, Sector-43",
    feedback:"Lorem2025 ipsum dolor sit amet consectetur adipisicing elit. Officia, cumque.",
    // image: "/Mentors/8.jpg",
    bgColor: "bg-gray-500 text-white",
  },
  {
    id: 8,
    name: "Abhijit Jayarajan",
    // location: "Shalom Hills International School, Sector-43",
    feedback:"Lorem2025 ipsum dolor sit amet consectetur adipisicing elit. Officia, cumque.",
    // image: "/Mentors/9.jpg",
    bgColor: "bg-blue-500 text-white",
  },
 
];

export default function StudentSliderAgain() {
  const settings = {
    dots: true, // dots hide kiye
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // continuous effect ke liye
    speed: 7000, // jitni slow ya fast slide karna hai
    cssEase: "linear", // smooth continuous scroll
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true, // hover karne par bhi na ruke
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } }, // Desktop
      { breakpoint: 1024, settings: { slidesToShow: 1 } }, // Tablet
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // Mobile
    ],
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            What Our Customers Say{" "}
            <span className="text-blue-500">About Us.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, cumque.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings} className="px-2 sm:px-4">
          {testimonials.map((t) => (
            <div key={t.id} className="flex justify-center px-2 sm:px-4">
              <div
                className={`${t.bgColor} w-full max-w-lg rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-center`}
              >
                {/* Image */}
                {/* <div className="relative mb-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover object-center" // image crop center se hogi
                  />
                </div> */}

                {/* Content */}
                <div className="w-full px-2 sm:px-6">
                  <p className="italic mb-4 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-center">
                    “{t.feedback}”
                  </p>

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center">
                    {t.name}
                  </h3>
                  {/* <p className="text-xs sm:text-sm text-gray-100/90 text-center mt-1">
                    {t.location}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
