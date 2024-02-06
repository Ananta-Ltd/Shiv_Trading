"use client"
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const page = () => {

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState();
  const [data, setData] = useState();
  const [select, setSelect] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const { data: session } = useSession();
  const token = session?.user.token;
  
  const searchParams = useSearchParams();
  const size = searchParams.get("value");

  const url = size ? `${process.env.NEXT_PUBLIC_HOST}/granite/photos/?thick=${size}` : `${process.env.NEXT_PUBLIC_HOST}/granite/photos`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [size]);

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseClick = () => {
    setSelectedPhoto(null);
  };

  const handleCheckboxChange = (photo) => {

    if (selectedPhotos.includes(photo)) {
      setSelectedPhotos(selectedPhotos.filter(id => id !== photo));
    } else {
      setSelectedPhotos([...selectedPhotos, photo]);
    }
  };

  const handleDelete = async () => {

    const axios = require('axios');
    const FormData = require('form-data');
    let data = new FormData();
    data.append('url', selectedPhotos[0].url);

    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}/delete/granite/photos/`,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setSelectedPhotos([]);
        toast.success('Product deleted successfully!');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error deleting product: ' + error.message);
      });

  };

  return (
    <>
      {token && (
        <div>
          <button
            className="pl-4 ml-3 md:ml-0 bg-blue-950 hover:bg-white text-white  px-5 py-2 border border-blue-950 hover:text-blue-950"
            onClick={()=>{setSelect(!select)}}>
            Select
          </button>
        </div>
      )} 
      <div className="p-6 md:ml-0 m-2 h-auto grid grid-cols-1  gap-6 lg:grid lg:grid-cols-3 lg:gap-8 md:grid md:grid-cols-1 md:gap-8 overflow-hidden">

        {data?.map((photo, index) => (
          <div key={index}>
            {select && (<label className="">
              <input
                type="checkbox"
                checked={selectedPhotos.includes(photo)}
                onChange={() => handleCheckboxChange(photo)}
                className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              />
            </label>)}
            <div
              className="border-2 border-gray-200 hover:shadow-lg hover:shadow-gray-400/50 hover:ring-2 hover:ring-gray-200 h-[250px] w-[250px] hover:scale-105 transition-transform duration-300"
              onClick={() => handlePhotoClick(photo)}
              key={index}
            >
              <div className='flex items-center justify-center'>
                <img src={photo.url} alt="floor" className='h-[200px]' />
              </div>
              <div className=' h-[50px] text-center'>
                <p className='pt-3'>{photo.size}</p>
              </div>
            </div>
          </div>))}
        {selectedPhoto && (
          <div className='fixed top-[15%] md:left-[25%] left-0 p-10 pt-16 flex-col justify-center h-[500px] bg-gray-600 w-full md:w-1/2 lg:1/2 z-50'>
            <button
              className='absolute top-6 right-9 text-white text-1xl outline-none focus:outline-none'
              onClick={handleCloseClick}
            >
              <RxCrossCircled />
            </button>

            <div className='flex justify-center  '>
              <div className='flex-col justify-center h-[400px] w-[500px]'>
                <img
                  src={selectedPhoto.url}
                  alt="large-view"
                  className='md:w-[500px] md:h-[350px] w-full h-[300px] '
                />
                <p className='bg-gray-300 text-center py-4 mt-0 flex justify-center'>
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {selectedPhotos.length > 0 && <button
        className=" ml-3 mb-3 md:ml-0 bg-red-500 hover:bg-white text-white  px-5 py-2 border border-red-500 hover:text-red-500"
        onClick={handleDelete}>
        Delete
      </button>}
    </>
  );
};

export default page;
