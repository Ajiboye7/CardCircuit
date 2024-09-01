import React from 'react';
import { TestimonialCard } from '@/components';
import { Testimonial } from '@/constants';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestimonialSection = () => {
  return (
    <div className='mt-10 mx-auto container'>
      <div className=''>
        <Image
          src='/Quote.svg'
          alt='quote'
          width={180}
          height={180}
          className='relative w-0 sm:top-[4.5rem] md:top-[7rem] sm:w-[50px] md:w-[100px] lg:w-[120px]'
        />
        <p className='text-fontColor text-center testimonial-title '>
          What our <span cla
    </div>
  );
}

export default TestimonialSection;




/*import React from 'react';

import { TestimonialCard } from '@/components';
import { Testimonial as TestimonialData } from '@/constants';
import Image from 'next/image';

const TestimonialSection = () => {
  

  return (
    <div>
      <h1 className='text-fontColor text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold'>
        What our <span className='text-cardThreeBg'>customers</span> are saying
      </h1>
    
        {TestimonialData.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
    
    </div>
  );
};

export default TestimonialSection;
*/
