import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";

import mfa2a from "../assets/mfa2a.png";
import mfa2b from "../assets/mfa2b.png";
import mfa2c from "../assets/mfa2c.png";
import mfa2d from "../assets/mfa2d.png";
import mfa2e from "../assets/mfa2e.png";
import mfa2f from "../assets/mfa2f.png";
import mfa2g from "../assets/mfa2g.png";

const images = [
  { src: mfa2a, alt: "MFA Image 1" },
  { src: mfa2b, alt: "MFA Image 2" },
  { src: mfa2c, alt: "MFA Image 3" },
  { src: mfa2d, alt: "MFA Image 4" },
  { src: mfa2e, alt: "MFA Image 5" },
  { src: mfa2f, alt: "MFA Image 6" },
  { src: mfa2g, alt: "MFA Image 7" },
];

export default function ImageSliderMfa() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <div
      className="relative w-full mx-auto my-6"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative h-[600px] mx-12 overflow-hidden rounded-xl">
        <Image
          src={images[currentIndex].src.src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-contain transition-all duration-500 ease-in-out"
          width={900}
          height={600} // Adjust the value as needed
        />
      </div>
      <button
        className="absolute left-0 top-1/2 transform h-[459px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 bg-transparent text-white p-2 group"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-gray-500 group-hover:text-gray-400" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[459px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 bg-transparent text-white p-2 group"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="text-gray-500 group-hover:text-gray-400" />
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${index === currentIndex ? "bg-[#0471BB]" : "bg-gray-500"} rounded-xl transition-all duration-100 ease-in-out`}
          />
        ))}
      </div>
    </div>
  );
}
