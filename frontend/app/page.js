"use client";
import Products from "./components/Products_offered";
import Trending from "./components/Trending_product";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import tiles1 from "../public/images/tiles1.jpg";
import tiles2 from "../public/images/tiles2.jpg";
import tiles3 from "../public/images/tiles4.jpg";

const images = [tiles1, tiles2, tiles3];

function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval duration as per your requirements

    return () => clearInterval(interval);
  }, []);

  const [currentImage, setCurrentImage] = useState(1);

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="slider my-5 mx-20">
        <Image
          className="  rounded h-[35rem] w-11/12 md: h-96 w-11/12 lg:h-[35rem] w-[100rem]"
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
      <Products />
      <Trending />
    </>
  );
}

export default Home;
