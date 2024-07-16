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


/*import React from 'react';
import Slider from 'react-slick';
import { TestimonialCard } from '@/components';
import { Testimonial as TestimonialData } from '@/constants';
import Image from 'next/image';

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <h1 className='text-fontColor text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold'>
        What our <span className='text-cardThreeBg'>customers</span> are saying
      </h1>
      <Slider {...settings}>
        {TestimonialData.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;

const SampleNextArrow = (props:any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer z-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <Image src="/right-arrow.svg" alt="Next" width={30} height={30} />
    </div>
  );
};

const SamplePrevArrow = (props:any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer z-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <Image src="/left-arrow.svg" alt="Previous" width={30} height={30} />
    </div>
  );
};*/