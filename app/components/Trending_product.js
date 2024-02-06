import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";

function Trending() {
  const [image, setimage] = useState([]);
  const [box, setBox] = useState();
  const url = `${process.env.NEXT_PUBLIC_HOST}/trending/products/`;

  useEffect(() => {
    setBox(document.querySelector(".box"))
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setimage(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  const scrollLeft = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  }
  const scrollRight = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }


  return (
    <>
      <div className="relative w-[98vw] mx-1.5 h-auto lg:w-[92vw] md:my-10  lg:ml-16  bg-gray-100 p-8 lg:pb-0">
        <motion.h3
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-center md:text-left md:px-8 pt-8 text-blue-950">OUR MESMERIZING RANGE OF DESIGNER TILES</motion.h3>
        <motion.h1
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className=' text-3xl tracking-wider text-center md:text-left md:px-8 py-4'>Trending Products</motion.h1>
        <div
          className=" lg:h-[80vh]  w-full py-4  box flex overflow-hidden">
          <button
            className="absolute left-1 top-[62vh] lg:top-[52vh] md:top-[42vh] bg-white h-10 w-10 rounded-[25px] flex justify-center items-center shadow-lg hover:bg-gray-100 scroll-button cursor-pointer"
            onClick={scrollLeft} >
            <AiOutlineLeft />
          </button>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" flex lg:h-[80vh] gap-2 ">
            {image.map((photo, index) => (
              <div key={index} className="w-[310px] md:w-[300px] lg:w-[29vw]">
                <img src={photo.url} alt="wall" loading="lazy" className='  object-cover h-[500px] lg:h-[60vh] w-full' />
                <p className=" text-center text-sm text-gray-400 font-bold py-4">{photo.description}</p>
              </div>))}
          </motion.div>
          <button
            className="absolute right-1 top-[62vh] lg:top-[52vh]  md:top-[42vh]  bg-white h-10 w-10 rounded-[25px] flex justify-center items-center shadow-lg hover:bg-gray-100 scroll-button cursor-pointer"
            onClick={scrollRight}>
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </>
  );
}
export default Trending;