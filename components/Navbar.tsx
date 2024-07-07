"usee client"
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

export default Navbar;



