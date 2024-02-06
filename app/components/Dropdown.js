import React from 'react';
import styles from '../Line.module.css';
import Link from 'next/link';
function Dropdown() {
    return (
        <div className='flex justify-center'>
            <div className='  md:fixed md:z-10  lg:fixed lg:z-10 w-full md:w-full lg:w-2/3 bg-white md:shadow-md lg:shadow-md'>
                <div className='bg-gray-500 w-full h-0 lg:h-[0.5px] md:h-[0.5px]'></div>
                <ul className='md:flex lg:flex justify-center md:space-x-11 lg:space-x-11  my-4  tracking-[1px] text-sm'>
                    <div>
                        <Link href="/products/walltiles" ><h2 className='font-bold text-lg text-blue-900 hover:text-blue-950 ml-6 md:ml-0 lg:ml-0' >WALL TILES</h2></Link>
                        <Link href="/products/walltiles/bathroom" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Bathroom Wall Tiles</p></Link>
                        <Link href="/products/walltiles/kitchen" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Kitchen Wall Tiles</p></Link>
                        <Link href="/products/walltiles/outdoor" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Outdoor Wall Tiles</p></Link>
                        <Link href="/products/walltiles/bedroom" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Bedroom Wall Tiles</p></Link>
                        <Link href="/products/walltiles/livingroom" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Living Room Wall Tiles</p></Link>
                    </div>
                    <div>
                        <Link href="/products/floortiles" prefetch={false}><h2 className='font-bold text-lg text-blue-900 hover:text-blue-950 ml-6 md:ml-0 lg:ml-0'>FLOOR TILES</h2></Link>
                        <Link href="/products/floortiles/outdoor" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Outdoor Floor Tiles</p></Link>
                        <Link href="/products/floortiles/livingroom" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Living Room Floor Tiles</p></Link>
                        <Link href="/products/floortiles/bedroom" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Bedroom Floor Tiles</p></Link>
                        <Link href="/products/floortiles/bathroom" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Bathroom Floor Tiles</p></Link>
                        <Link href="/products/floortiles/kitchen" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Kitchen Floor Tiles</p></Link>

                    </div>
                    <div>
                        <Link href="/products/granitesandmarbles" prefetch={false}><h2 className='font-bold text-lg text-blue-900 hover:text-blue-950 ml-6 md:ml-0 lg:ml-0'>GRANITES AND MARBLES</h2></Link>
                        <Link href="/products/granitesandmarbles/Rajasthani"  prefetch={false}className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>Rajasthani</p></Link>
                        <Link href="/products/granitesandmarbles/South%20Indian" prefetch={false} className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>South Indian</p></Link>
                        <Link href="/products/granitesandmarbles/North%20Indian"  prefetch={false}className={styles.link} ><p className='py-1.5 ml-11 md:ml-0 lg:ml-0'>North Indian</p></Link>
                        <Link href="/products/sanitaryandcp_fittings" prefetch={false}> <h2 className='font-bold text-lg text-blue-900 hover:text-blue-950 ml-6 mt-3  md:ml-0 lg:ml-0'>SANITARY AND CP FITTINGS</h2></Link>
                    </div>

                </ul>
            </div>
        </div>
    )
}
export default Dropdown