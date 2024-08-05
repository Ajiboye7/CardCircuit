

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section className="w-full bg-hero-bg bg-no-repeat bg-right-top">
      <div className="container max-w-[1600px] mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center pl-2">
        {/* Left Side */}
        <div className="flex-1 md:mr-4 ml-4 md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-fontColor ">
            Simplify Your Wallet. <br />
            Unify Your Finances.
          </h1>
        </div>
        {/* Right Side */}
        <div className="flex-1 md:text-left mb-4 md:mb-0">
          <p className="pl-4 border-l-4 border-borderLine text-2xl sm:text-3xl md:text-2xl xl:text-3xl mb-4 text-fontColor">
            Welcome to seamless centralized banking.
            <br />
            Manage and track all your cards in one app.
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
