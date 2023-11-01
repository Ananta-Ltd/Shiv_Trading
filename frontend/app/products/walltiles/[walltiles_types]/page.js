'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { useSearchParams } from 'next/navigation';

export default function page() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [data, setData] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue]= useState("");
  const currentPage = usePathname();
  const sliced = currentPage.slice(20);
  
  const room = sliced.charAt(0).toUpperCase() + sliced.slice(1);
  const tiles="Wall Tiles";
  const searchParams = useSearchParams();
  const size = searchParams.get("value");
  console.log(size);
  const url = size ? `${process.env.NEXT_PUBLIC_HOST}/tiles/photos/?product=${tiles}&size=${size}&room=${room}` : `${process.env.NEXT_PUBLIC_HOST}/tiles/photos/?product=${tiles}&size=${value}&room=${room}`;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setPhotos(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [size]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    console.log("selected", photo)
  };

  const handleCloseClick = () => {
    setSelectedPhoto(null);
  };


  return (
    <> 
     <div className="p-4 md:ml-0 m-2 h-auto grid grid-cols-1 ml-16 gap-6 lg:grid lg:grid-cols-3 lg:gap-8  md:pl-12 pl-12 lg:pl-4 md:grid md:grid-cols-1  md:gap-8 overflow-hidden">
       {data.map((photo, index) => (
         <div
           className="border-2 border-gray-200 hover:shadow-xl hover:shadow-gray-400/50 hover:ring-2 hover:ring-gray-200 h-[250px] w-[250px] hover:scale-105 transition-transform duration-300"
           onClick={() => handlePhotoClick(photo)}
           key={index}
         >
           <div className='flex items-center justify-center '>
             <img src={photo.url} alt="wall" className='h-[200px]' />
           </div>
           <div className=' h-[50px] text-center'>
             <p className='pt-3 mx-2'>{photo.size}</p>
           </div>
         </div>
       ))}
           {selectedPhoto && (
             <div className='fixed top-[15%] md:left-[25%] left-0 p-10 pt-16 flex-col justify-center h-[500px] bg-gray-600 w-full md:w-1/2 lg:1/2 z-50'>
             <button
               className='absolute top-6 right-9 text-white text-1xl outline-none focus:outline-none'
               onClick={handleCloseClick}
             >
             <RxCrossCircled/>
           </button>
        
        <div className='flex justify-center  '>
        <div className='flex-col justify-center h-[400px] w-[500px]'>
          <img
               src={selectedPhoto.url}
               alt="large-view"
               className='md:w-[500px] md:h-[350px] w-full h-[300px] '
             />
           <p className='bg-gray-300 text-center py-4 mt-0 flex justify-center text-sm '>
            {selectedPhoto.description}
            </p>
          </div>
        </div>
       </div>
       )}
      </div> 
      </>
    );
}



