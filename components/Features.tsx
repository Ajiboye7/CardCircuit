import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
const Features = () => {
  return (
    <div className="container  max-w-[1400px] mx-auto p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card-one bg-gray-200 p-4 rounded-3xl pl-12 relative group overflow-hidden ">
          <div className="card-content flex flex-col flex-wrap">
            <h2 className="text-fontColor font-bold text-3xl md:text-5xl md:text-blue-500 lg:text-6xl lg:text-orange-800 xl:text-7xl xl:text-red-950 ">
              <span className="font-bold">Centralize</span> Your Chaos
            </h2>
            <p className="text-blue-400 mt-2 text-3xl">
              Your entire financial universe in one <br />
              app.Link cards, manage
              <br />
              transactions, and stay on top of <br />
              your finances effortlessly!.
            </p>
            <div className="absolute bottom-0 right-0 transition-transform transition-opacity group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-full translate-y-full duration-1000">
              <Image
                src="/My Cards Screen Mockup 3.svg"
                alt="image7"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="card-two bg-buttonBlue p-4 rounded-3xl">
          <div className="card-content flex flex-col">
            <h2 className="text-fontColor font-bold text-3xl md:text-4xl md:text-blue-500 lg:text-6xl lg:text-orange-800 xl:text-7xl xl:text-red-950">
              Spend Smarter<br/> with CardCircuit
            </h2>
            <p className="text-fontColor mt-2 text-2xl">
              Categorize your expenses, track trends, <br />
              and get personalized
              <br />
              insights. Make informed decisions <br />
              and save more every day.
            </p>
            <div>
              <Image
                src="/Analytics Screen MS 1.svg"
                alt="analyticSreen"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        {/*<div className="card-two bg-buttonBlue p-4 rounded-3xl">
          <div className="card-content flex flex-col items-center text-center md:text-left">
            <h2 className="text-fontColor text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
              Spend Smarter with CardCircuit
            </h2>
            <p className="text-fontColor mt-2 text-lg md:text-xl lg:text-2xl xl:text-2xl">
              Categorize your expenses, track trends, <br />
              and get personalized <br />
              insights. Make informed decisions <br />
              and save more every day.
            </p>
            <div className="mt-4">
              <Image
                src="/Analytics Screen MS 1.svg"
                alt="analyticSreen"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>*/}

        {/*<div className="card-three bg-cardThreeBg pt-8 rounded-3xl md:col-span-2">
          <div className="card-content flex flex-row items-center gap-3 px-10 ">
            <div className="card-content-left flex-1">
              <h2 className="text-fontColor mb-11 text-2xl md:text-5xl font-bold xl:text-7xl">
                Swift Transfer, Instant Control
              </h2>
              <p className="text-fontColor mt-2 mb-12 text-2xl">
                Move money effortlessly between your cards with CardCircuit's
                lightning-quick transfers. Say goodbye to waiting and hello to
                instant financial flexibility
              </p>
              <div className="main-button flex flex-row">
                <CustomButton
                  title="Get on Android"
                  Icon="/playstore-svgrepo-com 1.svg"
                />
                <CustomButton title="Get on Iphone" Icon="/Vector.svg" />
              </div>
            </div>
            <div className="card-content-right flex-1 mt-10">
              <Image src="/image 7.svg" alt="image7" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>*/}
    <div className="card-three bg-cardThreeBg pt-8 rounded-3xl md:col-span-2">
    <div className="card-content flex flex-col md:flex-row items-center gap-3 px-10">
      <div className="card-content-left flex-1">
        <h2 className="text-fontColor mb-11 text-2xl md:text-5xl font-bold xl:text-7xl leading-tight">
          Swift Transfer, Instant Control
        </h2>
        <p className="text-fontColor mt-2 mb-12 text-xl md:text-2xl">
          Move money effortlessly between your cards with CardCircuit's
          lightning-quick transfers. Say goodbye to waiting and hello to
          instant financial flexibility.
        </p>
        <div className="main-button flex flex-col md:flex-row gap-3">
          <CustomButton
            title="Get on Android"
            Icon="/playstore-svgrepo-com 1.svg"
          />
          <CustomButton title="Get on iPhone" Icon="/Vector.svg" />
        </div>
      </div>
      <div className="card-content-right flex-1 mt-6 md:mt-0">
        <Image
          src="/image 7.svg"
          alt="image7"
          width={400}
          height={400}
          className="w-full h-1/2 m-0"
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

/*import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Section() {
  return (
    <section className="container max-w-[1400px] mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center border-solid border-4 border-light-blue-500">
        {/* Left Side 
        <div className="flex-1 md:mr-4 ml-4 md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 text-fontColor ">Simplify Your Wallet.<br />Unify Your Finances.</h1>
        </div>
        {/* Right Side
        <div className="flex-1 md:ml-4 md:text-left mb-4 md:mb-0">
          <p className="text-lg md:text-3xl mb-4 text-fontColor">Welcome to seamless centralized banking. <br/>Manage and track all your cards in one app.</p>
          <div className="flex justify-center md:justify-start gap-10">
            <CustomButton title="Get on Android" Icon="/playstore-svgrepo-com 1.svg" />
            <CustomButton title="Get on iPhone" Icon="/Vector.svg" />
          </div>
        </div>
      </div>
      {/* Full Width Image 
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
}*/
