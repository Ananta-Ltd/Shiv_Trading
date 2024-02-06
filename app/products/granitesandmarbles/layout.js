"use client"
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
const Search_By_ProductName = dynamic(
  () => import('../../components/Search_by_productname'),
  {
    loading: () => <p>Loading...</p>,
  }
)
const Search_BY_Size_Marble = dynamic(
  () => import('../../components/Search_by_Size_Marble'),
  {
    loading: () => <p>Loading...</p>,
  }
)


export default function RootLayout({children}){
    const [page, setPage]= useState("");
    const currentPage = usePathname();
    const isActive = currentPage.slice(29);

    
    useEffect(()=>{
        if(isActive==="Rajasthani"){
            setPage("Rajasthani");
        }
        else if(isActive==="South%20Indian"){
            setPage("South Indian");
        }
        else if(isActive==="North%20Indian"){
            setPage("North Indian");
        }
       
    },[isActive])
    
    return(
        <>
        <nav className='flex justify-center relative my-5  text-sm bg-blue-950  text-white'>
        <Link href="/products/granitesandmarbles/Rajasthani"><button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="Rajasthani"? "bg-blue-900":""}`}>Rajasthani</button> </Link>
        <Link href="/products/granitesandmarbles/South Indian">
        <div className='flex '>
        <button className={`px-3 py-1  hover:bg-blue-900  ${isActive==="South%20Indian"? "bg-blue-900":""}`}>South Indian</button>
         <div className='h-full w-[0.5px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/granitesandmarbles/North Indian">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="North%20Indian"? "bg-blue-900":""}`}>North Indian</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
       
    </nav>
    <div className='block md:flex lg:flex'>
       <div className='flex flex-col'>
            <div className='pl-8 mt-2'>
                <p className=' tracking-tight text-sm font-[600]'>
                    <Link href="/">Home</Link> &gt;&gt;  
                    <Link href="/products"> Products</Link> &gt;&gt;  
                    <Link href="/products/granitesandmarbles"> Granite and Marble</Link> {` ${isActive&&">>"} ${isActive&&page}`}
                </p>
            </div>
            <div className='pt-6'> <Search_By_ProductName/></div>
            <div className='pt-6'> <Search_BY_Size_Marble/></div>
       </div>
       <div>{children}</div>
    </div>
 
        </>
    )
}