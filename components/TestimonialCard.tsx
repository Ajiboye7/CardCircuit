import { Testimonial as TestimonialData } from "@/constants";
import Image from "next/image";
import { TestimonialProps } from "@/types";

interface TestimonialCardProps {
  testimonial: TestimonialProps;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="relative group testimonial-big-card sm:w-[450px] sm:h-[600px] m-4 overflow-hidden">
      {/* Parent Card with background image */}
      <Image
        src={testimonial.img}
        alt={testimonial.alt}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Smaller Card */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 p-4 bg-testimonialCardBg testimonial-small-card bg-opacity-70 sm:w-[400px] shadow-lg">
        <div className="flex flex-col gap-3 ">
          <div className="flex items-center mt-5">
            <Image
              src="/Stars.svg"
              alt="5 stars"
              width={24}
              height={24}
              className="image-group"
            />
          </div>
          <h3 className="card-name sm:text-4xl  text-fontColor">
            {testimonial.name}
          </h3>
          <p className="card-profession sm:text-2xl mb-1 text-fontColor ">
            {testimonial.profession}
          </p>
          <p className="card-skill text-fontColor">{testimonial.skill}</p>
        </div>
        <div className="absolute bottom-6 left-1/2 bg-opacity-70 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-52 transition-transform duration-500 opacity-0 group-hover:opacity-100 ease-in-out w-[350px] sm:w-[400px] h-auto bg-testimonialCardBg p-6 rounded-t-3xl shadow-lg flex flex-col justify-center items-center text-center z-0">
        <p className="text-1xl sm:text-2xl text-fontColor font-bold">{testimonial.testimony}</p>
      </div>
      </div>

      {/* Pop-up card*/}
      <div className="absolute bottom-6 left-1/2 bg-opacity-70 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-52 transition-transform duration-500 opacity-0 group-hover:opacity-100 ease-in-out w-[350px] sm:w-[400px] h-auto bg-testimonialCardBg p-6 rounded-t-3xl shadow-lg flex flex-col justify-center items-center text-center z-0">
        <p className="text-1xl sm:text-2xl text-fontColor font-bold">{testimonial.testimony}</p>
      </div>
      
     {/*<div className="absolute bottom-6 left-1/2 bg-opacity-70 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-52 transition-transform duration-1000 opacity-10 group-hover:opacity-100 ease-in-out w-[350px] sm:w-[450px] h-auto bg-testimonialCardBg p-6 rounded-t-3xl shadow-lg flex flex-col justify-center items-center text-center z-0">
  <p className="text-2xl text-fontColor font-bold">{testimonial.testimony}</p>
</div>*/}


    </div>
  );
};

export default TestimonialCard;



/*import { Testimonial as TestimonialData } from "@/constants";
import Image from "next/image";
import { TestimonialProps } from "@/types";

interface TestimonialCardProps {
  testimonial: TestimonialProps;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="relative group testimonial-big-card sm:w-[450px] sm:h-[600px] m-4 overflow-hidden transition-all duration-500 ease-in-out">
      {/* Parent Card with background image 
      <Image
        src={testimonial.img}
        alt={testimonial.alt}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Smaller Card with hover effect 
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 p-4 bg-testimonialCardBg testimonial-small-card bg-opacity-70 sm:w-[400px] shadow-lg transition-all duration-500 ease-in-out group-hover:h-[500px]">
        <div className="flex flex-col gap-3">
          {/* Testimonial Text (Hidden Initially, Revealed on Hover) 
          <p className=" pop-card-text sm:text-2xl text-fontColor font-bold opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out transform -translate-y-full">
            {testimonial.testimony}
          </p>
          {/* Other Card Content 
          <div className="flex items-center mt-5">
            <Image
              src="/Stars.svg"
              alt="5 stars"
              width={24}
              height={24}
              className="image-group"
            />
          </div>
          <h3 className="card-name sm:text-4xl text-fontColor">
            {testimonial.name}
          </h3>
          <p className="card-profession sm:text-2xl mb-1 text-fontColor ">
            {testimonial.profession}
          </p>
           <p className="card-skill text-center text-fontColor">{testimonial.skill}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;*/


