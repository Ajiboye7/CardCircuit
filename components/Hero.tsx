import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <main className=" flex flex-wrap flex-col max-w-[1800px] mx-auto h-screen border-solid border-4 border-light-blue-500 ">
      <div className="  main-info  flex h-1/4 mx-14 justify-between border-solid border-2 border-light-blue-200 ">
        <div className="main-info-left flex-1">
          <h2 className="text-fontColor text-5xl py-2">
            Simplify Your<span className="font-bold">Wallet.</span>
          </h2>
          <br />
          <h2 className="text-fontColor text-5xl">
            <span className="font-bold">Unify</span>Your Finances.
          </h2>
        </div>
        <div className="main-info-right relative flex-1 flex flex-col items-center mt-5 ">
          <div className="mb-3">
          <span className="border-l-4 border-gray-500 h-4  absolute right-1" ></span>
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

export default Hero;
