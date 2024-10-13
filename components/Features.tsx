import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
const Features = () => {
  return (
    <div className="container mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-stretch">
    <div className="card-one flex flex-col bg-gray-200 pr-4 pl-4 pt-4  feature-border relative group overflow-hidden">
      <div className="card-content flex flex-col px-[1.5rem] xs:px-10 flex-grow">
        <p className="text-cardOneText feature-title lg:my-[35px] mt-[20px] mb-[16px] sm:mb-[25px]">
          <span className="feature-title-span">Centralize</span> Your <br /> Chaos
        </p>
        <p className="mt-2 feature-body text-GetStartedTextFont">
          Your entire financial universe in one app. Link cards, manage
          transactions, and stay on top of your finances effortlessly!.
        </p>
        <div className="translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 duration-1000 opacity-0 group-hover:opacity-100 mt-auto">
          <Image
            src="/My Cards Screen Mockup 3.svg"
            alt="image7"
            width={700}
            height={700}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>

    <div className="card-two flex flex-col bg-buttonBlue pr-4 pl-4 pt-4 relative group overflow-hidden feature-border">
      <div className="card-content flex flex-col px-[1.5rem] xs:px-10 flex-grow">
        <p className="text-fontColor feature-title lg:my-[35px] mt-[20px] mb-[16px] sm:mb-[25px]">
          Spend <span className="feature-title-span">Smarter</span><br className="hidden md:block" /> with CardCircuit
        </p>
        <p className="text-fontColor mt-2 feature-body">
          Categorize your expenses, track trends, and get personalized
          insights. Make informed decisions and save more every day.
        </p>
        <div className="translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 duration-1000 opacity-0 group-hover:opacity-100 mt-auto">
          <Image
            src="/Analytics Screen MS 1.svg"
            alt="analyticSreen"
            width={700}
            height={700}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>

    <div className="card-three bg-cardThreeBg pt-8 md:col-span-2 feature-border">
      <div className="card-contents flex flex-col lg:flex-row items-center gap-3 pt-5 sm:px-10 sm:pt-10">
        <div className="card-content-left flex-1 w-full flex-wrap p-5">
          <p className="text-fontColor feature-title">
            Swift Transfer, Instant <span className="feature-title-span">Control</span>
          </p>
          <p className="text-fontColor feature-body mt-5 mb-5">
            Move money effortlessly between your cards with CardCircuit's
            lightning-quick transfers. Say goodbye to waiting and hello to
            instant financial flexibility.
          </p>
          <div className="main-button flex flex-col gap-5 items-center sm:gap-2 sm:flex-row md:gap-5 lg:gap-4 flex-nowrap">
            <CustomButton
              title="Get on Android"
              Icon="/playstore-svgrepo-com 1.svg"
              textStyles="text-[16px]"
            />
            <CustomButton
              title="Get on iPhone"
              Icon="/Vector.svg"
              textStyles="text-[16px]"
            />
          </div>
        </div>
        <div className="card-content-right flex-1">
          <Image
            src="/image 7.svg"
            alt="image7"
            width={500}
            height={500}
            className="px-2 overflow-hidden w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Features;

