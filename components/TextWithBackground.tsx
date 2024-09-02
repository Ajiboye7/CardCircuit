import React from "react";

const TextWithBackground = () => {
  return (
    <section className="w-full">
      <div className="container relative flex justify-center items-center overflow-hidden min-h-[100px] sm:min-h-[200px] md:min-h-[200px] lg:min-h-[300px] xl:min-h-[400px] my-16 w-full mx-auto border-y-4 border-BorderLineColour">
      <p className="background-text absolute text-textBg whitespace-nowrap w-full 2xl:mr-[120px] xl:mr-[90px] md:mr-[54px] sm:mr-[20px] sm:text-left text-center">
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

/*import React from "react";

const TestimonialCard = () => {
  const name = "Jane Doe";
  const profession = "Software Engineer";
  const testimonial =
    "Working with this team has been an amazing experience. Their attention to detail and dedication to excellence is unmatched.";

  return (
    <div className="relative w-full max-w-xs mx-auto mt-10 group">
      {/* Main Card 
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[329px]">
        
        {/* Testimonial text (hidden by default) 
        <div className="absolute inset-x-0 top-0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <div className="px-4 py-6 bg-white shadow-md rounded-lg">
            <p className="text-center text-gray-700">{testimonial}</p>
          </div>
        </div>

        {/* Name and Profession 
        <div className="relative px-4 py-6 bg-white">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="mt-2 text-sm text-gray-500">{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;*/
