"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSliderProps {
  images: string[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 8500); // 8.5 seconds interval

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      {/* Prev Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-8 z-20 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-gray-700 w-6 h-6" />
      </button>

      {/* Image Slider */}
      <div className="w-[90%] h-[60vh] sm:h-[20vh] md:h-[50vh] lg:h-[60vh] rounded-lg overflow-hidden shadow-md relative">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ))}
      </div>

      {/* Next Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-8 z-20 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Next slide"
      >
        <ChevronRight className="text-gray-700 w-6 h-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-yellow-400" : "bg-gray-300"
            } transition duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
