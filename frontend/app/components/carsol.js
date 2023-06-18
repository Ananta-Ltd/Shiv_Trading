"use client";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
function Carousel(images) {
  const [currentImage, setCurrentImage] = useState();

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <Image
        className="rounded-lg"
        src={images[currentImage]}
        alt="Carousel Image"
      />

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg"
        onClick={handlePrevious}
      >
        <FaLessThan />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg"
        onClick={handleNext}
      >
        <FaGreaterThan />
      </button>
    </div>
  );
}

export default Carousel;
