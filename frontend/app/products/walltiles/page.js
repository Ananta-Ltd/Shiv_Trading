"use client"
import Search from '@/app/components/Search';
import Link from 'next/link';
import { useState } from 'react';
import useFetch from '@/app/useFetch';

const page = () =>{
  
  // const {data, loading, error} = useFetch(`http://127.0.0.1:8000/links/${username}`)
  // if(loading) return <h1>LOADING...</h1>;
  // if(error) console.log(error);
  return (
  <>
    <nav className='flex justify-center relative my-5'>
        <Link href="/products/walltiles/bathroomwalltiles">
        <button className="border-r-2 h-[80px]  md:h-auto lg:h-auto border-white text-white bg-blue-900 hover:bg-blue-950 hover:text-white px-3 py-1  text-sm">Bathroom Wall Tiles</button>
        </Link>
        <Link href="/kitchen-wall-tiles">
        <button className="border-r-2 h-[80px] md:h-auto lg:h-auto border-white text-white bg-blue-900 hover:bg-blue-950 hover:text-white px-3 py-1  text-sm">Kitchen Wall Tiles</button>
        </Link>
        <Link href="/bedroom-wall-tiles">
        <button className="border-r-2 h-[80px] md:h-auto lg:h-auto border-white text-white bg-blue-900 hover:bg-blue-950 hover:text-white px-3 py-1  text-sm">Bedroom Wall Tiles</button>
        </Link>
        <Link href="/living-room-wall-tiles">
        <button className="border-r-2 h-[80px] md:h-auto lg:h-auto border-white text-white bg-blue-900 hover:bg-blue-950 hover:text-white px-3 py-1  text-sm">Living Room Wall Tiles</button>
        </Link>
        <Link href="/outdoor-wall-tiles">
        <button className="border-r-2 h-[80px] md:h-auto lg:h-auto border-white text-white bg-blue-900 hover:bg-blue-950 hover:text-white px-3 py-1  text-sm">Outdoor Wall Tiles</button>
        </Link>
        <Link href="/commercial-spaces-wall-tiles">
        <button className="border-r-2 h-[80px] w-full md:h-auto lg:h-auto border-white text-white bg-blue-900 hover:bg-blue-950 hover:text-white px-3 py-1  text-sm">Commercial Spaces Wall Tiles</button>
        </Link>   
    </nav>
    <div className='block md:flex lg:flex'>
       <div> <Search/></div>
       <div className=' w-full m-2 p-2'>
       <div className="grid gap-4 grid-cols-3 border border-blue-900 h-[250px] w-[200px] hover:scale-105 transition-transform duration-300">
        avd
      {/* {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} className="w-full h-auto" />
      ))} */}
    </div>
       </div>
    </div>
  </>
  );
};

export default page;
