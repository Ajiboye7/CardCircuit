import React from "react";

const TextWithBackground = () => {
  return (
    <div className="relative flex justify-center items-center overflow-hidden min-h-[100px] my-16 max-w-[1440px] mx-auto">
      <h1 className="background-text font-bold absolute text-7xl  lg:text-big text-textBg whitespace-nowrap">
        Your Rules. Your Rules
      </h1>
      <h1 className="foreground-text font-bold relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-fontColor">
        Your Rules. Your Rules
      </h1>
    </div>
  );
};

export default TextWithBackground;

