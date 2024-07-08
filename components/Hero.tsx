import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <main className=" flex flex-col h-screen border-solid border-4 border-light-blue-500 mx-11">
      <div className=" flex main-info h-1/4 mx-14 justify-between border-solid border-2 border-light-blue-200 ">
        <div className="main-info-left">
          <h2 className="text-fontColor">
            Simplify Your<span>Wallet.</span>
            <br />
            <span>Unify</span>Your Finances.
          </h2>
        </div>
        <div className="main-info-right flex flex-col items-center">
          <p className="text-fontColor">
            Welcome to seamless centralized banking.
            <br />
            Manage and track all your cards in one app.
          </p>
          <div className="main-button flex flex-row">
          <CustomButton
            title="Get on Android"
            Icon="/playstore-svgrepo-com 1.svg"
          />
          <CustomButton title="Get on Iphone" Icon="/Vector.svg" />
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

<Image src="/Mockups.svg" alt="mockup" width={500} height={500} />;
