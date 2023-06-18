"use client"
import { BiMap } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import Link from 'next/link';
import Image from 'next/image';
import about from "../../public/images/map3.png";

const  app = () => {
  const clientLocationUrl = "https://www.google.com/maps/place/Shiv+Trading+Tiles+(+%E0%A4%B6%E0%A4%BF%E0%A4%B5+%E0%A4%9F%E0%A5%87%E0%A4%A1%E0%A4%BF%E0%A4%99+%E0%A4%9F%E0%A4%BE%E0%A4%AF%E0%A4%B2%E0%A5%8D%E0%A4%B8+)/@26.4330809,87.2773482,15.5z/data=!4m14!1m7!3m6!1s0x39ef757e48af75ef:0x4d58d6a5424b8723!2zU2hpdiBUcmFkaW5nIFRpbGVzICgg4KS24KS_4KS1IOCkn-Clh-CkoeCkv-CkmSDgpJ_gpL7gpK_gpLLgpY3gpLggKQ!8m2!3d26.4359439!4d87.2759789!16s%2Fg%2F11klwmtg02!3m5!1s0x39ef757e48af75ef:0x4d58d6a5424b8723!8m2!3d26.4359439!4d87.2759789!16s%2Fg%2F11klwmtg02?entry=ttu";
  
  return (
    <div className="mt-16 md:mt-14">
      
      <div className="mt-16 md:mt-14 relative">
  <div className="mx-16 md:mx-24 relative">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <Image src={about} alt="about" className="h-[150px] md:h-[300px] bg-black" />
    <Link href={clientLocationUrl} target="_blank" rel="noopener noreferrer">
      <button className="absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000044] text-white px-3 py-2 rounded-md text-[14px] hover:bg-[#000088] cursor-pointer">
        <BiMap className='text-[26px] mr-2' />
        Find Our Store
      </button>
    </Link>
  </div>
</div>
      
      <div className='container-row text-[14px] items-start text-gray-500 pl-24 pt-4'>
      <Link href="/">{" "}
      <span className="text-[#000088] hover:text-slate-500">HOME{" "}
      </span>
      </Link>
      <span className="p-1">&raquo;</span>
      Where to buy
      </div>

       <div className='pl-24 pr-24'>
        <div className='text-[32px] pl-2 pt-4 text-[#000088]'>
        Information
        </div>

        <div className="border-b border-b-grey mt-3"></div>



          
          

         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 mb-3 '>
        <div className='flex gap-[4px] px-8 text-[#000088] text-[18px]'>
          <BiMap className=' text-[26px]'/>
            Location: <span className="text-gray-500"> Biratnagar 56613</span>
            
        </div>

        <div className='flex gap-[8px] px-8 text-[18px] text-[#000088] '>
          <FaPhone className='text-[18px] mt-1' />
            Contact: <span className="text-gray-500"> 9812345678</span>
        </div>

        <div className='flex gap-[8px] px-8 text-[#000088] text-[18px]'>
          <FaEnvelope className='text-[18px] mt-1'/>
            Gmail: <span className="text-gray-500">saurav@gamil.com</span>
        </div>
        </div>
       
        <div className='flex justify-center items-center text-gray-500 text-[18px] mt-1'>
          Or visit our faceboook page
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#000088] hover:text-indigo-500 ml-2">
          
				     here.
            </Link>
        </div>
        
       <div className="border-b border-b-grey "></div>
       </div>
      </div>
      
      
      
    
  );
};

export default app ;
{/* <Link href={clientLocationUrl} target="_blank" rel="noopener noreferrer"> */}
{/* </Link> */}


    
    

  