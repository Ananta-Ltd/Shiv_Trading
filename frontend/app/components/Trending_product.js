import React, { useEffect, useState } from "react";
import Image from "next/image";
function Trending() {
  const [image, setimage] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setimage(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
      {/* <div className="bg-slate-200">
        <p className=" mx-[65px] my-[10px] text-center font-bold text-4xl  font-serif ">
          Trending Products
        </p>
        <div className=" mx-[60px]   overflow-x-auto flex lg:grid-cols-3 gap-2">
          {image.map((image) => (
            <div key={image.id}>
              <img height={600} width={600} src={image.url} alt={image.title} />
              <p>{image.title}</p>
              <p>
                <a href="#">
                  <b>Explore Now</b>
                </a>
              </p>
            </div>
          ))}
        </div>
      </div> */}
      <div className="bg-blue-950 p-2 my-1 h-auto md:h-[400px] ">
         <div className="flex justify-center">
        <h1 className="font-semibold text-[24px] text-white tracking-[2px] text-center ">MOST TRANDING </h1>     
        <div className="bg-gray-500 h-0.5 w-[220px] mt-11 absolute center"></div>
         </div>
       <div className="block md:flex lg:flex justify-center">
       <div className=" bg-white h-[300px] w-[350px] p-4 m-4 mt-7  shadow-md ">

        </div>
        <div className=" bg-white h-[300px] w-[350px] p-4 m-4 mt-7 shadow-md ">

        </div>
        <div className=" bg-white h-[300px] w-[350px] p-4 m-4 mt-7 shadow-md ">

        </div>
        <div className=" bg-white h-[300px] w-[350px] p-4 m-4 mt-7 shadow-md ">

        </div>
       </div>
      </div>
    </>
  );
}
export default Trending;
