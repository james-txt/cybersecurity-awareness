import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images }) => {
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
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative h-[600px] mx-12 overflow-hidden rounded-xl">
        <img
          src={images[currentIndex].src.src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-contain transition-all duration-500 ease-in-out"
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
};

export default ImageSlider;
