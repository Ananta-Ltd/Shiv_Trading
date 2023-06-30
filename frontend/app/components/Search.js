"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Search() {
    const [isWallTiles, setIsWallTiles] = useState(false);
    const [isFloorTiles, setIsFloorTiles] = useState(false);
    const [isMAGTiles, setIsMAGTiles] = useState(false);
    const [isPACTiles, setIsPACTiles] = useState(false);
    const router = useRouter();
  
    const handleCheckboxChangewalltiles = () => {
      router.push('/products/walltiles');
      setIsWallTiles(!isWallTiles);
    };
    const handleCheckboxChangefloortiles = () => {
      router.push('/products/floortiles');
      setIsFloorTiles(!isFloorTiles);
    };
    const handleCheckboxChangemagtiles = () => {
      router.push('/products/granitesandmarbles');
      setIsMAGTiles(!isMAGTiles);
    };
    const handleCheckboxChangepactiles = () => {
      router.push('/products/sanitaryandcp_fittings');
      setIsPACTiles(!isPACTiles);
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
          checked={isWallTiles}
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
          checked={isFloorTiles}
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
          checked={isPACTiles}
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
          checked={isMAGTiles}
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
