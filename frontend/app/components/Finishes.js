import React from 'react'

function Finishes() {
  return (
    <>
        <div className='flex flex-col md:flex md:flex-row justify-center min-h-[65vh]  p-10 m-2 '>
            <div className='w-[45vw] h-full'>
                <h1 className=' text-3xl tracking-wide px-8 pt-3'>Know About Finishes</h1>
                <p className='p-8 text-gray-400'>
                    Shivtrading provides exclusive images of tiles and marbles used in houses.
                    A spectacular mirror like effect is what you get in this superior finish. 
                    The highly polished look is achieved with a thicker coat of glaze,
                     enhancing image sharpness and giving you a rich and true color experience.
                </p>
                <button 
                    className='my-2 m-8 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm hover:border hover:border-black'> 
                        Know More
                    </button>
            </div>
            <div className=' p-2 pl-8'>
                <img src='/images/tiles5.jpg' alt='tiles' className='w-[50vw] h-[60vh]'/>
            </div>
        </div>
    </>
  )
}

export default Finishes

