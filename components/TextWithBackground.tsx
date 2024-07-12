import React from "react";

const TextWithBackground = () => {
  return (
    <div className="relative flex justify-center items-center overflow-hidden h-40">
    <h1 className="background-text absolute text-8xl lg:text-9xl text-gray-200 whitespace-nowrap">
      Background Text
    </h1>
    <h1 className="foreground-text relative text-4xl lg:text-6xl text-black">
      Foreground Text
    </h1>
  </div>
    
  );
};

export default TextWithBackground;

/*style={{ left: '500px', top:'30px' }}*/
