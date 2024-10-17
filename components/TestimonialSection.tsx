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
          What our <span className='text-cardThreeBg font-[800]'>Customers</span> are saying
        </p>
      </div>

      <div className="flex gap-10 items-center justify-center flex-wrap py-12 container mx-auto" /*'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1440px]'*/>
        {Testimonial?.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard testimonial={testimonial}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;




