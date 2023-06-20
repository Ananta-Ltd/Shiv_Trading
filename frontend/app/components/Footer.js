import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/shivlogo.png";
import styles from '../Footer.module.css';



function Footer() {
	return (
		<>
			<div className="h-1/16 w-full flex md:flex-row flex-col justify-around items-start p-1 sm:pt-8 lg:px-8 px-4 bg-blue-950 mt-9" >
				<div className="p-2 ">
					<ul>
              <Link href="/">
              <Image className='w-[100px]' src={logo} alt="logo"></Image>
              </Link>
					</ul>
				</div>
				<div className="p-4">
					<ul>
						<p className="text-[#F5F5F5] font-semibold tracking-[1px]">Call</p>
						<div className="bg-gray-500 h-0.5 w-[90px] mt-1"></div>
						<p className="text-[14px] text-slate-500 pt-2">
							9812345673
              </p>

              <p className="text-[#F5F5F5] text-[16px] pt-10 font-semibold tracking-[1px]">Connect</p>
			  <div className="bg-gray-500 h-0.5 w-[90px] mt-1"></div>
              <div className="flex gap-2 pt-2">
			                <button className="p-2 rounded-lg">
							<FaInstagram className="text-[16px] transition-transform hover:scale-125 hover:text-[#F5F5F5] text-slate-500 cursor-pointer" />
							</button>
							<button className="p-2 rounded-lg">
                            <FaFacebook className="text-[16px]  transition-transform hover:scale-125 hover:text-[#F5F5F5] text-slate-500 cursor-pointer " />
							</button>
							<button className="p-2 rounded-lg">
							<FaTwitter className="text-[16px]  transition-transform hover:scale-125 hover:text-[#F5F5F5] text-slate-500 cursor-pointer " />
							</button>
							<button className="p-2 rounded-lg">
							<FaLinkedin className="text-[16px]  transition-transform hover:scale-125 hover:text-[#F5F5F5] text-slate-500 cursor-pointer " />
							</button>
							
						</div>
						
					</ul>
				</div>
				<div className="p-4">
					<ul>
						<p className="text-[#F5F5F5] font-semibold tracking-[1px]">Email</p>
						<div className="bg-gray-500 h-0.5 w-[90px] mt-1"></div>
                         <p className="text-[14px] text-slate-500 pt-2">
							something@gmail.com
                         </p>
						
					</ul>
				</div>
				<div className="p-4">
					<ul>
						<p className="text-[#F5F5F5]  font-semibold tracking-[1px]">Quick links</p>
						<div className="bg-gray-500 h-0.5 w-[90px] mt-1"></div>
						<li className="pt-2">
						<Link href="/about" className={styles.link}>
                            Product
                        </Link>
						
						</li>
						<li>
						<Link href="/about" className={styles.link} >
                            Where to buy
                        </Link>
						</li>
                       <li>
					   <Link href="/about" className={styles.link}>
                            About
                       </Link>
						</li>
                       <li>
					   <Link href="/about" className={styles.link}>
                          Login
                       </Link>
						</li>
                      <li>
					  <Link href="/about" className={styles.link}>
                         Signup
                      </Link>
					</li>
           
					</ul>
				</div>
                <div className="p-4">
					<ul className="">
						<p className="text-[#F5F5F5] font-semibold tracking-[1px]">About Us</p>
						<div className="bg-gray-500 h-0.5 w-[90px] mt-1"></div>
						<li className="pt-2">
						<Link href="/about" className={styles.link}>
						Company Information
                         </Link>
						</li>
						<li>
						<Link href="/about" className={styles.link}>
						Chairman's message
                         </Link>
						</li>
                        <li>
						<Link href="/about" className={styles.link}>
						Our Exports
                         </Link>
						</li>
                        <li>
						<Link href="/about" className={styles.link}>
						Awards & Certifications
                         </Link>
						</li>
                        <li>
						<Link href="/about" className={styles.link}>
						Manufacturing Facilities
                         </Link>
						</li>
						
					</ul>
				</div>
        
			</div>
            <div className="bg-blue-950 p-6">
					<ul>
						<p className="text-[#F5F5F5] text-[16px]  border-b-2 border-b-gray-300 font-semibold tracking-[1px]">Products</p>
						
                         <p className="text-[14px] text-[#F5F5F5] pt-4">
							
                  <Link href="/about" className={styles.link}>
                  Bathroom Tiles
                  </Link>
				  <span className="text-slate-500 text-[14px] px-4">|
							</span>
                  <Link href="/about" className={styles.link}>
                  Kitchen Tiles
                  </Link>
				  <span className="text-slate-500 text-[14px] px-4">|
							</span>
							
                  <Link href="/about" className={styles.link}>
                  Livingroom Tiles
                  </Link>
				  <span className="text-slate-500 text-[14px] px-4">|
							</span>
                  <Link href="/about" className={styles.link}>
                  Floor Tiles
                  </Link>
                  <span className="text-slate-500 text-[14px] px-4">|
							</span>
                  <Link href="/about" className={styles.link}>
                  Granite & Marble
                  </Link>
                  <span className="text-slate-500 text-[14px] px-4">|
							</span>
                  <Link href="/about" className={styles.link}>
                  Sanitary &  CP Fittings
                  </Link>
				  
				  </p>
				  
				 </ul>
				 </div>


					<div className="bg-blue-950 p-4">
					<div className="border-b border-b-[#F5F5F5] p-4"></div>
					</div>
      
			<div className="flex flex-col justify-center items-center text-center p-4 bg-blue-950">
				<h1 className=" text-[#F5F5F5] text-[12px]">
				Shiv Trading © All Rights Reserved |
				<span className="hover:text-slate-500  cursor-pointer mx-2 text-blue-300">
					 Disclaimer |
					 </span>
				 
					<span className="hover:text-slate-500 text-blue-300 cursor-pointer">
					Caution Notice
					</span>
				</h1>
        </div>
			
		</>
	);
}

export default Footer;