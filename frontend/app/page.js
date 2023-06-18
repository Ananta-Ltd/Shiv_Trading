"use client";
import Products from "./components/Products_offered";
import Trending from "./components/Trending_product";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
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
      <div className="slider m-2 mt-0 flex justify-center">
     <div className="relative">
     <button
          className="absolute left-0 top-[200px] text-white"
          onClick={handlePrevious}
        >
          <AiOutlineLeftCircle />
        </button>
        <Image
          className="h-[400px] w-[1200px] "
          src={images[currentImage]}
          alt="Carousel Image"
        />   
        <button
          className="absolute right-0 top-[200px] text-white"
          onClick={handleNext}
        >
          <AiOutlineRightCircle />
        </button>
     </div>
      </div>
      <Products />
      <Trending />
      <div className="flex justify-center m-9">
      <div className="bg-gray-100 h-[600px] w-3/4 ">
        ABOUT US
      </div>
      </div>
    </>
  );
}

export default Home;
