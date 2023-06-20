"use client"
import Search from '@/app/components/Search';
import Link from 'next/link';
import { useState } from 'react';
import useFetch from '@/app/useFetch';
import { Room } from '@mui/icons-material';

const page = () =>{
  const url="Wall Tiles";
  const {data:photos, loading, error} = useFetch(`http://localhost:8000/tiles/?product=${url}`)
  if(loading) return <h1>LOADING...</h1>;
  if(error) console.log(error);
  return (
  <>
    <nav className='flex justify-center relative my-5  text-sm bg-blue-950  text-white'>
        <Link href="/products/walltiles/bathroomwalltiles"><button className="px-3 py-1 hover:bg-blue-900">Bathroom Wall Tiles</button> </Link>
        <Link href="/kitchen-wall-tiles">
        <div className='flex '>
        <button className="px-3 py-1  hover:bg-blue-900">Kitchen Wall Tiles</button>
         <div className='h-full w-[0.5px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/bedroom-wall-tiles">
        <div className='flex'>
        <button className="px-3 py-1 hover:bg-blue-900">Bedroom Wall Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/living-room-wall-tiles">
        <div className='flex'>
        <button className="px-3 py-1 hover:bg-blue-900">Living Room Wall Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/outdoor-wall-tiles">
        <div className='flex'>
        <button className="px-3 py-1">Outdoor Wall Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
    </nav>
    <div className='block md:flex lg:flex'>
       <div className='pt-6'> <Search/></div>
       <div className='  p-6 m-2  h-auto  grid grid-cols-3 gap-8 overflow-hidden'>
      {photos.map((photo) => ( 
        <div className="border-2 border-gray-100 hover:shadow-lg hover:shadow-gray-400/50 hover:ring-2 hover:ring-gray-200 h-[250px] w-[250px] hover:scale-105 transition-transform duration-300">
           <div className='flex items-center justify-center'>
         <img key={photo.id} src={photo} alt="wall" className='h-[200px]' /> 
         </div>
        <div className='bg-gray-500 h-[50px]  text-center'> <p className='pt-3'>WALL TILES</p></div>
        </div> 

      ))}
       </div>
    </div>
  </>
  );
};

export default page;
