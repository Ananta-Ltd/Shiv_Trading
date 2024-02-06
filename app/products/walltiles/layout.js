"use client"
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import dynamic from "next/dynamic";
const Search_By_ProductName = dynamic(
  () => import('../../components/Search_by_productname'),
  {
    loading: () => <p>Loading...</p>,
  }
)
const Search_BY_Size = dynamic(
  () => import('../../components/Search_by_Size'),
  {
    loading: () => <p>Loading...</p>,
  }
)

export default function RootLayout({children}){
    const currentPage = usePathname();
    const isActive = currentPage.slice(20);
    
    return(
        <>
        <nav className='flex justify-center relative my-5  text-sm bg-blue-950  text-white overflow-x-auto'>
            <Link href="/products/walltiles/bathroom"><button className={`px-3 py-1  ml-20 md:ml-0 hover:bg-blue-900 ${isActive==="bathroom"? "bg-blue-900":""}`}>Bathroom Wall Tiles</button> </Link>
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
            <div className='flex flex-col'>
                <div className='pl-8 mt-2'>
                    <p className=' tracking-tight text-sm font-[600]'>
                        <Link href="/">Home</Link> &gt;&gt;  
                        <Link href="/products"> Products</Link> &gt;&gt;  
                        <Link href="/products/floortiles"> Walltiles</Link> {` ${isActive&&">>"} ${isActive.charAt(0).toUpperCase()+isActive.slice(1)}`}
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