import React from 'react';
import Image from 'next/image';

const AsFeaturedIn = () => {
  return (
    <section className='h-auto max-w-[1400px] mx-auto mb-10'>
      <h2 className='text-fontColor text-center  text-4xl sm:5xl md:text-6xl lg:text-7xl font-bold'>As <span className='text-cardThreeBg'>Featured</span> in</h2>
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

export default AsFeaturedIn;
