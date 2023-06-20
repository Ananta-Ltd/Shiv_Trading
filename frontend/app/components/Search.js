import React from 'react'
import { useState } from 'react';

function Search() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
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
          checked={isChecked}
          onChange={handleCheckboxChange}
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
          checked={isChecked}
          onChange={handleCheckboxChange}
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
          checked={isChecked}
          onChange={handleCheckboxChange}
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
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Granite and Marbles
      </label>
        </div>
      </div>
      <div className=' m-5 mt-1 p-2 text-sm w-[400px]'>
        <h2 className='bg-gray-400 p-1 shadow-sm'>Search By Size</h2>
        <div className=' my-1'>
        <label>
        <input
         className="mx-2"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        12×18
      </label>
        </div>
        <hr/>
        <div className=' my-1'>
        <label>
        <input
         className="mx-2"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        24×12
      </label>
        </div>
        <hr/>
        <div className=' my-1'>
        <label>
        <input
         className="mx-2"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        24×24
      </label>
        </div>
        <hr/>
        <div className=' my-1'>
        <label>
        <input
         className="mx-2"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        24×48
      </label>
        </div>
      </div>
    </div>
  )
}

export default Search
