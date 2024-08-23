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

const TestimonialCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-white border rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${isHovered ? 'h-[329px]' : 'h-[196px]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} // Add subtle shadow to the main card
    >
      {/* Testimonial Card 
      <div
        className={`absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out ${isHovered ? 'translate-y-0 opacity-100 z-20' : '-translate-y-full opacity-0 z-10'}`}
        style={{ height: '133px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'inherit' }} // Blending with main card
      >
        <div className="p-4 text-gray-700 rounded-t-lg">
          "Working with this team has been a transformative experience. Their expertise and dedication to quality are evident in every project they handle. I am continuously impressed by their ability to deliver outstanding results while maintaining clear and open communication. Highly recommended!"
        </div>
      </div>

      {/* Main Card with Name and Profession 
      <div className="relative flex flex-col justify-between p-4 bg-white rounded-b-lg z-10">
        <div className="relative">
          <h3 className="text-xl font-semibold">Jane Doe</h3>
          <p className="text-gray-500">Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;*/
