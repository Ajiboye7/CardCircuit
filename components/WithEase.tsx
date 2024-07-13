import React from 'react';
import CustomButton from "./CustomButton";
import Image from 'next/image';

const WithEase = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center py-12 max-w-[1440px] mx-auto p-4 overflow-hidden">
    {/* Left Side */}
    <div className="left lg:w-1/2 px-4 lg:px-8 mb-8 lg:mb-0 text-fontColor flex-1">
      <h2 className="text-xl font-bold sm:text-3xl sm:leading-slightly-loose md:text-5xl lg:text-5xl xl:text-6xl md:leading-slightly-loose lg:leading-slightly-loose xl:leading-slightly-loose lg:mb-10 mb-4 ">Step into the Future of Finance with Ease!</h2>
      <p className="text-xl sm:text-1xl  md:text-2xl lg:text-3xl mb-6 text-fontColor sm: leading-loose sm:leading-relaxed md:leading-relaxed lg:leading-loose lg:mb-9 sm:text-orange-700 md:text-green-800 lg:text-purple-800 xl:text-yellow-400">
        Setting up your financial world has never been this smooth. CardCircuit brings you a hassle-free registration experience
        that's as swift as it is intuitive. With just a few clicks, you're ready to take control of your finances.
      </p>
      <CustomButton title="Get the App" containerStyles="text-fontColor bg-green-800 " Icon="/Arrow Right.svg"/>
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
        width={200}
        height={200}
        className="absolute  transform -translate-x-1/4 -translate-y-1/4 z-10 lg:top-10 left-15 xl:top-20 sm:hidden md:block"
      />

      
      <Image
        src="/Card (1).svg"
        alt="Small Image 2"
        width={230}
        height={300}
        className="absolute right-0 top-1/2 transform -translate-x-20  xl:-translate-x-32 -translate-y-1/2 z-10  xl:top-50 xl:right-39 sm:hidden md:block"
      />

      
      <Image
        src="/Card (1).svg"
        alt="Small Image 3"
        width={200}
        height={200}
        className="absolute bottom-0 left-0 transform translate-x-44 translate-y-1/4 z-10 xl:left-40 xl:bottom-56 sm:hidden md:block"
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