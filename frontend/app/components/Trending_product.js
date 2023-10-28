import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
function Trending() {
  const [image, setimage] = useState([]);
  const [isDragging, setIsDragging]= useState(false);
  const carousel = document.querySelector(".carousel");

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setimage(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

   const dragStart = () => {
      setIsDragging(true);
      
   }

   const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
   }

   carousel.addEventListener("mousedown", dragStart);
   carousel.addEventListener("moousemove", dragging);
  
  return (
    <>
    <div className="h-screen m-10 bg-gray-100 p-8">
      <h3 className="text-sm font-bold px-8 text-blue-950">OUR MESMERIZING RANGE OF DESIGNER TILES</h3>
      <h1 className=' text-3xl tracking-wider px-8'>Trending Products</h1>
      <div className="relative  h-[80vh] p-4 px-6 carousel">
      <div className=" flex  h-[62vh]  w-full gap-1 overflow-hidden ">
            <button
              className="absolute left-1 top-[30vh] bg-white h-10 w-10 rounded-[25px] flex justify-center items-center shadow-lg hover:bg-gray-100 scroll-button"
            >
              <AiOutlineLeft/>
            </button>
            {image.map((photo, index) => (    
              <img src={photo} alt="wall" className=' h-[60vh] w-[29vw]  ' />     
            ))}
            <button
              className="absolute right-1 top-[30vh]  bg-white h-10 w-10 rounded-[25px] flex justify-center items-center shadow-lg hover:bg-gray-100 scroll-button"  
            >
              <AiOutlineRight/>
            </button>
        </div> 
      </div>
      </div>
    </>
  );
}
export default Trending;
