"use client"
import useFetch from '@/app/useFetch';
import { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import Search from '@/app/components/Search';

const page = () =>{
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [istwelvecrosseighteen, settwelvecrosseighteen] = useState(false);
  const [istwentyfourcrosstwelve, setistwentyfourcrosstwelve] = useState(false);
  const [istwentyfourcrosstwentyfour, setistwentyfourcrosstwentyfour] = useState(false);
  const [istwelvefourcrossfourtyeight, setistwelvefourcrossfourtyeight] = useState(false);
  const [value, setValue]= useState("");
  const tiles="Wall Tiles";
   const url = value ? `http://localhost:8000/tiles/photos/?product=${tiles}&size=${value}` : `http://localhost:8000/tiles/photos/?product=${tiles}`;

  const {data:photos , loading, error} = useFetch(url)
  if(loading) return <h1>LOADING...</h1>;
  if(error) console.log(error);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseClick = () => {
    setSelectedPhoto(null);
  };

  const handletwelvecrosseighteen = () => {
    settwelvecrosseighteen(!istwelvecrosseighteen);
    setValue("12×18inch");  
    
  };

  const handletwentyfourcrosstwelve = () => {
    setistwentyfourcrosstwelve(!istwentyfourcrosstwelve);
    setValue("24×12inch");  
  };

  const handletwentyfourcrosstwentyfour = () => {
    setistwentyfourcrosstwentyfour(!istwentyfourcrosstwentyfour);
    setValue("24×24inch");  
  };
 
  const handletwelvefourcrossfourtyeight = () => {
    setistwelvefourcrossfourtyeight(!istwelvefourcrossfourtyeight);
    setValue("24×48inch");  
  };

  return (
  <> 
    <div className=' px-0 md:px-0 lg:px-20'>
   <div className='pl-8 mt-2'><p className=' tracking-tight text-sm font-[600]'>Home &gt;&gt; Products &gt;&gt; Walltiles </p></div>
    
    <div className=' block md:flex '>
     <div> 
       <div className='pt-4'> <Search/></div>
       <div>
       <div className=' m-5 mt-1 p-2 text-sm w-[400px]'>
         <h2 className='bg-gray-400 p-1 shadow-sm'>Search By Size</h2>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2"
           type="checkbox"
           checked={istwelvecrosseighteen}
           onChange={handletwelvecrosseighteen}
         />
         12×18 inch
       </label>
         </div>
         <hr/>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2 bg-blue-950"
           type="checkbox"
           checked={istwentyfourcrosstwelve}
           onChange={handletwentyfourcrosstwelve}
         />
         24×12 inch
       </label>
         </div>
         <hr/>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2"
           type="checkbox"
           checked={istwentyfourcrosstwentyfour}
           onChange={handletwentyfourcrosstwentyfour}
         />
         24×24 inch
       </label>
         </div>
         <hr/>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2"
           type="checkbox"
           checked={istwelvefourcrossfourtyeight}
           onChange={handletwelvefourcrossfourtyeight}
         />
         24×48 inch
       </label>
         </div>
       </div>
       </div>
     </div>
      <div className="p-6 md:ml-0 m-2 h-auto grid grid-cols-1 ml-16 gap-6 lg:grid lg:grid-cols-3 lg:gap-8 md:grid md:grid-cols-1 md:gap-8 overflow-hidden">
      {photos.map((photo, index) => (
        <div
          className="border-2 border-gray-100 hover:shadow-lg hover:shadow-gray-400/50 hover:ring-2 hover:ring-gray-200 h-[250px] w-[250px] hover:scale-105 transition-transform duration-300"
          onClick={() => handlePhotoClick(photo.url)}

          key={index}
        >
          <div className='flex items-center justify-center'>
            <img src={photo.url} alt="wall" className='h-[200px]' />
          </div>
          <div className='bg-gray-500 h-[50px] text-center'>
            <p className='pt-3'>{photo.size}</p>
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
              src={selectedPhoto}
              alt="large-view"
              className='md:w-[500px] md:h-[350px] w-full h-[300px] '
            />
          <p className='bg-gray-300 text-center py-4 mt-0 flex justify-center'><span className='pt-1 px-2'><CiLocationOn/></span>Location</p>
         </div>
       </div>
      </div>
      )}
    </div>
    </div>
    </div>
  </>
  );
};

export default page;
