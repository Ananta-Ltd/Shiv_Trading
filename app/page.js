"use client";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import Image from "next/image";
import tiles1 from "../public/images/tiles1.jpg";
import tiles3 from "../public/images/tiles3.jpg";
import tiles6 from "../public/images/tiles4.jpg";
import Products from "./components/Products_offered";
import Finishes from "./components/Finishes";
import Map from "./components/Map";
import About from "./components/About";
import dynamic from "next/dynamic";
const Trending = dynamic(
  () => import('./components/Trending_product'),
  {
    loading: () => <p>Loading...</p>,
  }
)

function Home() {
  const images = [tiles1, tiles6, tiles3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
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
      {/* Achievement */}
      <div className="slider m-2 mt-0 flex justify-center items-center  ">
        <div className="relative">
          <button
            className="absolute left-0 top-[230px] text-white"
            onClick={handlePrevious}
          >
            <AiOutlineLeftCircle />
          </button>
          <Image
            className="h-[475px] sm:w-[90vw] md:w-[90vw] lg:w-[1200px] object-cover"
            src={images[currentImage]}
            loading="eager"
            alt="Carousel Image"
          />
          <button
            className="absolute right-0 top-[230px] text-white"
            onClick={handleNext}
          >
            <AiOutlineRightCircle />
          </button>
        </div>
      </div>
      <Products />
      <Trending />
      <Finishes />
      <Map />
      <About />
    </>
  );
}
export default Home;
