"use client";
import Products from "./components/Products_offered";
import Trending from "./components/Trending_product";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import Image from "next/image";
import tiles1 from "../public/images/tiles1.jpg";
import tiles3 from "../public/images/tiles3.jpg";
import tiles6 from "../public/images/tiles4.jpg";
import { motion, useInView, useAnimate, useAnimation} from 'framer-motion';
import Finishes from "./components/Finishes";
import Map from "./components/Map";
import About from "./components/About";

const images = [tiles1, tiles6, tiles3];

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
      {/* Introduction */}
  
    {/* <div className="absolute top-0 w-[100%] bg-cover bg-no-repeat h-screen -z-50 " 
        style={{ backgroundImage: `url("/images/tiles5.jpg")` }}>
       
        <div className="absolute top-[85vh] right-[2vw] opacity-70"><Image className='w-[75px]' src={logo} alt="logo"></Image></div>   
      </div> */}
      

      {/* Achievement */}
      <div className=" flex flex-col  items-center">
        <div className="slider ">
          <div className="relative h-[500px] w-[1200px]">
            <button
                  className="absolute left-0 top-[200px] text-white"
                  onClick={handlePrevious}
                >
                  <AiOutlineLeftCircle />
                </button>
                <Image
                  className="w-full h-full object-cover"
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
      </div>
      <Products />
      <Trending />
      <Finishes/>
      <Map/>
      <About/>
    </>
  );
}

export default Home;
