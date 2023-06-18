"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import logo from "../../public/images/shivlogo.png";
import Image from 'next/image';
import styles from '../Line.module.css';
import Dropdown from './Dropdown';
import { BsFillCaretDownFill } from "react-icons/bs";

function AdminNavbar() {
   const [navbar, setNavbar] = useState(false);
   const [dropDown, setDropDown] = useState(false);
   const [mobiledropDown, setmobileDropDown] = useState(false);

  return (
    
<<<<<<< HEAD
    <>
         <nav className="w-full shadow-lg ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
=======
    <div>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-[10]">
         <nav className="w-full shadow-lg  ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
>>>>>>> 32b86dbb6cee17c1ea2af3b45202be1447aa1531
          <div>
            <div className="flex items-center justify-between py-2 md:py-1 md:block"
            onMouseLeave={() => setDropDown(false)}>
              <Link href="/">
              <Image className='w-[65px]' src={logo} alt="logo"></Image>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                  
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
<<<<<<< HEAD
              <ul className="items-center font-bold text-xs tracking-[1px] space-y-8 p-3 md:flex md:space-x-6 md:space-y-0">
                <li className="pl-4  "
                   onMouseEnter={() => setDropDown(true)}
                   >
                <div className='flex'
                 onClick={() => setmobileDropDown(!mobiledropDown)}>
                <div className='mr-1'>
                  <Link href="" className={styles.link}> 
                  PRODUCTS
=======
              <ul className="items-center space-y-8 p-3 md:flex md:space-x-6 md:space-y-0">
                <li className="pl-4">
                  <Link href="/product" className={styles.link}>
                  Product
>>>>>>> 32b86dbb6cee17c1ea2af3b45202be1447aa1531
                  </Link>
                </div>
                <div className='mt-0.5'><BsFillCaretDownFill/></div>
                
                </div>
                <div>
                {navbar&& mobiledropDown && <div className='md:hidden'><Dropdown/></div>}
                </div>
                </li>
<<<<<<< HEAD
                <li className="pl-4"
                 onMouseEnter={() => setDropDown(false)}>
                  <Link href="/about" className={styles.link} >
                    WHERE TO BUY
=======
                <li className="pl-4">
                  <Link href="/where" className={styles.link} >
                    Where to buy
>>>>>>> 32b86dbb6cee17c1ea2af3b45202be1447aa1531
                  </Link>
                  
                </li>
                <li className="pl-4" >
                  <Link href="/about" className={styles.link}>
                    ABOUT
                  </Link>
                  
                </li>
                <li className="pl-4">
                  <Link href="/login" className={styles.link}>
<<<<<<< HEAD
                    LOGIN
=======
                    Login
>>>>>>> 32b86dbb6cee17c1ea2af3b45202be1447aa1531
                  </Link>
                  
                </li>
                <li className="pl-4">
                  <Link href="/signup" className={styles.link}>
<<<<<<< HEAD
                    SIGNUP
=======
                    Signup
>>>>>>> 32b86dbb6cee17c1ea2af3b45202be1447aa1531
                  </Link> 
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>
<<<<<<< HEAD
      <div className='hidden md:block lg:block'
        onMouseLeave={() => setDropDown(false)}>
        { dropDown && <Dropdown/>}
      </div>
    </>
=======
      </header>
    </div>
>>>>>>> 32b86dbb6cee17c1ea2af3b45202be1447aa1531

   
  )
}

export default AdminNavbar;
