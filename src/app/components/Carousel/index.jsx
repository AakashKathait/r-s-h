"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import img1 from "../../assets/PICS/image (1).jpg";
import img2 from "../../assets/PICS/image (3).jpg";
import img3 from "../../assets/PICS/image (6).jpg";
import img4 from "../../assets/PICS/image (4).jpg";
import img5 from "../../assets/PICS/image (5).jpg";
import img6 from "../../assets/PICS/image (2).jpg";

const images = [img1, img3, img4, img5, img2, img6];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8 mb-8 overflow-hidden rounded-lg">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-2 z-10 p-2 bg-gray-900 bg-opacity-90 rounded-full hover:bg-gray-950 text-neutral-content"
        >
          <FaArrowLeft size={20} />
        </button>

        <div className="w-full">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 z-10 p-2 bg-gray-900 bg-opacity-90 rounded-full hover:bg-gray-950 text-neutral-content"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
