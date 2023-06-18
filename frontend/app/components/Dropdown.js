import React from 'react'
import styles from '../Line.module.css';
import Link
 from 'next/link';
function Dropdown() {
  return (
  <div className='flex justify-center'>
      <div className='  md:fixed md:z-10  lg:fixed lg:z-10 w-full md:w-full lg:w-2/3 bg-white md:shadow-md lg:shadow-md'>    
      <div className='bg-gray-500 w-full h-0 lg:h-[0.5px] md:h-[0.5px]'></div>
       <ul className='md:flex lg:flex justify-center md:space-x-11 lg:space-x-11  my-4  tracking-[1px] text-sm'>
           <div>
               <Link href="products/walltiles"><h2 className='font-bold text-lg text-blue-900 hover:text-blue-950 ml-6 md:ml-0 lg:ml-0' >WALL TILES</h2></Link>
               <Link href="/" className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Bathroom Wall Tiles</p></Link>
               <Link href="/" className={styles.link} ><p  className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Kitchen Wall Tiles</p></Link>
               <Link href="/" className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Outdoor Wall Tiles</p></Link>
               <Link href="/" className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Bedroom Wall Tiles</p></Link>
               <Link href="/" className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Living Wall Tiles</p></Link>
           </div>
           <div>
           <Link href="products/floortiles"><h2 className='font-bold text-lg text-blue-900 hover:text-blue-950 ml-6 md:ml-0 lg:ml-0'>FLOOR TILES</h2></Link>
                <Link href="/" className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Outdoor Wall Tiles</p></Link>
                <Link href="/" className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Living Wall Tiles</p></Link>
               <Link href="/" className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Bedroom Wall Tiles</p></Link>
               <Link href="/" className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Bathroom Wall Tiles</p></Link>
               <Link href="/" className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Kitchen Wall Tiles</p></Link>
               
           </div>
           <div>
           <h2 className='font-bold text-lg text-blue-900 hover:text-blue-950 ml-6 md:ml-0 lg:ml-0'>GRANITES AND MARBLES</h2>
           <h2 className='font-bold text-lg text-blue-900 hover:text-blue-950 ml-6 md:ml-0 lg:ml-0'>SANITARY AND CP FITTINGS</h2>
           </div>
       </ul>
       {/* <div className='mt-4'>
           <h2 className='font-bold text-lg text-blue-900 '>TRANDING PRODUCTS</h2>
       </div> */}
       </div>
  </div>
  )
}

export default Dropdown