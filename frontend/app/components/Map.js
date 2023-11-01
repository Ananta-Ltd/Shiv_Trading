import React from 'react';
import Link from 'next/link';

function Map() {
    
  return (
    <div className='flex flex-col justify-center items-center'>
      
    <div className="w-[92vw] bg-cover bg-no-repeat h-[60vh] flex flex-col justify-center items-center  mb-4" 
        style={{ backgroundImage: `url("/images/map2.png")` }}>
        <div className=' flex flex-row  justify-center items-center align-middle'>
            <div className=' w-[90vw] h-[60vh] '>
               <div className='flex flex-col justify-center items-center mt-[25vh]'>
                <h1 className=' text-3xl tracking-wider text-white'>Where to buy</h1>
                    <button 
                        className='my-4 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm font-bold hover:border hover:border-black'>
                         <Link href={`${process.env.NEXT_PUBLIC_clientLocationUrl}`} target="_blank">
                            Find our store
                          </Link>
                    </button>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Map
