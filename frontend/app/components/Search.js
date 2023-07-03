"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {usePathname} from 'next/navigation';

function Search() {

    const currentPage = usePathname();
    const router = useRouter();

    const handleCheckboxChangewalltiles = () => {
      router.push('/products/walltiles');
    };
    const handleCheckboxChangefloortiles = () => {
      router.push('/products/floortiles');
    };
    const handleCheckboxChangemagtiles = () => {
      router.push('/products/granitesandmarbles');
    };
    const handleCheckboxChangepactiles = () => {
      router.push('/products/sanitaryandcp_fittings');
    };
  

  return (
    <div>
      <div className=' mx-5 mb-0 p-2 text-sm w-[400px]'>
        <h2 className='bg-gray-400 p-1 shadow-sm'>Search By Category</h2>
        <div className=' my-1'>
        <label>
        <input
         className="mx-2"
          type="checkbox"
          checked={currentPage === "/products/walltiles" || currentPage === "/products/walltiles/bathroom" || currentPage === "/products/walltiles/kitchen" || currentPage === "/products/walltiles/livingroom" || currentPage === "/products/walltiles/outdoor" || currentPage === "/products/walltiles/bedroom"}
          onChange={handleCheckboxChangewalltiles}
        />
        Wall Tiles
      </label>
        </div>
        <hr/>
        <div className=' my-1'>
        <label>
        <input
         className="mx-2"
          type="checkbox"
          checked={currentPage === "/products/floortiles" || currentPage === "/products/floortiles/bathroom" || currentPage === "/products/floortiles/kitchen" || currentPage === "/products/floortiles/livingroom" || currentPage === "/products/floortiles/outdoor" || currentPage === "/products/floortiles/bedroom"}
          onChange={handleCheckboxChangefloortiles}
        />
        Floor Tiles
      </label>
        </div>
        <hr/>
        <div className=' my-1'>
        <label>
        <input
         className="mx-2"
          type="checkbox"
          checked={(currentPage==="/products/sanitaryandcp_fittings" )? true:false}
          onChange={handleCheckboxChangepactiles}
        />
        Sanitary and C.P. Fittings
      </label>
        </div>
        <hr/>
        <div className=' my-1'>
        <label>
        <input
         className="mx-2"
          type="checkbox"
          checked={(currentPage==="/products/granitesandmarbles" )? true:false}
          onChange={handleCheckboxChangemagtiles}
        />
        Granite and Marbles
      </label>
        </div>
      </div>
    </div>
  )
}

export default Search
