import React from 'react';
import { Testimonial } from '@/constants';
import {TestimonialCard} from '@/components'
 
const TestimonialSection = () => {
  return (
    <div className="flex flex-wrap justify-center py-12">
    {Testimonial.map((testimonial:any) => (
      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
    ))}
  </div>
  );
}

export default TestimonialSection;
