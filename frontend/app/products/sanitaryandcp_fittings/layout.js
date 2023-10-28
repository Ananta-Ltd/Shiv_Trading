"use client"
import Search_By_ProductName from '@/app/components/Search_by_productname';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {usePathname} from 'next/navigation';

export default function RootLayout({children}){
    const [page, setPage]= useState("");
    const currentPage = usePathname();
    const isActive = currentPage.slice(33);

   
    useEffect(()=>{
        if(isActive==="Single%20Piece%20Basin"){
            setPage("Single Piece Basin");
        }
        else if(isActive==="Two%20Piece%20Basin"){
            setPage("Two Piece Basin");
        }
        else if(isActive==="Counter%20Basin"){
            setPage("Counter Basin");
        }
        else if(isActive==="Wall%20Hung%20Commod"){
            setPage("Wall Hung Commod");
        }
        else if(isActive==="Single%20Vacuum%20commode"){
            setPage("Single Vacuum commode");
        }
        else if(isActive==="Double%20Vacuum%20commode"){
            setPage("Double Vacuum commode");
        };
       
    },[isActive])
        
    
    
    return(
        <>
        <nav className='flex justify-center relative my-5  text-sm bg-blue-950  text-white'>
        <Link href="/products/sanitaryandcp_fittings/Single Piece Basin"><button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="Single Piece Basin"? "bg-blue-900":""}`}>Single Piece Basin</button> </Link>
        <Link href="/products/sanitaryandcp_fittings/Two Piece Basin">
        <div className='flex '>
        <button className={`px-3 py-1  hover:bg-blue-900  ${isActive==="Two Piece Basin"? "bg-blue-900":""}`}>Two Piece Basin</button>
         <div className='h-full w-[0.5px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/sanitaryandcp_fittings/Counter Basin">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="Counter Basin"? "bg-blue-900":""}`}>Counter Basin</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/sanitaryandcp_fittings/Wall Hung Commod">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="Wall Hung Commod"? "bg-blue-900":""}`}>Wall Hung Commod</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/sanitaryandcp_fittings/Single Vacuum commode">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="Single Vacuum commode"? "bg-blue-900":""}`}>Single Vacuum commode</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/sanitaryandcp_fittings/Double Vacuum commode">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="Double Vacuum commode"? "bg-blue-900":""}`}>Double Vacuum commode</button>
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
                    <Link href="./products/sanitaryandcp_fittings"> Sanitary and CP Fittings</Link> {` ${isActive&&">>"} ${page}`}
                </p>
            </div>
            <div className='pt-6'> <Search_By_ProductName/></div>
       </div>
       <div>{children}</div>
    </div>
 
        </>
    )
}