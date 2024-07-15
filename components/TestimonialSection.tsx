import React from 'react';
import {TestimonialCard} from '@/components'
import { Testimonial } from '@/constants';
 
const TestimonialSection = () => {
  return (
    <div>
      <h1 className='text-fontColor text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold'>
        What our <span className='text-cardThreeBg'>customers</span> are saying
        </h1>
      <div className="flex flex-wrap justify-center py-12">
    {Testimonial?.map((testimonial) => (
      <TestimonialCard key={testimonial.id}testimonial={testimonial}/>
    ))}
  </div>
    </div>
   
  );
}

export default TestimonialSection;
