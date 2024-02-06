import { FaRupeeSign } from 'react-icons/fa';

function page() {
  return (
    <div className=' h-[180vh] md:h-[80vh] w-full'>
      <div className='px-10 md:px-0 flex flex-col md:flex md:flex-row justify-center items-center md:space-x-10'>

        <div className='h-[300px] w-[200px] mb-[80px] bg-white text-center rounded-xl pt-8' >
          <h1 className='font-bold uppercase text-xl pb-6' >Basic</h1>
          <div className=' relative '>
            <div className='absolute  top-0  h-[22px] w-[103px]  bg-green-200 transform -rotate-12'></div>
            <div className='absolute  right-0 h-[22px] w-[103px]  bg-green-200 transform rotate-12'></div>
          </div>
          <div className='z-40 mt-3 h-full rounded-b-xl bg-green-200 '>
            <div className='p-4 '>
              <p className='py-4 h-[80px]'>View Finishing photos</p>
              <div className='flex mt-3 py-4'>
                <div className='pt-[15px] text-xl '><FaRupeeSign /></div>
                <h2 className='text-2xl font-bold pl-1 pr-2 py-2'>100</h2>
                <div className='bg-white h-10 w-[1px] mr-2 mt-1'></div>
                <p className='pt-[10px]'>per month</p>
              </div>
              <button type='button' className='text-white bg-gray-400 rounded-lg hover:bg-gray-500 px-5 py-1 m-4 mt-8'>BUY</button>
            </div>
          </div>
        </div>

        <div className='h-[300px] w-[200px] mb-[80px] bg-white text-center rounded-xl pt-8' >
          <h1 className='font-bold uppercase text-xl pb-6' >Standard</h1>
          <div className=' relative '>
            <div className='absolute  top-0  h-[22px] w-[103px]  bg-blue-200 transform -rotate-12'></div>
            <div className='absolute  right-0 h-[22px] w-[103px]  bg-blue-200 transform rotate-12'></div>
          </div>
          <div className='z-40 mt-3 h-full rounded-b-xl bg-blue-200 '>
            <div className='p-4'>
              <p className='py-4 h-[80px]'>View high quality finishing photos </p>
              <div className='flex mt-3 py-4'>
                <div className='pt-[15px] text-xl '><FaRupeeSign /></div>
                <h2 className='text-2xl font-bold pl-1 pr-2 py-2'>200</h2>
                <div className='bg-white h-10 w-[1px] mr-2 mt-1'></div>
                <p className='pt-[10px]'>per month</p>
              </div>
              <button type='button' className='text-white bg-gray-400 rounded-lg hover:bg-gray-500 px-5 py-1 m-4 mt-8'>BUY</button>
            </div>
          </div>
        </div>

        <div className='h-[300px] w-[200px] mb-[80px] bg-white text-center rounded-xl pt-8' >
          <h1 className='font-bold uppercase text-xl pb-6' >premium</h1>
          <div className=' relative '>
            <div className='absolute  top-0  h-[22px] w-[103px]  bg-orange-200 transform -rotate-12'></div>
            <div className='absolute  right-0 h-[22px] w-[103px]  bg-orange-200 transform rotate-12'></div>
          </div>
          <div className='z-40 mt-3 h-full rounded-b-xl bg-orange-200 '>
            <div className='p-4'>
              <p className='py-4 h-[80px]'>View high quality finishing photos and videos </p>
              <div className='flex mt-3 py-4'>
                <div className='pt-[15px] text-xl '><FaRupeeSign /></div>
                <h2 className='text-2xl font-bold pl-1 pr-2 py-2'>300</h2>
                <div className='bg-white h-10 w-[1px] mr-2 mt-1'></div>
                <p className='pt-[10px]'>per month</p>
              </div>
              <button type='button' className='text-white bg-gray-400 rounded-lg hover:bg-gray-500 px-5 py-1 m-4 mt-8'>BUY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
