import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Finishes() {
  return (
    <>
        <div className='flex flex-col md:flex md:flex-row justify-center items-center md:items-start min-h-[65vh] p-10 m-2 '>
            <div className='w-[45vw] h-full'>
                <motion.h1
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                 className=' text-3xl tracking-wide md:px-8 pt-3'>Know About Finishes</motion.h1>
                <motion.p
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                 className='md:p-8 text-gray-400'>
                    Shivtrading provides exclusive images of tiles and marbles used in houses.
                    A spectacular mirror like effect is what you get in this superior finish. 
                    The highly polished look is achieved with a thicker coat of glaze,
                     enhancing image sharpness and giving you a rich and true color experience.
                </motion.p>
                <button 
                    className='my-2 md:m-8 bg-blue-950 hover:bg-white px-8 py-2 text-white hover:text-blue-950 uppercase text-sm hover:border hover:border-black'> 
                        <Link href="/explore">Know More</Link>
                    </button>
            </div>
            <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
             className=' p-2 md:pl-8'>
                <img src='/images/tiles5.jpg' alt='tiles' className='w-[90vw] md:w-[50vw] h-[60vh]'/>
            </motion.div>
        </div>
    </>
  )
}

export default Finishes

