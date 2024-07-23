import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
const Features = () => {
  return (
    <div className="container  max-w-[1400px] mx-auto p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card-one bg-gray-200 pr-4 pl-4 pt-4 rounded-2xl sm:rounded-borderCurve relative group overflow-hidden ">
          <div className="card-content flex flex-col">
            <h2 className="text-cardOneText font-bold mb-10 text-5xl md:text-5xl lg:text-6xl xl:text-7xl mt-10 ">
              <span className="font-bold">Centralize</span> Your Chaos
            </h2>
            <p className="mt-2 text-featureP sm:text-2xl leading-loose xl:text-4xl xl:leading-relaxed text-GetStartedTextFont font-semibold ">
              Your entire financial universe in one app.Link cards, manage
              transactions, and stay on top of your finances effortlessly!.
            </p>

            <div className="translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 duration-1000 opacity-0 group-hover:opacity-100">
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

        <div className="card-two bg-buttonBlue pr-4 pl-4 pt-4 rounded-2xl sm:rounded-borderCurve group overflow-hidden ">
          <div className="card-content flex flex-col">
            <div></div>
            <h2 className="text-fontColor font-bold mt-10 mb-10 text-4xl md:text-4xl  lg:text-6xl  xl:text-7xl">
              Spend Smarter
              <br /> with CardCircuit
            </h2>
            <p className="text-fontColor mt-2 text-featureP sm:text-2xl xl:text-4xl leading-loose xl:leading-relaxed ">
              Categorize your expenses, track trends, and get personalized
              insights. Make informed decisions and save more every day.
            </p>
            <div className="translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 duration-1000 opacity-0 group-hover:opacity-100 ">
              <Image
                src="/Analytics Screen MS 1.svg"
                alt="analyticSreen"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>

        <div className="card-three bg-cardThreeBg pt-8  rounded-2xl sm:rounded-borderCurve md:col-span-2">
          <div className="card-contents flex flex-col lg:flex-row items-center gap-3  pt-5 sm:px-10 sm:pt-10 ">
            <div className="card-content-left flex-1 w-full flex-wrap p-5">
              <h2 className="text-fontColor md:mb-11 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold xl:text-7xl ">
                Swift Transfer, Instant Control
              </h2>
              <p className="text-fontColor font-light sm:font-normal text-featureP leading-sm-loose sm:leading-loose md:leading-extra-loose sm:text-2xl md:text-2xl mt-5 mb-5 lg:text-2xl lg:leading-extra-extra-loose ">
                Move money effortlessly between your cards with CardCircuit's
                lightning-quick transfers. Say goodbye to waiting and hello to
                instant financial flexibility.
              </p>
              <div className="main-button flex flex-col gap-5 items-center sm:gap-2 sm:flex-row  md:gap-5 lg:gap-4 flex-nowrap">
                <CustomButton
                  title="Get on Android"
                  Icon="/playstore-svgrepo-com 1.svg"
                  textStyles="text-2xl"
                />
                <CustomButton
                  title="Get on iPhone"
                  Icon="/Vector.svg"
                  textStyles="text-2xl"
                />
              </div>
            </div>
            <div className="card-content-right flex-1">
              <Image
                src="/image 7.svg"
                alt="image7"
                width={500}
                height={500}
                className=" px-2 overflow-hidden w-full h-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

{
  /*
     <div className="container  max-w-[1400px] mx-auto p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card-one bg-gray-200 p-4 rounded-3xl pl-12 relative group">
          <div className="card-content flex flex-col">
            <h2 className="text-blue-600 text-7xl">
              <span className="font-bold">Centralize</span> Your Chaos
            </h2>
            <p className="text-blue-400 mt-2 text-2xl">
              Your entire financial universe in one <br />
              app.Link cards, manage
              <br />
              transactions, and stay on top of <br />
              your finances effortlessly!.
            </p>
            <div className="absolute bottom-0 right-0  transition-transform transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
              <Image
                src="/My Cards Screen Mockup 3.svg"
                alt="image7"
                width={300}
                height={300}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
    
    
    */
}

