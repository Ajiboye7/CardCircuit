import React from 'react';
import CustomButton from "./CustomButton";
import Image from 'next/image';

const WithEase = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12">
    {/* Left Side */}
    <div className="left lg:w-1/2 px-4 lg:px-8 mb-8 lg:mb-0 text-fontColor">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4">Step into the Future of Finance with Ease!</h2>
      <p className="text-lg lg:text-xl mb-6 text-fontColor">
        Setting up your financial world has never been this smooth. CardCircuit brings you a hassle-free registration experience
        that's as swift as it is intuitive. With just a few clicks, you're ready to take control of your finances.
      </p>
      <CustomButton title="Get the App" containerStyles="text-fontColor" Icon="/Arrow Right.svg" />
    </div>

    {/* Right Side */}
    <div className="right lg:w-1/2 relative flex justify-center items-center">
      <Image
        src="/Add Card V3 M 1.svg"
        alt="Main Image"
        width={500}
        height={500}
        className="relative z-10"
      />

      {/* Small Image 1 */}
      <Image
        src="/Card (1).svg"
        alt="Small Image 1"
        width={100}
        height={100}
        className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 z-0"
      />

      {/* Small Image 2 */}
      <Image
        src="/Card (1).svg"
        alt="Small Image 2"
        width={100}
        height={100}
        className="absolute right-0 top-1/2 transform translate-x-1/4 -translate-y-1/2 z-0"
      />

      {/* Small Image 3 */}
      <Image
        src="/Card (1).svg"
        alt="Small Image 3"
        width={100}
        height={100}
        className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 z-0"
      />
    </div>
  </section>
  );
}

export default WithEase;
