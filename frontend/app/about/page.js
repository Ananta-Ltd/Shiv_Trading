"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import about from "../../public/images/tiles3.jpg";

const AboutUs = () => {
  return (
   
    <div className="pt-16 md:pt-14 flex flex-col">
      <div className=" md:pl-20 px-10 md:px-16 pt-8">
        
      <div style={{  }}>
           
            <Image src={about} alt="about" className=' h-[200px] md:h-[300px] rounded-lg shadow-2xl'/>
         
          </div>
        
      </div>
       
      
      <div className='lg:px-8'>
       
     
      <div className='container-row text-[14px] text-gray-500 flex items-center justify-center mt-6'>
      <Link href="/">{" "}<span className="text-[#000088] hover:text-slate-500">HOME{" "}</span></Link>
      <span className="p-1">&raquo;</span>
      About
      </div>

     
       <div className='px-12 md:px-12'>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-[32px] mb-4 mt-3 flex items-center justify-center" 
        
      ><span className="text-[#000088]">ABOUT SHIV TRADING</span>
        
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[17px] text-gray-500 pb-6" style={{ textAlign: 'justify' }}
      >
        Kajaria Ceramics is the largest manufacturer of ceramic/vitrified tiles in India. It has an annual aggregate capacity of 81.55 mn. sq. meters, distributed across seven plants - Sikandrabad in Uttar Pradesh, Gailpur & Malootana in Rajasthan, Srikalahasti in Andhra Pradesh, Balanagar in Telangana and two plants in Gujarat.
        Kajaria's manufacturing units are equipped with cutting edge modern technology. Intense automation, robotic car application and a zero chance for human error are few reasons for Kajaria to be the number 1 in the industry.
        <br /><br />

        Founded 34 years ago, Kajaria has since then grown stronger with its hard work, innovations and patronage from our discerning customers.
        The Indian consumers' rapidly growing appetite for style and aesthetics is the inspiration behind every design of Kajaria and its pace to keep up with the customer and market demands has made Kajaria a synonym for quality, service and innovation - not only in the domestic market but in the international market too.
        Kajaria Ceramics has increased its capacity from 1 mn. sq. mtrs to 81.55 mn. sq. mtrs. in last 34 years and offers more than 3000 options in ceramic wall & floor tiles, vitrified tiles, designer tiles and much more.
        <br /><br /> 
        
        These tiles come in a wide range of colours and textures to complement bathrooms, living rooms, corridors, study rooms & kitchen, born out of an inspired creativity of those who feel that rooms should be an extension of the beauty reflected. With an unparalleled commitment towards quality we have strived to adopt technologies and standards with the changing times.
        Be it technology, research, design or quality, Kajaria has set its sight on all these factors adopting new production techniques in order to enhance the quality of its products. Due to creativity and design ability of our team, our design comprises both innovation and exclusivity.
        Leveraging the two invaluable assets - the Kajaria brand and unparalleled, multi-layer distribution network - to expand the product bouquet to cater to the growing aspirations of the discerning Indian customers.
      </motion.p>
      </div>
      </div>
      </div>

    
   
  );
};

export default AboutUs;


    
    

  