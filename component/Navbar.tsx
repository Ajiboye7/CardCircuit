import React from "react";
import CustomButton from './CustomButton';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <Image src="/Logo.jpg" alt="logo" width={118} height={18}/>
        </Link>
        <div>
           
        </div>
        <CustomButton title="Get the App" />
      </div>
    </nav>
  );
};

export default Navbar;
