import { BiMap } from 'react-icons/bi';
import { FaPhone,  FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import about from "../../public/images/map2.png";

const app = () => {

  return (
    <div className="mt-10 ">
      <div className=" relative">
        <div className=" md:mx-24 relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image src={about} alt="about" loading="eager" className="h-[300px] w-[100xw] md:w-[90vw] bg-black object-cover" />
          <Link href={`${process.env.NEXT_PUBLIC_clientLocationUrl}`} prefetch={false} target="_blank" rel="noopener noreferrer">
            <button className="absolute flex top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-blue-950 text-white px-3 py-2  text-[14px] border-blue-950 hover:bg-white hover:text-black  cursor-pointer">
              <BiMap className='text-[22px] mr-1' />
              Find Our Store
            </button>
          </Link>
        </div>
      </div>

      <div className='flex  justify-center md:justify-start my-2 mx-16 px-10'>
        <Link href="/" prefetch={false}>
          <p className='hover:text-blue-500'>Home</p>
        </Link>
        <p className='px-2'>&gt;&gt;</p>
        <p className='text-blue-500'>Where to buy</p>
      </div>

      <div className='text-[32px] pl-2 pt-4 text-[#000088] mx-24'>
        Information
      </div>

      <div className="border-b border-b-grey my-3 mx-24"></div>

      <div className='flex flex-col justify-center items-center '>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4  lg:gap-16 mt-4 mb-3  '>
          <div className='flex gap-[4px] text-[#000088] text-[18px]'>
            <BiMap className=' text-[26px]' />
            Location: <span className="text-gray-500"> Biratnagar 56613</span>

          </div>

          <div className='flex gap-[8px]  text-[18px] text-[#000088] '>
            <FaPhone className='text-[18px] mt-1' />
            Contact: <span className="text-gray-500"> 9812345678</span>
          </div>

          <div className='flex gap-[8px] text-[#000088] text-[18px]'>
            <FaEnvelope className='text-[18px] mt-1' />
            Gmail: <span className="text-gray-500">saurav@gamil.com</span>
          </div>
        </div>

        <div className='flex justify-center items-center text-gray-500 text-[18px] mt-1'>
          or visit our faceboook page
          <Link href="https://www.facebook.com/search/top?q=shiv%20trading%20tiles%2C%20marbles%20and%20sanitary" prefetch={false} target="_blank" rel="noopener noreferrer" className="text-[#000088] hover:text-indigo-500 ml-2">

            here.
          </Link>
        </div>

        <div className="border-b border-b-grey mb-2"></div>
      </div>
    </div>
  );
};

export default app;