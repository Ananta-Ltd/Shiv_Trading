"use client"
import Search from '@/app/components/Search';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function RootLayout({children}){
    const currentPage = usePathname();
    const isActive = currentPage.slice(21);
    
    return(
        <>
            <nav className='flex justify-center relative my-5  text-sm bg-blue-950  text-white'>
        <Link href="/products/floortiles/bathroom"><button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="bathroom"? "bg-blue-900":""}`}>Bathroom Floor Tiles</button> </Link>
        <Link href="/products/floortiles/kitchen">
        <div className='flex '>
        <button className={`px-3 py-1  hover:bg-blue-900  ${isActive==="kitchen"? "bg-blue-900":""}`}>Kitchen Floor Tiles</button>
         <div className='h-full w-[0.5px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/floortiles/bedroom">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="bedroom"? "bg-blue-900":""}`}>Bedroom Floor Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/floortiles/livingroom">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="livingroom"? "bg-blue-900":""}`}>Living Room Floor Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/floortiles/outdoor">
        <div className='flex'>
        <button className={`px-3 py-1 hover:bg-blue-900 ${isActive==="outdoor"? "bg-blue-900":""}`}>Outdoor Floor Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
    </nav>
    <div className='block md:flex lg:flex'>
       <div className='pt-6'> <Search/></div>
       <div>{children}</div>
    </div>
 
        </>
    )
}