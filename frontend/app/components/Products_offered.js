"useclient"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from 'framer-motion';
import styles from '../Line.module.css';
import bathroom_icon from "../../public/images/icons8-bathroom-100.png";
import bedroom_icon from "../../public/images/icons8-bedroom-96.png";
import kitchen_icon from "../../public/images/icons8-kitchen-80.png";
import outdoor_icon from "../../public/images/icons8-house-64.png";
import livingroom_icon from "../../public/images/icons8-livingroom-60.png";
import Image from 'next/image';
import Link from 'next/link';

function Products() {
  const [wallTiles, setWallTiles] = useState([]);
  const [floorTiles, setFloorTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadingFloor, setLoadingFloor] = useState(true);
  const [errorFloor, setErrorFloor] = useState("");
  const tiles1 = "Wall Tiles";
  const tiles2 = "Floor Tiles";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/tiles/photos/?product=${tiles1}`);
        const data = await response.json();
        setWallTiles([data[0], data[1], data[2]]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [wallTiles]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/tiles/photos/?product=${tiles2}`);
        const data = await response.json();
        setFloorTiles([data[0], data[1], data[2]]);
        setLoadingFloor(false);
      } catch (error) {
        setErrorFloor(error);
        setLoadingFloor(false);
      }
    };

    fetchData();
  }, [floorTiles]);


  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log("e1", error);
  if (loadingFloor) return <h1>LOADING...</h1>;
  if (errorFloor) console.log("e2", errorFloor);


  return (
    <>
      <div>
        {/* Explore wall tiles */}
        <div className='flex flex-col lg:flex lg:flex-row justify-center items-center min-h-screen md:m-10 bg-gray-100'>
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
            {wallTiles ? (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex h-[220px] w-[90vw] md:w-[450px] bg-gray-600'>
                <div><img src={(wallTiles[0]?.url)} alt='tiles_image' className='h-[220px] w-[30vw] md:w-[150px]' /></div>
                <div><img src={(wallTiles[1]?.url)} alt='tiles_image' className='h-[220px] w-[30vw] md:w-[150px]' /></div>
                <div><img src={(wallTiles[2]?.url)} alt='tiles_image' className='h-[220px] w-[30vw] md:w-[150px]' /></div>
              </motion.div>
            ) : null}
            <button
              className='my-2 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm hover:border hover:border-black'>
              <Link href="products/walltiles">Explore All</Link>
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
                <Link href="/products/walltiles/bathroom" className='text-sm py-2 '>Bathroom Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/walltiles/bathroom" className={styles.link}>Explore Now</Link>
                </div>
              </div>
              <div className='bg-white h-[220px] w-[240px]  flex flex-col justify-center items-center'>
                <Image src={livingroom_icon} alt='icon' />
                <Link href="/products/walltiles/livingroom" className='text-sm py-2 '>Living Room Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/walltiles/livingroom" className={styles.link}>Explore Now</Link>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-white h-[220px] w-[240px] m-0.5 md:m-0 md:ml-0.5 md:mb-0.5  flex flex-col justify-center items-center'>
                <Image src={kitchen_icon} alt='icon' />
                <Link href="/products/walltiles/kitchen" className='text-sm py-2 '>Kitchen Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/walltiles/kitchen" className={styles.link}>Explore Now</Link>
                </div>
              </div>
              <div className='bg-white h-[220px] w-[240px] ml-0.5 flex flex-col justify-center items-center'>
                <Image src={outdoor_icon} alt='icon' />
                <Link href="/products/walltiles/outdoor" className='text-sm py-2 '>Outdoor Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/walltiles/outdoor" className={styles.link}>Explore Now</Link>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-white h-[220px] w-[240px] m-0.5 md:m-0 md:mb-0.5 md:ml-3 flex flex-col justify-center items-center'>
                <Image src={bedroom_icon} alt='icon' />
                <Link href="/products/walltiles/bedroom" className='text-sm py-2 '>Bedroom Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/walltiles/bedroom" className={styles.link}>Explore Now</Link>
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
                <Link href="/products/floortiles/bathroom" className='text-sm py-2 '>Bathroom Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/floortiles/bathroom" className={styles.link}>Explore Now</Link>
                </div>
              </div>
              <div className='bg-gray-100 h-[220px] w-[240px]  flex flex-col justify-center items-center'>
                <Image src={livingroom_icon} alt='icon' />
                <Link href="/products/floortiles/livingroom" className='text-sm py-2 '>Living Room Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/floortiles/livingroom" className={styles.link}>Explore Now</Link>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-gray-100 h-[220px] w-[240px] m-0.5 md:m-0 md:ml-0.5 md:mb-0.5  flex flex-col justify-center items-center'>
                <Image src={kitchen_icon} alt='icon' />
                <Link href="/products/floortiles/kitchen" className='text-sm py-2 '>Kitchen Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/floortiles/kitchen" className={styles.link}>Explore Now</Link>
                </div>
              </div>
              <div className='bg-gray-100 h-[220px] w-[240px] ml-0.5 flex flex-col justify-center items-center'>
                <Image src={outdoor_icon} alt='icon' />
                <Link href="/products/floortiles/outdoor" className='text-sm py-2 '>Outdoor Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/floortiles/outdoor" className={styles.link}>Explore Now</Link>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-gray-100 h-[220px] w-[240px] m-0.5 md:m-0 md:mb-0.5 md:ml-3 flex flex-col justify-center items-center'>
                <Image src={bedroom_icon} alt='icon' />
                <Link href="/products/floortiles/bedroom" className='text-sm py-2 '>Bedroom Wall Tiles</Link>
                <div className='text-sm  py-1  text-blue-500' >
                  <Link href="/products/floortiles/bedroom" className={styles.link}>Explore Now</Link>
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
            {floorTiles ? (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex h-[220px] md:w-[450px] w-[90vw] bg-gray-600'>
                <div><img src={(floorTiles[0]?.url)} alt='tiles_image' className='h-[220px] w-[30vw] md:w-[150px]' /></div>
                <div><img src={(floorTiles[1]?.url)} alt='tiles_image' className='h-[220px] w-[30vw] md:w-[150px]' /></div>
                <div><img src={(floorTiles[2]?.url)} alt='tiles_image' className='h-[220px] w-[30vw] md:w-[150px]' /></div>
              </motion.div>
            ) : null}
            <button
              className='my-2 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm hover:border hover:border-black'>
              <Link href="products/floortiles">
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
