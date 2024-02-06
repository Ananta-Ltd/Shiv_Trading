"use client"
import React,{useEffect} from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {usePathname} from 'next/navigation';

function Search() {
    const [value, setValue] = useState("");
    const [istwelvecrosstwelve, settwelvecrosstwelve] = useState(false);
    const [issixteencrosssixteen, setissixteencrosssixteen] = useState(false);
    const [istwentyfourcrosstwentyfour, setistwentyfourcrosstwentyfour] = useState(false);
    const [istwelvefourcrossfourtyeight, setistwelvefourcrossfourtyeight] = useState(false);
    const [isthirtytwocrossthirtytwo, setisthirtytwocrossthirtytwo] = useState(false);
    const [isthirtytwocrosssixtyfour, setisthirtytwocrosssixtyfour] = useState(false);
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
    

    const handletwelvecrosstwelve = () => {
      settwelvecrosstwelve(!istwelvecrosstwelve);

      if(istwelvecrosstwelve===false){
        setValue("12×12inch"); 
        setissixteencrosssixteen(false);
        setistwentyfourcrosstwentyfour(false);
        setistwelvefourcrossfourtyeight(false);
        setisthirtytwocrosssixtyfour(false);
        setisthirtytwocrossthirtytwo(false);
    }   
      else{setValue(""); }   
    };
  
    const handlesixteencrosssixteen = () => {
        setissixteencrosssixteen(!issixteencrosssixteen);
        setValue("16×16inch");  
      if(issixteencrosssixteen===false){
        setValue("16×16inch");
        setistwentyfourcrosstwentyfour(false);
        setistwelvefourcrossfourtyeight(false);
        setisthirtytwocrosssixtyfour(false);
        setisthirtytwocrossthirtytwo(false);
        settwelvecrosstwelve(false);
     }   
      else{setValue(""); }    
    };
  
    const handletwentyfourcrosstwentyfour = () => {
      setistwentyfourcrosstwentyfour(!istwentyfourcrosstwentyfour);
      setValue("24×24inch");  
      if(istwentyfourcrosstwentyfour===false){
        setValue("24×24inch"); 
        setissixteencrosssixteen(false);
        setistwelvefourcrossfourtyeight(false);
        setisthirtytwocrosssixtyfour(false);
        setisthirtytwocrossthirtytwo(false);
        settwelvecrosstwelve(false);
     }
      else{setValue(""); }    
    };
   
    const handletwelvefourcrossfourtyeight = () => {
      setistwelvefourcrossfourtyeight(!istwelvefourcrossfourtyeight);
      setValue("24×48inch");  
      if(istwelvefourcrossfourtyeight===false){
        setValue("24×48inch");  
        setissixteencrosssixteen(false);
        setistwentyfourcrosstwentyfour(false);
        setisthirtytwocrosssixtyfour(false);
        setisthirtytwocrossthirtytwo(false);
        settwelvecrosstwelve(false);
    }
      else{setValue(""); }    
    };
    const handlethirtytwocrossthirtytwo = () => {
        setisthirtytwocrossthirtytwo(!isthirtytwocrossthirtytwo);
      setValue("32×32inch");  
      if(isthirtytwocrossthirtytwo===false){
        setValue("32×32inch");  
        setissixteencrosssixteen(false);
        setistwentyfourcrosstwentyfour(false);
        setistwelvefourcrossfourtyeight(false);
        setisthirtytwocrosssixtyfour(false);
        settwelvecrosstwelve(false);
    }
      else{setValue(""); }    
    };
    const handlelthirtytwocrosssixtyfour = () => {
        setisthirtytwocrosssixtyfour(!isthirtytwocrosssixtyfour);
      setValue("32×64inch");  
      if(isthirtytwocrosssixtyfour===false){
        setValue("32×64inch");  
        setissixteencrosssixteen(false);
        setistwentyfourcrosstwentyfour(false);
        setistwelvefourcrossfourtyeight(false);
        setisthirtytwocrossthirtytwo(false);
        settwelvecrosstwelve(false);
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
           checked={istwelvecrosstwelve}
           onChange={handletwelvecrosstwelve}
         />
         12×12 inch
       </label>
         </div>
         <hr/>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2 bg-blue-950"
           type="checkbox"
           checked={issixteencrosssixteen}
           onChange={handlesixteencrosssixteen}
         />
         16×16 inch
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
         <hr/>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2"
           type="checkbox"
           checked={isthirtytwocrossthirtytwo}
           onChange={handlethirtytwocrossthirtytwo}
         />
         32×32 inch
       </label>
         </div>
         <hr/>
         <div className=' my-1'>
         <label>
         <input
          className="mx-2"
           type="checkbox"
           checked={isthirtytwocrosssixtyfour}
           onChange={handlelthirtytwocrosssixtyfour}
         />
         32×64 inch
       </label>
         </div>
       </div>
    </div>
  )
}

export default Search
