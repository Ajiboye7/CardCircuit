import React from "react";

const TextWithBackground = () => {
  return (
    <section className="w-full">
      <div className="relative flex justify-center items-center overflow-hidden min-h-[100px] sm:min-h-[200px] md:min-h-[200px] lg:min-h-[300px] xl:min-h-[400px] my-16 w-full mx-auto border-y-4 border-BorderLineColour">
      <h1 className="background-text font-bold absolute text-7xl xl:text-big  text-textBg whitespace-nowrap w-full">
        Your Cards. Your Rules
      </h1>
      <h1 className="foreground-text font-bold relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-fontColor">
        Your Cards. Your Rules
      </h1>
    </div>
    </section>
    
  );
};

export default TextWithBackground;

