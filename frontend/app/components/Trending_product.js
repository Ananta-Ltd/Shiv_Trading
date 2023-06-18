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
      <div className="bg-slate-200">
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
      </div>
    </>
  );
}
export default Trending;
