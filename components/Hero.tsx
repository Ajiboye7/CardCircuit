/*import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <main className=" flex flex-wrap flex-col max-w-[1800px] mx-auto h-screen " >
      <div className="  main-info  flex h-1/4 mx-14 justify-between border-solid border-2 border-light-blue-200 ">
        <div className="main-info-left flex-1">
          <h2 className="text-fontColor text-7xl py-2">
            Simplify Your<span className="font-bold">Wallet.</span>
          </h2>
          <br />
          <h2 className="text-fontColor text-5xl">
            <span className="font-bold">Unify</span>Your Finances.
          </h2>
        </div>
        <div className="main-info-right relative flex-1 flex flex-col items-center mt-5 ">
          <div className="mb-3">
          <span className="border-l-4 border-borderLine h-12 absolute top-5"  style={{ left: '200px' }}></span>
            <p className="text-fontColor py-5 text-xl ">
              Welcome to seamless centralized banking.
              <br />
              Manage and track all your cards in one app.
            </p>
          </div>

          <div className="main-button flex flex-row">
            <CustomButton
              title="Get on Android"
              Icon="/playstore-svgrepo-com 1.svg"
            />
            <CustomButton 
            title="Get on Iphone"
             Icon="/Vector.svg" />
          </div>
        </div>
      </div>
      <div className="main-image h-3/4 relative">
        <Image
          src="/Mockups.svg"
          alt="mock-up"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </main>
  );
};

export default Hero;*/

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    return (
        <section className="container max-w-[1400px] mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center border-solid border-4 border-light-blue-500">
            {/* Left Side */}
            <div className="flex-1 md:mr-4 ml-4 md:text-left mb-4 md:mb-0">
              <h1 className="text-2xl md:text-5xl font-bold mb-4 text-fontColor ">Simplify Your Wallet.<br />Unify Your Finances.</h1>
            </div>
            {/* Right Side */}
            <div className="flex-1 md:ml-4 md:text-left mb-4 md:mb-0">
              <p className="text-lg md:text-3xl mb-4 text-fontColor">Welcome to seamless centralized banking. <br/>Manage and track all your cards in one app.</p>
              <div className="flex justify-center md:justify-start gap-10">
                <CustomButton title="Get on Android" Icon="/playstore-svgrepo-com 1.svg" />
                <CustomButton title="Get on iPhone" Icon="/Vector.svg" />
              </div>
            </div>
          </div>
          {/* Full Width Image */}
          <div className="mt-4">
            <Image
              src="/Mockups.svg"
              alt="analyticSreen"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </section>
      );
};

export default Hero;


/*flex flex-col space-y-3 md:space-y-0 md:space-x-4 md:flex-row*/