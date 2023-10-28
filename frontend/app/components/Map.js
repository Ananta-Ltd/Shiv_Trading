import React from 'react'

function Map() {
    
  return (
    <div className='flex flex-col justify-center items-center'>
      
    <div className=" w-[90vw] bg-cover bg-no-repeat h-screen flex flex-col justify-center items-center " 
        style={{ backgroundImage: `url("/images/map3.png")` }}>
        <div className=' flex flex-row  justify-center items-center align-middle'>
            <div className=' w-[90vw] h-[60vh]  bg-black opacity-50'>
               <div className='flex flex-col justify-center items-center mt-[22vh]'>
                <h1 className=' text-3xl tracking-wider text-white'>Where to buy</h1>
                    <button 
                        className='my-4 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm font-bold hover:border hover:border-black'>
                        Find our store
                    </button>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Map
