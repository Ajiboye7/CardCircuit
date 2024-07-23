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
    <div className='mt-10'>
      <div>
        <Image
          src='/Quote.svg'
          alt='quote'
          width={180}
          height={180}
          className='relative w-0 sm:top-10 md:top-36 sm:w-[50px] md:w-[140px]'
        />
        <h1 className='text-fontColor text-center text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold'>
          What our <span className='text-cardThreeBg font-bold'>Customers</span> are saying
        </h1>
      </div>

      <div className="flex flex-wrap justify-center py-12">
        {Testimonial?.map((testimonial) => (
          <div key={testimonial.id} className="m-4">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
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
