import React from "react";

const TextWithBackground = () => {
  return (
    <div className="container relative max-w-[1800px] mx-auto h-48 border-solid border-4 border-light-blue-500 mt-6">
      <div className="background absolute ">
        <h1 className=" text-9xl font-semibold text-gray-900 w-full text-center ">
          Your<span className="font-bold"> Cards.</span>
          <span className="font-bold">Rules.</span>
        </h1>
      </div>
      <div className="foreground ">
        <h1
          className=" text-7xl absolute font-semibold text-gray-300"
          style={{ left: "500px", top: "30px" }}
        >
          Your<span className="font-bold"> Cards.</span> Your
          <span className="font-bold">Rules.</span>
        </h1>
      </div>
    </div>
  );
};

export default TextWithBackground;

/*style={{ left: '500px', top:'30px' }}*/
