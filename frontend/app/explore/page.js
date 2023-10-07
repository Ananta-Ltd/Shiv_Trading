import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className=' h-screen w-full'>
       <div className='flex justify-center text-center font-bold text-2xl h-[500px]'>
        <div className='w-[250px] h-[250px] bg-white shadow-md'>
          <h1  className=' text-red-300  m-4 p-4 '>Basic</h1>
        </div>
        <div className='text-green-300 w-[250px] m-4 p-4 bg-white shadow-md'>Standard</div>
        <div className='text-blue-300 w-[250px] m-4 p-4 bg-white shadow-md'>Premium</div>

       </div>
    </div>
  )
}

export default page
