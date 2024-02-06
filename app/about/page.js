"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import about from "../../public/images/tiles3.jpg";

const AboutUs = () => {
  return (

    <div className="flex flex-col ">
        <div className='flex justify-center'>
          <Image src={about} alt="about" className=' h-[550px] w-full lg:w-[78vw] object-cover' />
        </div>
      <div className='lg:px-8'>
        <div className='flex  justify-center md:justify-start my-2 mx-16 '>
          <Link href="/" prefetch={false}>
            <p className='hover:text-blue-500'>Home</p>
          </Link>
          <p className='px-2'>&gt;&gt;</p>
          <p className='text-blue-500'>About</p>
        </div>

        <div className='px-12 md:px-12'>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[32px] mb-4 mt-3 flex "

          ><span className="text-[#000088] ">ABOUT SHIV TRADING</span>

          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[17px] text-gray-500 pb-6" style={{ textAlign: 'justify' }}
          >
            Shiv trading is the largest manufacturer of ceramic/vitrified tiles in India. It has an annual aggregate capacity of 81.55 mn. sq. meters, distributed across seven plants - Sikandrabad in Uttar Pradesh, Gailpur & Malootana in Rajasthan, Srikalahasti in Andhra Pradesh, Balanagar in Telangana and two plants in Gujarat.
            Shiv trading's manufacturing units are equipped with cutting edge modern technology. Intense automation, robotic car application and a zero chance for human error are few reasons for Shiv trading to be the number 1 in the industry.
            <br /><br />

            Founded 34 years ago, Shiv trading has since then grown stronger with its hard work, innovations and patronage from our discerning customers.
            The Indian consumers' rapidly growing appetite for style and aesthetics is the inspiration behind every design of Shiv trading and its pace to keep up with the customer and market demands has made Shiv trading a synonym for quality, service and innovation - not only in the domestic market but in the international market too.
            Shiv trading Ceramics has increased its capacity from 1 mn. sq. mtrs to 81.55 mn. sq. mtrs. in last 34 years and offers more than 3000 options in ceramic wall & floor tiles, vitrified tiles, designer tiles and much more.
            <br /><br />

            These tiles come in a wide range of colours and textures to complement bathrooms, living rooms, corridors, study rooms & kitchen, born out of an inspired creativity of those who feel that rooms should be an extension of the beauty reflected. With an unparalleled commitment towards quality we have strived to adopt technologies and standards with the changing times.
            Be it technology, research, design or quality, Shiv trading has set its sight on all these factors adopting new production techniques in order to enhance the quality of its products. Due to creativity and design ability of our team, our design comprises both innovation and exclusivity.
            Leveraging the two invaluable assets - the Shiv trading brand and unparalleled, multi-layer distribution network - to expand the product bouquet to cater to the growing aspirations of the discerning Indian customers.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;