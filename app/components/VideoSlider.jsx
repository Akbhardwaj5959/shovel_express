"use client";
import { useState, useRef } from "react";

const videos = [
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Rathore classes",
    subtitle: "Rathore Classes provide one to one quality Offline/Online tuitions",
    desc: "A Rathore Classes consultant will come out to your home and assess your child's requirements...",
    buttonText: "Join Now",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Expert Tutors",
    subtitle: "Learn from the best in the industry",
    desc: "Personalized classes designed for your child's success...",
    buttonText: "Join Now",
  },
];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl">
      <video
        key={videos[currentIndex].src}
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        onEnded={handleVideoEnd}
      >
        <source src={videos[currentIndex].src} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
          {videos[currentIndex].title}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 sm:mb-2">
          {videos[currentIndex].subtitle}
        </h2>
        <p className="text-gray-200 mb-3 sm:mb-4 max-w-xs sm:max-w-md md:max-w-xl text-sm sm:text-base">
          {videos[currentIndex].desc}
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base">
          {videos[currentIndex].buttonText}
        </button>
      </div>
    </div>
  );
}