import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
const Features = () => {
  return (
    <div className="container  max-w-[1400px] mx-auto p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card-one bg-gray-200 p-4 rounded-3xl pl-12 relative group overflow-hidden">
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
            <div className="absolute bottom-0 right-0 w-full h-full transition-transform transition-opacity group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-full translate-y-full duration-700">
              <Image
                src="/My Cards Screen Mockup 3.svg"
                alt="image7"
                width={500}
                height={500}
                
              />
            </div>
          </div>
        </div>

        <div className="card-two bg-buttonBlue p-4 rounded-3xl">
          <div className="card-content flex flex-col">
            <h2 className="text-fontColor text-7xl font-bold">
              Spend Smarter with CardCircuit
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

        <div className="card-three bg-gray-200 p-4 rounded-3xl md:col-span-2">
          <div className="card-content grid md:grid-cols-2 gap-4">
            <div className="card-content-left ">
              <h2 className="text-blue-500 text-2xl font-bold">
                Swift Transfer, Instant Control
              </h2>
              <p className="text-blue-500 mt-2">
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
            <div className="card-content-right">
              <Image src="/image 7.svg" alt="image7" width={300} height={300} />
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
