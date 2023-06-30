"use client"
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function RootLayout({children}){
    const currentPage = usePathname();
    const isActive = currentPage.slice(20);
    
    return(
        <>
            <nav className='flex justify-center relative my-5  text-sm bg-blue-950  text-white'>
        <Link href="/products/walltiles/bathroom"><button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="bathroom"? "bg-blue-900":""}`}>Bathroom Wall Tiles</button> </Link>
        <Link href="/products/walltiles/kitchen">
        <div className='flex '>
        <button className={`px-3 py-1  hover:bg-blue-900  ${isActive==="kitchen"? "bg-blue-900":""}`}>Kitchen Wall Tiles</button>
         <div className='h-full w-[0.5px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/walltiles/bedroom">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="bedroom"? "bg-blue-900":""}`}>Bedroom Wall Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/walltiles/livingroom">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="livingroom"? "bg-blue-900":""}`}>Living Room Wall Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/walltiles/outdoor">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="outdoor"? "bg-blue-900":""}`}>Outdoor Wall Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
    </nav>
    <div className='block md:flex lg:flex'>
       <div>{children}</div>
    </div>
 
        </>
    )
}