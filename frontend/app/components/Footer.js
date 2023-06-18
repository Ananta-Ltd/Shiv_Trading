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
			<div className="h-1/16 w-full flex md:flex-row flex-col justify-around items-start p-1 sm:pt-8 lg:px-8 px-4 bg-[#000044] mt-9" >
				<div className="p-2 ">
					<ul>
              <Link href="/">
              <Image className='w-[65px]' src={logo} alt="logo"></Image>
              </Link>
						
					</ul>
				</div>
				<div className="p-4">
					<ul>
						<p className="text-[#F5F5F5] text-[16px] font-bold">CALL</p>
						<p className="text-[14px] text-slate-500 pt-2">
							9812345673
              </p>

              <p className="text-[#F5F5F5] text-[16px] pt-10 font-bold">CONNECT</p>
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
						<p className="text-[#F5F5F5] text-[16px] font-bold">EMAIL</p>
                         <p className="text-[14px] text-slate-500 pt-2">
							something@gmail.com
                         </p>
						
					</ul>
				</div>
				<div className="p-4">
					<ul>
						<p className="text-[#F5F5F5]  text-[16px] font-bold">Quick links</p>
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
					<ul>
						<p className="text-[#F5F5F5]  text-[16px] font-bold">ABOUT US</p>
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
            <div className="bg-[#000044] p-6">
					<ul>
						<p className="text-[#F5F5F5] text-[16px]  border-b-2 border-b-gray-300 font-bold">PRODUCTS</p>
						
                         <p className="text-[14px] text-[#F5F5F5] pt-4">
							
                  <Link href="/about" className={styles.link}>
                  Bathroom Tiles
                  </Link>
				  <span className="text-slate-500 text-[14px]">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							</span>
                  <Link href="/about" className={styles.link}>
                  Kitchen Tiles
                  </Link>
				  <span className="text-slate-500 text-[14px]">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							</span>
							
                  <Link href="/about" className={styles.link}>
                  Livingroom Tiles
                  </Link>
				  <span className="text-slate-500 text-[14px]">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							</span>
                  <Link href="/about" className={styles.link}>
                  Floor Tiles
                  </Link>
                  <span className="text-slate-500 text-[14px]">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							</span>
                  <Link href="/about" className={styles.link}>
                  Granite & Marbel
                  </Link>
                  <span className="text-slate-500 text-[14px]">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							</span>
                  <Link href="/about" className={styles.link}>
                  Sanitary
                  </Link>
				  <span className="text-slate-500 text-[14px]">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							</span>
                  <Link href="/about" className={styles.link}>
				  CP Fittings
                  </Link>
				  
				  </p>
				  
				 </ul>
				 </div>


					<div className="bg-[#000044] p-4">
					<div className="border-b border-b-[#F5F5F5] p-4"></div>
					</div>
      
			<div className="flex flex-col justify-center items-center text-center p-4 bg-[#000044]">
				<h1 className=" text-[#F5F5F5] text-[12px]">
				Shiv Trading © All Rights Reserved |{" "}
				<span className="hover:text-slate-500 text-[#F5F5F5] cursor-pointer">
					 Disclaimer{" "}
					 </span>
				 |{" "}
					<span className="hover:text-slate-500 text-[#F5F5F5] cursor-pointer">
					Caution Notice{" "}
					</span>
				</h1>
        </div>
			
		</>
	);
}

export default Footer;