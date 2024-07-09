import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
const Features = () => {
  return (
    <div className="container max-w-[1800px] mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card One */}
        <div className="card-one bg-gray-200 p-4 rounded-md">
          <div className="card-content flex flex-col">
            <h2 className="text-blue-600 text-2xl font-bold">
              Centralize Your Chaos
            </h2>
            <p className="text-blue-400 mt-2">
              Your entire financial universe in one app. Link cards, manage
              transactions, and stay on top of your finances effortlessly!
            </p>
          </div>
        </div>

        {/* Card Two */}
        <div className="card-two bg-gray-200 p-4 rounded-md">
          <div className="card-content flex flex-col">
            <h2 className="text-blue-500 text-2xl font-bold">
              Spend Smarter with CardCircuit
            </h2>
            <p className="text-blue-500 mt-2">
              Categorize your expenses, track trends, and get personalized
              insights. Make informed decisions and save more every day
            </p>
          </div>
        </div>

        {/* Card Three */}
        <div className="card-three bg-gray-200 p-4 rounded-md md:col-span-2">
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
            <CustomButton 
            title="Get on Iphone"
             Icon="/Vector.svg" />
          </div>
            </div>
            <div className="card-content-right">
              <Image src="/image 7.svg" alt="image7" width={300} height={300}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
