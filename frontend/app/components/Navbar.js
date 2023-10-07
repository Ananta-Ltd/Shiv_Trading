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
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <>
         <nav className={`w-full  sticky top-0 z-10 bg-white  ${ scrolled ? 'shadow-lg' : ''}`}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
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
              <ul className="items-center text-sm font-semibold tracking-[1px] space-y-8 p-3 md:flex md:space-x-6 md:space-y-0">
                <li className="pl-4  "
                   onMouseEnter={() => setDropDown(true)}
                   >
                <div className='flex'
                 onClick={() => setmobileDropDown(!mobiledropDown)}>
                <div className='mr-1'>
                  <Link href="/" className={styles.link}> 
                  PRODUCTS
                  </Link>
                </div>
                <div className='mt-0.5'><BsFillCaretDownFill/></div>
                
                </div>
                <div>
                {navbar&& mobiledropDown && <div className='md:hidden'><Dropdown/></div>}
                </div>
                </li>
                <li className="pl-4"
                 onMouseEnter={() => setDropDown(false)}>
                  <Link href="/where" className={styles.link} >
                    WHERE TO BUY
                  </Link>
                  
                </li>
                <li className="pl-4" >
                  <Link href="/about" className={styles.link}>
                    ABOUT
                  </Link>   
                </li>
                <button className="pl-4 bg-blue-900 hover:bg-blue-950 text-white px-5 py-2">
                  <Link href="/explore">
                    Explore More
                  </Link>
              </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='hidden md:block lg:block'
        onMouseLeave={() => setDropDown(false)}>
        { dropDown && <Dropdown/>}
      </div>
    </>

   
  )
}

export default AdminNavbar;
