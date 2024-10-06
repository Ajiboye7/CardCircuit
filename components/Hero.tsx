

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section className="w-full bg-hero-bg bg-no-repeat bg-right-top container mx-auto">
      <div className="px-7 ">
      <div className="flex justify-between flex-col sm:flex-row md:items-center">
        {/* Left Side */}
        <div className="  md:text-left mb-4 md:mb-0">
          <p className="hero-primary-text font-bold mb-4 text-fontColor">
            Simplify Your <span className="font-[800]">Wallet</span>. <br/><span className="font-[800]">Unify</span> Your Finances.
          </p>
        </div>
        {/* Right Side */}
        <div className=" md:text-left mb-4 md:mb-0 ">
          <p className="pl-4 border-l-4 border-borderLine hero-secondary-text mb-4 text-fontColor">
            Welcome to seamless centralized banking.
           <br/> Manage and track all your cards in one app.
          </p>
         {/* <div className="flex mt-10 sm:justify-center md:justify-center gap-4 md:gap-2 lg:gap-5 xl:gap-10">

  );
};

export default Hero;
