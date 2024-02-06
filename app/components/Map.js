import React from 'react';
import Link from 'next/link';
import map2 from '../../public/images/map2.png'
import Image from 'next/image';

function Map() {

  return (
    <div className=" relative p-2">
      <div className=" lg:mx-24 relative">
        <Image src={map2} alt="about" loading="eager" className="h-[400px] w-full lg:w-[95vw] bg-black object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='absolute top-[160px] left-[20vw] md:left-[35vw]'>
        <h1 className=' text-3xl tracking-wider text-white '>Where to buy</h1>
        <button
          className='my-4 mx-3 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm font-bold hover:border hover:border-black'>
          <Link href={`${process.env.NEXT_PUBLIC_clientLocationUrl}`} prefetch={false} target="_blank">
            Find our store
          </Link>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Map
