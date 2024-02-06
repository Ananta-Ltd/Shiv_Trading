import { motion } from 'framer-motion';
import styles from '../Line.module.css';
import bathroom_icon from "../../public/images/icons8-bathroom-100.png";
import bedroom_icon from "../../public/images/icons8-bedroom-96.png";
import kitchen_icon from "../../public/images/icons8-kitchen-80.png";
import outdoor_icon from "../../public/images/icons8-house-64.png";
import livingroom_icon from "../../public/images/icons8-livingroom-60.png";
import walltiles4 from "../../public/images/walltiles4.jpg";
import walltiles3 from "../../public/images/walltiles3.jpg";
import walltiles5 from "../../public/images/walltiles5.jpg";
import floortiles1 from "../../public/images/floortiles1.jpg";
import floortiles2 from "../../public/images/floortiles2.jpg";
import floortiles3 from "../../public/images/floortiles3.jpg";
import Image from 'next/image';
import Link from 'next/link';

function Products() {

  return (
    <>
      <div>
        {/* Explore wall tiles */}
        <div className='flex flex-col lg:flex lg:flex-row justify-center items-center min-h-screen  md:m-10 bg-gray-100 '>
          <div className=' h-[500px] w-[95vw] md:w-[500px] sm:p-1 md:p-8 pt-0 flex flex-col justify-center items-center md:block md:h-[540px] md:mb-4  '>
            <motion.h4
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='text-sm text-blue-950 font-bold pb-0 lg:pb-4 mt-4 lg:mt-0'>
              SHIVTRADING BRINGS TO YOU PREMIUM TILES
            </motion.h4>
            <h1 className=' font-bold text-2xl tracking-wider'>Explore Our Wall Tiles</h1>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='w-[300px] py-4 pl-3 md:pl-0'>Shivtrading brings to you premium wall tiles that are detailed with perfection.
              Each tile is made using state of the art technology making them strong, durable & easy to maintain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex h-[220px] w-[90vw] md:w-[450px] bg-gray-600'>
              <div className='h-[220px] w-[30vw] md:w-[150px] relative' ><Image src={walltiles4} fill={true} alt='tiles_image' /></div>
              <div className='h-[220px] w-[30vw] md:w-[150px] relative' ><Image src={walltiles3} fill={true} alt='tiles_image' /></div>
              <div className='h-[220px] w-[30vw] md:w-[150px] relative' ><Image src={walltiles5} fill={true} alt='tiles_image' /></div>
            </motion.div>

            <button
              className='my-2 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm hover:border hover:border-black'>
              <Link href="products/walltiles" prefetch={false}>Explore All</Link>
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=' flex flex-col items-center md:flex md:flex-row md:items-start h-[450px] w-[80vw] md:w-[480px] overflow-x-auto '>
            <div>
              <div className='bg-white h-[220px] w-[240px] mb-0.5  flex flex-col justify-center items-center '>
                <Image src={bathroom_icon} alt='icon' className='mt-4 py-2' />
                <Link href="/products/walltiles/bathroom" prefetch={false} className='text-sm py-2 '>Bathroom Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/walltiles/bathroom" prefetch={false} className={styles.link}>Explore Now</Link>
                </div>
              </div>
              <div className='bg-white h-[220px] w-[240px]  flex flex-col justify-center items-center'>
                <Image src={livingroom_icon} alt='icon' />
                <Link href="/products/walltiles/livingroom" prefetch={false} className='text-sm py-2 '>Living Room Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/walltiles/livingroom" prefetch={false} className={styles.link}>Explore Now</Link>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-white h-[220px] w-[240px] m-0.5 md:m-0 md:ml-0.5 md:mb-0.5  flex flex-col justify-center items-center'>
                <Image src={kitchen_icon} alt='icon' />
                <Link href="/products/walltiles/kitchen" prefetch={false} className='text-sm py-2 '>Kitchen Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/walltiles/kitchen" prefetch={false} className={styles.link}>Explore Now</Link>
                </div>
              </div>
              <div className='bg-white h-[220px] w-[240px] ml-0.5 flex flex-col justify-center items-center'>
                <Image src={outdoor_icon} alt='icon' />
                <Link href="/products/walltiles/outdoor" prefetch={false} className='text-sm py-2 '>Outdoor Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/walltiles/outdoor" prefetch={false} className={styles.link}>Explore Now</Link>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-white h-[220px] w-[240px] m-0.5 md:m-0 md:mb-0.5 md:ml-3 flex flex-col justify-center items-center'>
                <Image src={bedroom_icon} alt='icon' />
                <Link href="/products/walltiles/bedroom" prefetch={false} className='text-sm py-2 '>Bedroom Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/walltiles/bedroom" prefetch={false} className={styles.link}>Explore Now</Link>
                </div>
              </div>
              <div className='hidden bg-white h-[220px] w-[240px]  ml-3 md:flex justify-center items-center'></div>
            </div>
            <div>
              <div className='hidden bg-white h-[220px] w-[240px] mx-0.5 mb-0.5 md:flex justify-center items-center'></div>
              <div className='hidden bg-white h-[220px] w-[240px] mx-0.5 md:flex justify-center items-center'></div>
            </div>
          </motion.div>

        </div>
        {/* Explore Floor Tiles */}
        <div className='flex flex-col lg:flex lg:flex-row justify-center items-center min-h-screen m-10'>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=' flex flex-col items-center md:flex md:flex-row md:items-start h-[450px] w-[80vw] md:w-[480px] overflow-x-auto '>
            <div>
              <div className='bg-gray-100 h-[220px] w-[240px] mb-0.5  flex flex-col justify-center items-center '>
                <Image src={bathroom_icon} alt='icon' className='mt-4 py-2' />
                <Link href="/products/floortiles/bathroom" prefetch={false} className='text-sm py-2 '>Bathroom Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/floortiles/bathroom" prefetch={false} className={styles.link}>Explore Now</Link>
                </div>
              </div>
              <div className='bg-gray-100 h-[220px] w-[240px]  flex flex-col justify-center items-center'>
                <Image src={livingroom_icon} alt='icon' />
                <Link href="/products/floortiles/livingroom" prefetch={false} className='text-sm py-2 '>Living Room Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/floortiles/livingroom" prefetch={false} className={styles.link}>Explore Now</Link>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-gray-100 h-[220px] w-[240px] m-0.5 md:m-0 md:ml-0.5 md:mb-0.5  flex flex-col justify-center items-center'>
                <Image src={kitchen_icon} alt='icon' />
                <Link href="/products/floortiles/kitchen" prefetch={false} className='text-sm py-2 '>Kitchen Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/floortiles/kitchen" prefetch={false} className={styles.link}>Explore Now</Link>
                </div>
              </div>
              <div className='bg-gray-100 h-[220px] w-[240px] ml-0.5 flex flex-col justify-center items-center'>
                <Image src={outdoor_icon} alt='icon' />
                <Link href="/products/floortiles/outdoor" prefetch={false} className='text-sm py-2 '>Outdoor Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/floortiles/outdoor" prefetch={false} className={styles.link}>Explore Now</Link>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-gray-100 h-[220px] w-[240px] m-0.5 md:m-0 md:mb-0.5 md:ml-3 flex flex-col justify-center items-center'>
                <Image src={bedroom_icon} alt='icon' />
                <Link href="/products/floortiles/bedroom" prefetch={false} className='text-sm py-2 '>Bedroom Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/floortiles/bedroom" prefetch={false} className={styles.link}>Explore Now</Link>
                </div>
              </div>
              <div className='hidden bg-gray-100 h-[220px] w-[240px]  ml-3 md:flex justify-center items-center'></div>
            </div>
            <div>
              <div className='hidden bg-gray-100 h-[220px] w-[240px] mx-0.5 mb-0.5 md:flex justify-center items-center'></div>
              <div className='hidden bg-gray-100 h-[220px] w-[240px] mx-0.5 md:flex justify-center items-center'></div>
            </div>
          </motion.div>
          <div className=' h-[500px]  w-[95vw] md:w-[500px] sm:p-1 md:p-8 pt-0 flex flex-col justify-center items-center md:block'>
            <motion.h4
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='text-sm text-blue-950 font-bold pb-0 lg:pb-4 mt-4 lg:mt-0'>SHIVTRADING BRINGS TO YOU PREMIUM TILES</motion.h4>
            <h1 className=' font-bold text-2xl tracking-wider'>Explore Our Floor Tiles</h1>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='w-[300px] py-4 pl-3 md:pl-0'>Shivtrading brings to you premium wall tiles that are detailed with perfection.
              Each tile is made using state of the art technology making them strong, durable & easy to maintain.</motion.p>

            <motion.div
              initial={{ opacity: 0, y: 200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex h-[220px] md:w-[450px] w-[90vw] bg-gray-600'>
              <div className='h-[220px] w-[30vw] md:w-[150px] relative' ><Image src={floortiles1} fill={true} alt='tiles_image' /></div>
              <div className='h-[220px] w-[30vw] md:w-[150px] relative' ><Image src={floortiles2} fill={true} alt='tiles_image'  /></div>
              <div className='h-[220px] w-[30vw] md:w-[150px] relative' ><Image src={floortiles3} fill={true} alt='tiles_image' /></div>
            </motion.div>

            <button
              className='my-2 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm hover:border hover:border-black'>
              <Link href="products/floortiles" prefetch={false} >
                Explore All
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;