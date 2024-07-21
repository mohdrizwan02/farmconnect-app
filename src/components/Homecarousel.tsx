'use client'
import React, { useState } from 'react';

const images = [
  {
    id: 1,
    src: '/carousal1.jpg',
    
  },
  {
    id: 2,
    src: '/carousal2.jpg',
   
  },
  {
    id: 3,
    src: '/carousal3.jpg',
    
  },
  {
    id: 4,
    src: '/carousal4.jpg',
  
  },
  {
    id: 5,
    src: '/carousal.jpg',
   
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index: number) => {
    if (index >= images.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  return (
    <div className="relative w-full h-[66vh] overflow-hidden">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0 h-full relative">
            <img
              src={image.src}
              
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
              
              
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer h-3 w-3 bg-gray-300 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : ''
            }`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
      
    </div>
  );
};

export default Carousel;
