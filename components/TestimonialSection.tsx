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
      </div>

      <div className="flex items-center justify-center flex-wrap py-12 mx-auto max-w-[1500px]" /*'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1440px]'*/>
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
