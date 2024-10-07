import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import intro from "../assets/intro.png";
import mfa from "../assets/mfa.png";
import phishing from "../assets/phishing.png";

/*
import ImageSlider from '../components/ImageSlider'

<ImageSlider className="flex min-h-screen flex-col items-center justify-center"/>
*/

const images = [
  { src: intro },
  { src: mfa },
  { src: phishing },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full mx-auto my-6">
      <div
        className="relative h-[460px] mx-12"
      >
        <img
          src={images[currentIndex].src.src}
          alt={`Slider Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-xl transition-all duration-500 ease-in-out"
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
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#0471BB] rounded-xl"
                : "bg-gray-500 rounded-xl"
            } transition-all duration-100 ease-in-out`}
          />
        ))}
      </div>
    </div>
  );
}
