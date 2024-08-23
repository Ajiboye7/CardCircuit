/*import React from 'react';
import Image from 'next/image';

const AsFeaturedIn = () => {
  return (
    <section className='h-auto max-w-[1400px] mx-auto mb-10 sm:mb-[-10px]'>
      <p className='text-fontColor text-center  text-4xl sm:5xl md:text-6xl lg:text-7xl font-bold'>As <span className='text-cardThreeBg'>Featured</span> in</p>
      <div className='flex flex-row flex-wrap justify-center items-center gap-16 mt-10 mx-5'>
        <Image 
        src="/Techpoint - png.svg"
        alt= "techiepoint"
        width={150}
        height={200}
        className='md:w-[270px]'
        />
         <Image 
        src="/TechCabal _ - png.svg"
        alt= "techcable"
        width={150}
        height={200}
         className='md:w-[270px]'
        />
        <Image 
        src="/Guardian_logo 1.svg"
        alt= "guardian"
        width={150}
        height={200}
         className='md:w-[270px]'
        />
        <Image 
        src="/Group 21.svg"
        alt= "group21"
        width={150}
        height={200}
         className='md:w-[270px]'
        />
        
      </div>
    </section>
  );
}

export default AsFeaturedIn;*/

/*'use client'
import React, { useState } from 'react';

const AsFeaturedIn = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-white border rounded-lg p-4 transition-all duration-300 ease-in-out ${isHovered ? 'h-[329px]' : 'h-[196px]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out ${isHovered ? 'translate-y-0' : '-translate-y-full'}">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-gray-500">Software Engineer</p>
          </div>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'} `}>
            <p className="mt-4 text-gray-700">
              "Working with this team has been a transformative experience. Their expertise and dedication to quality are evident in every project they handle. I am continuously impressed by their ability to deliver outstanding results while maintaining clear and open communication. Highly recommended!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsFeaturedIn;*/


import React from 'react';

const AsFeaturedIn = () => {
  return (
    <p className='text-white'>
      Hello
    </p>
  );
}

export default AsFeaturedIn;

