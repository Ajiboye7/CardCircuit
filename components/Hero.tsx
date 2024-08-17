

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section className="w-full bg-hero-bg bg-no-repeat bg-right-top">
      <div className="container mx-auto p-4">
      <div className="flex w-[1400px] justify-between flex-col md:flex-row md:items-center pl-2">
        {/* Left Side */}
        <div className=" md:mr-4 ml-4 md:text-left mb-4 md:mb-0">
          <p className="header-primary-text font-bold mb-4 text-fontColor ">
            Simplify Your Wallet. <br/>Unify Your Finances.
          </p>
        </div>
        {/* Right Side */}
        <div className=" md:text-left mb-4 md:mb-0 ">
          <p className="pl-4 border-l-4 border-borderLine header-secondary-text mb-4 text-fontColor">
            Welcome to seamless centralized banking.
           <br/> Manage and track all your cards in one app.
          </p>
          <div className="flex mt-10 sm:justify-center md:justify-center gap-4 md:gap-2 lg:gap-5 xl:gap-10">
            <CustomButton
              title="Get on Android"
              Icon="/playstore-svgrepo-com 1.svg"
              textStyles="text-1xl sm:text-2xl"
              imageStyle="w-7 sm:w-10 md:w-7"
            />

            <CustomButton
              title="Get on iPhone"
              Icon="/Vector.svg"
              textStyles="text-1xl sm:text-2xl"
              imageStyle="w-7 sm:w-8 md:w-7"
              containerStyles="gap-2"
            />
          </div>
        </div>
      </div>
      {/* Full Width Image */}
      <div className="mt-8 sm:mt-24 bg-hero-bg bg-no-repeat ">
        <Image
          src="/Mockups.svg"
          alt="analyticSreen"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
      </div>
      
    </section>
  );
};

export default Hero;
