"use client"
import Search_By_ProductName from '@/app/components/Search_by_productname';
import Search_BY_Size from '@/app/components/Search_by_Size';
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
       <div className='flex flex-col'>
            <div className='pl-8 mt-2'>
                <p className=' tracking-tight text-sm font-[600]'>
                    <Link href="/">Home</Link> &gt;&gt;  
                    <Link href="/products"> Products</Link> &gt;&gt;  
                    <Link href="./products/floortiles"> Floortiles</Link> {` ${isActive&&">>"} ${isActive.charAt(0).toUpperCase()+isActive.slice(1)}`}
                </p>
            </div>
            <div className='pt-6'> <Search_By_ProductName/></div>
            <div className='pt-6'> <Search_BY_Size/></div>
       </div>
       <div>{children}</div>
    </div>
 
        </>
    )
}