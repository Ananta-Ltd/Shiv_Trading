"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {usePathname} from 'next/navigation';

function Search() {
    const [value, setValue] = useState("");
    const [istwelvecrosseighteen, settwelvecrosseighteen] = useState(false);
    const [istwentyfourcrosstwelve, setistwentyfourcrosstwelve] = useState(false);
    const [istwentyfourcrosstwentyfour, setistwentyfourcrosstwentyfour] = useState(false);
    const [istwelvefourcrossfourtyeight, setistwelvefourcrossfourtyeight] = useState(false);
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
    
    const handletwelvecrosseighteen = () => {
      settwelvecrosseighteen(!istwelvecrosseighteen);
      
      if(istwelvecrosseighteen===false){
        setValue("12×18inch"); 
        setistwentyfourcrosstwelve(false);
        setistwentyfourcrosstwentyfour(false);
        setistwelvefourcrossfourtyeight(false);
    }   
      else{setValue(""); }   
    };
  
    const handletwentyfourcrosstwelve = () => {
      setistwentyfourcrosstwelve(!istwentyfourcrosstwelve);
      setValue("24×12inch");  
      if(istwentyfourcrosstwelve===false){
        setValue("24×12inch");
        settwelvecrosseighteen(false);
        setistwentyfourcrosstwentyfour(false);
        setistwelvefourcrossfourtyeight(false);
     }   
      else{setValue(""); }    
    };
  
    const handletwentyfourcrosstwentyfour = () => {
      setistwentyfourcrosstwentyfour(!istwentyfourcrosstwentyfour);
      setValue("24×24inch");  
      if(istwentyfourcrosstwentyfour===false){
        setValue("24×24inch"); 
        settwelvecrosseighteen(false);
        setistwelvefourcrossfourtyeight(false);
        setistwentyfourcrosstwelve(false);
     }
      else{setValue(""); }    
    };
   
    const handletwelvefourcrossfourtyeight = () => {
      setistwelvefourcrossfourtyeight(!istwelvefourcrossfourtyeight);
      setValue("24×48inch");  
      if(istwelvefourcrossfourtyeight===false){
        setValue("24×48inch");  
        settwelvecrosseighteen(false);
        setistwentyfourcrosstwentyfour(false);
        setistwentyfourcrosstwelve(false);
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
  )
}
export default Search