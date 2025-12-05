"use client";
import Slider from "react-slick";
import tutors from "@/data/tutors.json";

export default function Mentors() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-12" 
    // style={{
    //       backgroundImage: "url('/snow.png')",
    //       // optional dark overlay ke liye:
    //       backgroundColor: "rgba(0,0,0,0.4)",
    //       backgroundBlendMode: "overlay",
    //     }}
    >
      <div className="text-center mb-10">
        <h3 className="text-black uppercase tracking-wider">Our Experts</h3>
        <h2 className="text-3xl font-bold">
          Meet Our <span className="text-blue-500">Staff.</span>
        </h2>
        <p className="text-black mt-2 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit
          possimus sunt id minima ut dolorum dignissimos voluptas voluptatum
          temporibus!
        </p>
      </div>

      <div className="px-4 snow-bg sm:px-6 lg:px-10">
        <Slider {...settings}>
          {tutors.map((tutor, index) => (
            <div key={index} className="px-2 sm:px-3 lg:px-4">
              <div className=" rounded-xl shadow-md p-5 text-center h-full">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full object-cover border-4 border-gray-200 mb-4"
                />
                <h3 className="text-white sm:text-lg font-semibold">
                  {tutor.name}
                </h3>
                <p className="text-white text-xs sm:text-sm">
                  {tutor.subject}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
