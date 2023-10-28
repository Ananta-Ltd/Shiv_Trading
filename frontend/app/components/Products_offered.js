"useclient"
import React,{  useEffect, useRef} from 'react'
import { motion, useInView, useAnimation} from 'framer-motion';
import styles from '../Line.module.css';
import bathroom_icon from "../../public/images/icons8-bathroom-100.png";
import bedroom_icon from "../../public/images/icons8-bedroom-96.png";
import kitchen_icon from "../../public/images/icons8-kitchen-80.png";
import outdoor_icon from "../../public/images/icons8-house-64.png";
import livingroom_icon from "../../public/images/icons8-livingroom-60.png";
import Image from 'next/image';
import Link from 'next/link';

function Products() {

  return (
    <>
     <div>
      {/* Explore wall tiles */}
        <div className='flex flex-col md:flex md:flex-row justify-center items-center min-h-screen m-10 bg-gray-100'>
          <div className=' h-[500px] w-[500px] p-8 pt-0 flex flex-col justify-center items-center md:block'>
            <h4 className='text-sm text-blue-950 font-bold pb-4 '>SHIVTRADING BRINGS TO YOU PREMIUM TILES</h4>
            <h1 className=' font-bold text-2xl tracking-wider'>Explore Our Wall Tiles</h1>
            <p className='w-[300px] py-4 pl-3 md:pl-0'>Shivtrading brings to you premium wall tiles that are detailed with perfection.
               Each tile is made using state of the art technology making them strong, durable & easy to maintain.</p>
            <div className='flex h-[220px] w-[450px] bg-gray-600'>
              <div></div>
              <div></div>
              <div></div>
            </div> 
            <button className='my-2 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm hover:border hover:border-black'>Explore All</button>
          </div>
          <div className=' flex flex-col items-center md:flex md:flex-row md:items-start h-[450px] w-[480px] overflow-x-auto '>
              <div>
                 <div className='bg-white h-[220px] w-[240px] mb-0.5  flex flex-col justify-center items-center '>
                  <Image src={bathroom_icon} alt='icon' className='mt-4 py-2'/>
                  <Link href=".product/bathroomwalltiles" className='text-sm py-2 '>Bathroom Wall Tiles</Link>
                  <div  className='text-sm  py-1  text-blue-500' >
                  <Link href=".product/bathroomwalltiles" className={styles.link}>Explore Now</Link>
                  </div>
                 </div>
                 <div className='bg-white h-[220px] w-[240px]  flex flex-col justify-center items-center'>
                   <Image src={livingroom_icon} alt='icon'/>
                   <Link href=".product/bathroomwalltiles" className='text-sm py-2 '>Living Room Wall Tiles</Link>
                   <div  className='text-sm  py-1  text-blue-500' >
                  <Link href=".product/bathroomwalltiles" className={styles.link}>Explore Now</Link>
                  </div>
                 </div>
              </div>
              <div>
                 <div className='bg-white h-[220px] w-[240px] m-0.5 md:m-0 md:ml-0.5 md:mb-0.5  flex flex-col justify-center items-center'>
                   <Image src={kitchen_icon} alt='icon'/>
                   <Link href=".product/bathroomwalltiles" className='text-sm py-2 '>Kitchen Wall Tiles</Link>
                   <div  className='text-sm  py-1  text-blue-500' >
                  <Link href=".product/bathroomwalltiles" className={styles.link}>Explore Now</Link>
                  </div>
                 </div>
                 <div className='bg-white h-[220px] w-[240px] ml-0.5 flex flex-col justify-center items-center'>
                   <Image src={outdoor_icon} alt='icon'/>
                   <Link href=".product/bathroomwalltiles" className='text-sm py-2 '>Outdoor Wall Tiles</Link>
                   <div  className='text-sm  py-1  text-blue-500' >
                  <Link href=".product/bathroomwalltiles" className={styles.link}>Explore Now</Link>
                  </div>
                 </div>
              </div>
              <div>
                 <div className='bg-white h-[220px] w-[240px] m-0.5 md:m-0 md:mb-0.5 md:ml-3 flex flex-col justify-center items-center'>
                   <Image src={bedroom_icon} alt='icon'/>
                   <Link href=".product/bathroomwalltiles" className='text-sm py-2 '>Bedroom Wall Tiles</Link>
                    <div  className='text-sm  py-1  text-blue-500' >
                    <Link href=".product/bathroomwalltiles" className={styles.link}>Explore Now</Link>
                    </div>
                 </div>
                 <div className='hidden bg-white h-[220px] w-[240px]  ml-3 md:flex justify-center items-center'></div>
              </div>
              <div>
                 <div className='hidden bg-white h-[220px] w-[240px] mx-0.5 mb-0.5 md:flex justify-center items-center'></div>
                 <div className='hidden bg-white h-[220px] w-[240px] mx-0.5 md:flex justify-center items-center'></div>
              </div>
          </div>
         
        </div>
        {/* Explore Floor Tiles */}
        <div className='flex flex-col md:flex md:flex-row justify-center items-center min-h-screen m-10'>
         
          <div className=' flex flex-col items-center md:flex md:flex-row md:items-start h-[450px] w-[480px] overflow-x-auto '>
              <div>
                 <div className='bg-gray-100 h-[220px] w-[240px] mb-0.5  flex flex-col justify-center items-center '>
                  <Image src={bathroom_icon} alt='icon' className='mt-4 py-2'/>
                  <Link href=".product/bathroomwalltiles" className='text-sm py-2 '>Bathroom Wall Tiles</Link>
                  <div  className='text-sm  py-1  text-blue-500' >
                  <Link href=".product/bathroomwalltiles" className={styles.link}>Explore Now</Link>
                  </div>
                 </div>
                 <div className='bg-gray-100 h-[220px] w-[240px]  flex flex-col justify-center items-center'>
                   <Image src={livingroom_icon} alt='icon'/>
                   <Link href=".product/bathroomwalltiles" className='text-sm py-2 '>Living Room Wall Tiles</Link>
                   <div  className='text-sm  py-1  text-blue-500' >
                  <Link href=".product/bathroomwalltiles" className={styles.link}>Explore Now</Link>
                  </div>
                 </div>
              </div>
              <div>
                 <div className='bg-gray-100 h-[220px] w-[240px] m-0.5 md:m-0 md:ml-0.5 md:mb-0.5  flex flex-col justify-center items-center'>
                   <Image src={kitchen_icon} alt='icon'/>
                   <Link href=".product/bathroomwalltiles" className='text-sm py-2 '>Kitchen Wall Tiles</Link>
                   <div  className='text-sm  py-1  text-blue-500' >
                  <Link href=".product/bathroomwalltiles" className={styles.link}>Explore Now</Link>
                  </div>
                 </div>
                 <div className='bg-gray-100 h-[220px] w-[240px] ml-0.5 flex flex-col justify-center items-center'>
                   <Image src={outdoor_icon} alt='icon'/>
                   <Link href=".product/bathroomwalltiles" className='text-sm py-2 '>Outdoor Wall Tiles</Link>
                   <div  className='text-sm  py-1  text-blue-500' >
                  <Link href=".product/bathroomwalltiles" className={styles.link}>Explore Now</Link>
                  </div>
                 </div>
              </div>
              <div>
                 <div className='bg-gray-100 h-[220px] w-[240px] m-0.5 md:m-0 md:mb-0.5 md:ml-3 flex flex-col justify-center items-center'>
                   <Image src={bedroom_icon} alt='icon'/>
                   <Link href=".product/bathroomwalltiles" className='text-sm py-2 '>Bedroom Wall Tiles</Link>
                    <div  className='text-sm  py-1  text-blue-500' >
                    <Link href=".product/bathroomwalltiles" className={styles.link}>Explore Now</Link>
                    </div>
                 </div>
                 <div className='hidden bg-gray-100 h-[220px] w-[240px]  ml-3 md:flex justify-center items-center'></div>
              </div>
              <div>
                 <div className='hidden bg-gray-100 h-[220px] w-[240px] mx-0.5 mb-0.5 md:flex justify-center items-center'></div>
                 <div className='hidden bg-gray-100 h-[220px] w-[240px] mx-0.5 md:flex justify-center items-center'></div>
              </div>
          </div>  
          <div className=' h-[500px] w-[500px] p-8 pt-0 flex flex-col justify-center items-center md:block'>
            <h4 className='text-sm text-blue-950 font-bold pb-4 '>SHIVTRADING BRINGS TO YOU PREMIUM TILES</h4>
            <h1 className=' font-bold text-2xl tracking-wider'>Explore Our Wall Tiles</h1>
            <p className='w-[300px] py-4 pl-3 md:pl-0'>Shivtrading brings to you premium wall tiles that are detailed with perfection.
               Each tile is made using state of the art technology making them strong, durable & easy to maintain.</p>
            <div className='flex h-[220px] w-[450px] bg-gray-600'>
              <div></div>
              <div></div>
              <div></div>
            </div> 
            <button 
              className='my-2 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm hover:border hover:border-black'>
                Explore All
            </button>
          </div>  
        </div>
       
     </div>
    </>
  );
}
export default Products;
