"use client"
import Link from 'next/link';
import styles from '../Line.module.css';

const Page = () => {
  return (
   <>
   <div className='min-h-screen bg-gray-100 m-2 p-20 px-[50px]'>
    <h1 className=' text-3xl tracking-wide px-8 pt-3'>About Us</h1>
    <div>
        <p className='p-8 text-gray-600'>
        Shivtrading, the largest manufacturer of ceramic and vitrified tiles in India. It has an annual aggregate capacity of 86.07 mn. sq. meters, distributed across seven plants - Sikandrabad in Uttar Pradesh, Gailpur & Malootana in Rajasthan, Srikalahasti in Andhra Pradesh, Balanagar in Telangana and two plants in Gujarat. Equipped with cutting-edge technology, we strive to deliver quality products and services to our customers. Our team of experts work around the clock to ensure that the quality of our product is never compromised.

        In order to cater to the specific needs of our customers we produce various categories of tiles, including kitchen tiles, bathroom tiles, wall tiles, floor tiles and exterior wall tiles. We aim at producing tiles that complement the distinctive style of our customers and cater to the vast needs of Indian audience. All of our tiles are crafted with intense care using state-of-the-art technology to ensure that we live up to the expectations of our buyers. Choicest of materials are used to produce our magnificent range of products.
        </p>
       <h1
        className=' text-2xl tracking-wide px-8 pt-3 text-gray-600'> Designer Wall Tiles India for Bathroom & Kitchen</h1>
        <p className='p-8 text-gray-600'>Our mesmerizing range of designer bathroom & kitchen floor and wall tiles have a luxurious appeal and seem to have been struck with afflatus. The premier collection is a showstopper and has the ability to make any dimension look grand. Every single piece of tile from our range of designer bathroom & kitchen floor and wall tiles has a compelling aura. The matt finish tiles for kitchen from our collection fit perfectly with modern day designs while our rustic kitchen wall tiles blend easily with every surrounding.  

        </p>
      <div className='text-blue-500 p-8'>
        <Link href="#" className={styles.link}>Read more</Link>
      </div>
    </div>
   </div>
   </>
  );
};

export default Page;


    
    

  