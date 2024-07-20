import React from 'react';
import { TestimonialCard } from '@/components';
import { Testimonial } from '@/constants';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {Testimonial?.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
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