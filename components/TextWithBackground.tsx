import React from "react";

const TextWithBackground = () => {
  return (
    <section className="w-full">
      <div className="relative flex justify-center items-center overflow-hidden min-h-[100px] sm:min-h-[200px] md:min-h-[200px] lg:min-h-[300px] xl:min-h-[400px] my-16 w-full mx-auto border-y-4 border-BorderLineColour">
      <p className="background-text absolute text-textBg whitespace-nowrap w-full">
      Your <span className="background-span-text">Cards</span>. Your <span className="background-span-text">Rules</span>
      </p>
      <p className="foreground-text relative text-fontColor">
        Your <span className="foreground-span-text">Cards</span>. Your <span className="foreground-span-text">Rules</span>
      </p>
    </div>
    </section>
    
  );
};

export default TextWithBackground;

