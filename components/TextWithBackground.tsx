import React from "react";

const TextWithBackground = () => {
  return (
    <section className="w-full">
      <div className="container relative flex justify-center items-center overflow-hidden min-h-[100px] sm:min-h-[200px] md:min-h-[200px] lg:min-h-[300px] xl:min-h-[400px] my-16 w-full mx-auto border-y-4 border-BorderLineColour">
      <p className="background-text absolute text-textBg whitespace-nowrap w-full 2xl:mr-[120px] xl:mr-[90px] md:mr-[54px] sm:mr-[20px] mr-[20px]">
      Your <span className="background-span-text">Cards</span>. Your <span className="background-span-text">Rules</span>
      </p>
      <p className="foreground-text relative text-fontColor">
        Your <span className="foreground-span-text">Cards</span>. Your <span className="foreground-span-text">Rules.</span>
      </p>
    </div>
    </section>
    
  );
};

export default TextWithBackground;

