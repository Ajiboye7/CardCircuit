import React from 'react';
import CustomButton from "./CustomButton";
import Image from 'next/image';

const WithEase = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center py-12 max-w-[1600px] mx-auto p-4 overflow-hidden">
    {/* Left Side */}
    <div className="left lg:w-1/2 px-4 lg:px-8 mb-8 lg:mb-0 text-fontColor flex-1">
      <p className=" with-ease-title lg:mb-10 mb-4 ">Step into the Future of Finance with Ease!</p>
      <p className="with-ease-body mb-6 text-withEaseP lg:mb-9  ">
        Setting up your financial world has never been this smooth. CardCircuit brings you a hassle-free registration experience
        that's as swift as it is intuitive. With just a few clicks, you're ready to take control of your finances.
      </p>
      <CustomButton title="Get the App" containerStyles="text-fontColor" Icon=''/>
    </div>

    {/* Right Side */}
    <div className="right lg:w-1/2 relative flex justify-center items-center flex-1">
      <Image
        src="/Add Card V3 M 1.svg"
        alt="Main Image"
        width={500}
        height={500}
        className='w-full'
      />

      
      <Image
        src="/Card (1).svg"
        alt="Small Image 1"
        width={100}
        height={100}
        className="absolute w-40 top-10 sm:hidden lg:top-10 xl:top-20 xl:left-30 transform -translate-x-1/4 -translate-y-1/4 z-10 lg:w-36"
      />

      
      <Image
        src="/Card (1).svg"
        alt="Small Image 2"
        width={100}
        height={100}
        className="absolute w-40 sm:hidden right-24 top-1/2 transform translate-x-1/4 -translate-y-1/2 z-0 lg:w-36"
      />

      
      <Image
        src="/Card (1).svg"
        alt="Small Image 3"
        width={100}
        height={100}
        className="absolute top-64 bottom-38 w-40 sm:hidden lg:bottom-38 xl:bottom-40 xl:left-50 transform -translate-x-1/4 translate-y-1/4 z-0 lg:w-36"
      />
    </div> 
  </section>
  );
}

export default WithEase;

{/*
    
    <div className="right lg:w-1/2 relative flex justify-center items-center">
      <Image
        src="/Add Card V3 M 1.svg"
        alt="Main Image"
        width={500}
        height={500}
        className="relative z-10 w-full h-auto"
      />

      
      <Image
        src="/Card (1).svg"
        alt="Small Image 1"
        width={300}
        height={300}
        className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 z-0 "
      />

      
      <Image
        src="/Card (1).svg"
        alt="Small Image 2"
        width={100}
        height={100}
        className="absolute right-0 top-1/2 transform translate-x-1/4 -translate-y-1/2 z-0"
      />

      
      <Image
        src="/Card (1).svg"
        alt="Small Image 3"
        width={100}
        height={100}
        className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 z-0"
      />
    </div> 
    */}