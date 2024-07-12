/*"use client"
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row">
      <div>
        <Link href="/">
          <Image src="/Logo.jpg" alt="logo" width={118} height={18} />
        </Link>
        <div>
          <Link href="/" className="text-yellow-500">Home</Link>
          <Link href="/features" className="text-green-900">Features</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about-us">About Us</Link>
        </div>
        <CustomButton title="Get the App" containerStyles="text-white" rightIcon="/Arrow Right.jpg"/>
      </div>
      <h1 className="text-green-950 bg-blue-900">rreegera</h1>
    </nav>
  );
};

export default Navbar;*/

// components/Navbar.tsx
/*import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-4 w-full max-w-[1550px] mx-auto ">
      <div>
      <Link href="/" className="flex flex-row items-center">
        <Image src="/Logo.svg" alt="logo" width={70} height={70} />
        <h2 className="text-fontColor text-2xl px-5">Card Circuit</h2>
      </Link>
      </div>
      <div className="nav-links flex space-x-6 bg-linkBg p-6 rounded-full">
        <Link href="/" className="text-fontColor hover:text-blue-800">Home</Link>
        <Link href="/features" className="text-fontColor hover:text-blue-800">Features</Link>
        <Link href="/stories" className="text-fontColor hover:text-blue-800">Stories</Link>
        <Link href="/about-us" className="text-fontColor hover:text-blue-800">About Us</Link>
      </div>
      <div className="nav-button">
      <CustomButton title="Get the App" containerStyles="text-fontColor " Icon="/Arrow Right.svg"/>
      </div>
      
    </nav>
  );
};

export default Navbar;*/
'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-row items-center justify-between p-4 w-full max-w-[1550px] mx-auto">
      <div className="flex flex-row items-center">
        <Link href="/">
          <div className="flex flex-row items-center">
            <Image src="/Logo.svg" alt="logo" width={50} height={50} className="w-12 h-12 md:w-16 md:h-16" />
            <h2 className="text-fontColor text-xl md:text-2xl px-2 md:px-5 flex-shrink-0">Card Circuit</h2>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex space-x-6 bg-linkBg p-6 rounded-full mr-3">
        <Link href="/" className="text-fontColor hover:text-blue-800">Home</Link>
        <Link href="/features" className="text-fontColor hover:text-blue-800">Features</Link>
        <Link href="/stories" className="text-fontColor hover:text-blue-800">Stories</Link>
        <Link href="/about-us" className="text-fontColor hover:text-blue-800 flex-shrink-0">About Us</Link>
      </div>
      <div className="hidden md:flex">
        <CustomButton title="Get the App" containerStyles="text-fontColor" Icon="/Arrow Right.svg" />
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-fontColor" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-fontColor" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link href="/" className="text-fontColor hover:text-blue-800">Home</Link>
          <Link href="/features" className="text-fontColor hover:text-blue-800">Features</Link>
          <Link href="/stories" className="text-fontColor hover:text-blue-800">Stories</Link>
          <Link href="/about-us" className="text-fontColor hover:text-blue-800">About Us</Link>
          <CustomButton title="Get the App" containerStyles="text-fontColor" Icon="/Arrow Right.svg" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;





