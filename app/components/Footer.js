import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/shivlogo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from '../Footer.module.css';

function Footer() {
  return (
    <div className=' h-auto bg-blue-950 w-full '>
      <div className='flex md:flex-row flex-col justify-around items-start sm:pt-8 lg:px-8 px-4 py-1'>
        <div className='py-2'>
          <Link href="/" prefetch={false}>
            <Image width={100} src={logo} loading="lazy" alt="logo"></Image>
          </Link>
        </div>
        <div>
          <div className='pt-4'>
            <p className="text-[#F5F5F5] font-semibold tracking-[1px]">Call</p>
            <div className="bg-gray-500 h-0.5 w-[90px] mt-1"></div>
            <p className="text-[14px] text-slate-500 pt-2">
              9812345673
            </p>
          </div>
          <div className=''>
            <p className="text-[#F5F5F5] text-[16px] pt-10 font-semibold tracking-[1px]">Connect</p>
            <div className="bg-gray-500 h-0.5 w-[90px] mt-1"></div>
            <div className="flex gap-2 pt-2">
              <button type='button' className="p-2 rounded-lg">
                <FaInstagram className="text-[16px] transition-transform hover:scale-125 hover:text-[#F5F5F5] text-slate-500 cursor-pointer" />
              </button>
              <button type='button' className="p-2 rounded-lg">
                <FaFacebook className="text-[16px]  transition-transform hover:scale-125 hover:text-[#F5F5F5] text-slate-500 cursor-pointer " />
              </button>
              <button type='button' className="p-2 rounded-lg">
                <FaTwitter className="text-[16px]  transition-transform hover:scale-125 hover:text-[#F5F5F5] text-slate-500 cursor-pointer " />
              </button>
              <button type='button' className="p-2 rounded-lg">
                <FaLinkedin className="text-[16px]  transition-transform hover:scale-125 hover:text-[#F5F5F5] text-slate-500 cursor-pointer " />
              </button>
            </div>

          </div>
        </div>
        <div className='py-4'>
          <p className="text-[#F5F5F5] font-semibold tracking-[1px]">Email</p>
          <div className="bg-gray-500 h-0.5 w-[90px] mt-1"></div>
          <p className="text-[14px] text-slate-500 pt-2">
            something@gmail.com
          </p>
        </div>
        <div className='py-4'>
          <p className="text-[#F5F5F5]  font-semibold tracking-[1px]">Quick links</p>
          <div className="bg-gray-500 h-0.5 w-[90px] mt-1"></div>
          <ul className=' list-none text-slate-500 text-[14px]'>
            <li className="pt-2">
              <Link href="/product" prefetch={false} className={styles.link}>
                Product
              </Link>

            </li>
            <li>
              <Link href="/location" prefetch={false} className={styles.link} >
                Where to buy
              </Link>
            </li>
            <li>
              <Link href="/about" prefetch={false} className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link href="/login" prefetch={false} className={styles.link}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/about" prefetch={false} className={styles.link}>
                Signup
              </Link>
            </li>
          </ul>
        </div>
        <div className='py-4'>
          <p className="text-[#F5F5F5] font-semibold tracking-[1px]">About Us</p>
          <div className="bg-gray-500 h-0.5 w-[90px] mt-1"></div>
          <ul className=' list-none text-slate-500 text-[14px]'>
            <li className="pt-2">
              <Link href="/about" prefetch={false} className={styles.link}>
                Company Information
              </Link>
            </li>
            <li>
              <Link href="/about" prefetch={false} className={styles.link}>
                Chairman's message
              </Link>
            </li>
            <li>
              <Link href="/about" prefetch={false} className={styles.link}>
                Our Exports
              </Link>
            </li>
            <li>
              <Link href="/about" prefetch={false} className={styles.link}>
                Awards & Certifications
              </Link>
            </li>
            <li>
              <Link href="/about" prefetch={false} className={styles.link}>
                Manufacturing Facilities
              </Link>
            </li>
          </ul>
        </div>

      </div>
      <div className='p-6'>
        <p className="text-[#F5F5F5] text-[16px]  border-b-2 border-b-gray-300 font-semibold tracking-[1px]">Products</p>
        <div className="text-slate-500 text-[14px] pt-4">
          <Link href="/about" prefetch={false} className={styles.link}>
            Bathroom Tiles
          </Link>
          <span className="text-slate-500 text-[14px] px-4">|
          </span>
          <Link href="/about" prefetch={false} className={styles.link}>
            Kitchen Tiles
          </Link>
          <span className="text-slate-500 text-[14px] px-4">|
          </span>

          <Link href="/about" prefetch={false} className={styles.link}>
            Livingroom Tiles
          </Link>
          <span className="text-slate-500 text-[14px] px-4">|
          </span>
          <Link href="/about" prefetch={false} className={styles.link}>
            Floor Tiles
          </Link>
          <span className="text-slate-500 text-[14px] px-4">|
          </span>
          <Link href="/about" prefetch={false} className={styles.link}>
            Granite & Marble
          </Link>
          <span className="text-slate-500 text-[14px] px-4">|
          </span>
          <Link href="/about" prefetch={false} className={styles.link}>
            Sanitary &  CP Fittings
          </Link>
        </div>
      </div>
      <div className="border-b border-b-[#F5F5F5] p-4"></div>
      <div className='flex flex-col justify-center items-center text-center p-4 '>
        <h1 className=" text-[#eeeded] text-[12px]">
            Shiv Trading © All Rights Reserved |
            <span className="hover:text-slate-500  cursor-pointer mx-2 text-blue-300">
              Disclaimer |
            </span>

            <span className="hover:text-slate-500 text-blue-300 cursor-pointer">
              Caution Notice
            </span>
          </h1>
      </div>
    </div>
  )
}

export default Footer
