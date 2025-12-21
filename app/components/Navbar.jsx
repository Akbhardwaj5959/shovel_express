"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Navbar = () => {

  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }

  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] lg:translate-y-[-60%] h-96 bg-sky-200/40 backdrop-blur-md border border-sky-100/40 rounded-full"></div>
    {/* <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] lg:translate-y-[-60%] ">
      <Image src={assets.header_bg_color} alt="header bg color" className="w-full" />
    </div> */}
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ">
        <Link href="/" className="  ">
          <Image
            src="/logo2.0.png"
            alt="Logo"
            width={120}
            height={40}
            className='w-20 sm:w-24 md:w-28 alt="" cursor-pointer rounded-full border mr-14'
          />
        </Link>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <Link href="/" className=" font-Ovo text-black hover:text-sky-300 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className=" font-Ovo text-black hover:text-sky-300 transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className=" font-Ovo text-black hover:text-sky-300 transition-colors duration-200">
              Services
            </Link>
          </li>
          <li>
            <Link href="/gallery" className=" font-Ovo text-black hover:text-sky-300 transition-colors duration-200">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className=" font-Ovo text-black hover:text-sky-300 transition-colors duration-200">
              Contact
            </Link>
          </li>
        
        </ul>
        <div className="flex items-center gap-4">
          {/* <button >
            <Image src={assets.moon_icon} alt="Moon Icon" className="w-6" />
          </button> */}
          <Link
            href="/contact"
            className="hidden bg-blue-600 lg:flex items-center gap-3 text-white px-10 py-2.5 border border-sky-500 rounded-full ml-4 hover:bg-sky-300 font-Ovo"
          >
            Book Now
          </Link>

           <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu Icon" className="w-6" />
          </button>


        </div>
        {/* mobile menu - frosty/snow theme */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-5 py-20 px-6 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-sky-200/30 backdrop-blur-sm border-l border-sky-100/30 transition-transform duration-500 overflow-y-auto"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close Icon"
              className="w-6 cursor-pointer text-sky-700/80 hover:scale-110 transition"
            />
          </div>

          {/** Menu items: frosted cards matching site theme */}
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/services", "Services"],
            ["/contact", "Contact"],
            ["/gallery", "Gallery"],
          ].map(([href, label]) => (
            <li key={label}>
              <Link
                href={href}
                onClick={closeMenu}
                className="block px-4 py-3 font-Ovo text-slate-800 bg-white/20 border border-sky-100/30 rounded-2xl shadow-sm hover:shadow-md hover:bg-white/60 hover:text-sky-800 transition duration-200 text-center font-semibold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        
      </nav>
    </>
  );
};

export default Navbar;
