"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {usePathname} from 'next/navigation';

function Search() {
    const [value, setValue] = useState("");
    const [iseleven, setiseleven] = useState(false);
    const [isthirteen, setisthirteen] = useState(false);
    const [isFifteen, setisFifteen] = useState(false);
    const [iseighteen, setiseignteen] = useState(false);
    const router = useRouter();
    const currentPage = usePathname();

  useEffect(()=>{
    if(value){
      router.push(`${currentPage}?value=${value}`)
  }
  else{
      router.push(currentPage)
  }
  
  },[value])
    

    const handleeleven= () => {
        setiseleven(!iseleven);
        setValue("11mm"); 
      
      if(iseleven===false){
        setValue("11mm"); 
        setisthirteen(false);
        setisFifteen(false);
        setiseignteen(false);
    }   
      else{setValue(""); }   
    };
  
    const handlethirteen = () => {
      setisthirteen(!isthirteen);
      setValue("13mm");  
      if(isthirteen===false){
        setValue("13mm");
        setiseleven(false);
        setisFifteen(false);
        setiseignteen(false);
     }   
      else{setValue(""); }    
    };
  
    const handleFifteen = () => {
      setisFifteen(!isFifteen);
      setValue("15mm");  
      if(isFifteen===false){
        setValue("15mm"); 
        setiseleven(false);
        setisthirteen(false);
        setiseignteen(false);
     }
      else{setValue(""); }    
    };
   
    const handleEighteen = () => {
        setiseignteen(!iseighteen);
      setValue("18mm");  
      if(iseighteen===false){
        setValue("18mm");  
        setiseleven(false);
        setisthirteen(false);
        setisFifteen(false);
    }
      else{setValue(""); }    
    };
    
  return (
    <div>
      <div className=' mx-5 mb-0 p-2 text-sm w-[300px] md:w-[400px]'>
         <h2 className='bg-gray-400 p-1 shadow-sm'>Search By Size</h2>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2"
           type="checkbox"
           checked={iseleven}
           onChange={handleeleven}
         />
         11 mm
       </label>
         </div>
         <hr/>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2 bg-blue-950"
           type="checkbox"
           checked={isthirteen}
           onChange={handlethirteen}
         />
         13 mm
       </label>
         </div>
         <hr/>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2"
           type="checkbox"
           checked={isFifteen}
           onChange={handleFifteen}
         />
         15 mm
       </label>
         </div>
         <hr/>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2"
           type="checkbox"
           checked={iseighteen}
           onChange={handleEighteen}
         />
         18 mm
       </label>
         </div>
       </div>
    </div>
  )
}

export default Search
