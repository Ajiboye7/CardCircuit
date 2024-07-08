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
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-4 ">
      <Link href="/" className="flex flex-row items-center">
        <Image src="/Logo.svg" alt="logo" width={70} height={70} />
        <h2 className="text-fontColor text-2xl px-5">Card Circuit</h2>
      </Link>
      <div className="flex space-x-6 bg-linkBg p-6 rounded-full">
        <Link href="/" className="text-fontColor hover:text-blue-800">Home</Link>
        <Link href="/features" className="text-fontColor hover:text-blue-800">Features</Link>
        <Link href="/stories" className="text-fontColor hover:text-blue-800">Stories</Link>
        <Link href="/about-us" className="text-fontColor hover:text-blue-800">About Us</Link>
      </div>
      <CustomButton title="Get the App" containerStyles="text-fontColor" Icon="/Arrow Right.svg"/>
    </nav>
  );
};

export default Navbar;




