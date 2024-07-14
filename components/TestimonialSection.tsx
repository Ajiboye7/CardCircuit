import React from 'react';
import {TestimonialCard} from '@/components'
import { Testimonial } from '@/constants';
 
const TestimonialSection = () => {
  return (
    <div className="flex flex-wrap justify-center py-12">
    {Testimonial?.map((testimonial) => (
      <TestimonialCard key={testimonial.id}testimonial={testimonial} />
    ))}
  </div>
  );
}

export default TestimonialSection;
