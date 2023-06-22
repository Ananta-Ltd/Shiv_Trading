"use client"
import Search from '@/app/components/Search';
import Link from 'next/link';

export default function RootLayout({children}){
    return(
        <>
            <nav className='flex justify-center relative my-5  text-sm bg-blue-950  text-white'>
        <Link href="/products/walltiles/bathroomwalltiles"><button className="px-3 py-1 hover:bg-blue-900">Bathroom Wall Tiles</button> </Link>
        <Link href="/products/walltiles/kitchenwalltiles">
        <div className='flex '>
        <button className="px-3 py-1  hover:bg-blue-900">Kitchen Wall Tiles</button>
         <div className='h-full w-[0.5px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/walltiles/bedroomwalltiles">
        <div className='flex'>
        <button className="px-3 py-1 hover:bg-blue-900">Bedroom Wall Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/walltiles/livingroomwalltiles">
        <div className='flex'>
        <button className="px-3 py-1 hover:bg-blue-900">Living Room Wall Tiles</button>
         <div className='h-full w-[1px] bg-white absolute center'></div>
        </div>
        </Link>
        <Link href="/products/walltiles/outdoorwalltiles">
        <div className='flex'>
        <button className="px-3 py-1 hover:bg-blue-900">Outdoor Wall Tiles</button>
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