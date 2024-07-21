import { Testimonial as TestimonialData } from "@/constants";
import Image from "next/image";
import { TestimonialProps } from "@/types";

interface TestimonialCardProps {
  testimonial: TestimonialProps;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="relative group w-[500px] sm:h-[700px] m-4 h-[450px] overflow-hidden rounded-borderCurve">
      {/* Parent Card with background image */}
      <Image
        src={testimonial.img}
        alt={testimonial.alt}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Smaller Card */}
      <div className="absolute  bottom-6 left-1/2 transform -translate-x-1/2 z-10 p-4 bg-testimonialCardBg bg-opacity-70 w-[350px] sm:w-[450px] h-56 rounded-lessCurve shadow-lg">
        <div className="flex flex-col gap-3 ">
          <div className="flex items-center mt-5">
            <Image
              src="/Stars.svg"
              alt="5 stars"
              width={150}
              height={20}
            />
          </div>
          <h3 className="text-4xl font-bold  text-fontColor">
            {testimonial.name}
          </h3>
          <p className="text-2xl mb-1 text-fontColor ">
            {testimonial.profession}
          </p>
          <p className="text-lg text-fontColor">{testimonial.skill}</p>
        </div>
      </div>

      {/* Pop-up card*/}
      <div className="absolute bottom-6 left-1/2 bg-opacity-70 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-52 transition-transform duration-500 opacity-0 group-hover:opacity-100 ease-in-out w-[350px] sm:w-[450px] h-auto bg-testimonialCardBg p-6 rounded-t-3xl shadow-lg flex flex-col justify-center items-center text-center z-0">
        <p className="text-2xl text-fontColor font-bold">{testimonial.testimony}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

{
  /*
    
    
     <div className="relative group w-80 h-96 m-4 overflow-hidden">
        {/* Parent Card with background image 
        <Image
          src={testimonial?.img}
          alt={testimonial?.alt}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        {/* Smaller Card 
        <div className="relative z-10 p-4 bg-white bg-opacity-70 w-64 mx-auto mt-4 rounded-lg shadow-lg">
          <div className="flex items-center mb-2">
            <Image
              src="/Stars.svg" //star image path
              alt="5 stars"
              width={100}
              height={20}
            />
          </div>
          <h3 className="text-xl font-bold mb-1 text-fontColor">{testimonial?.name}</h3>
          <p className="text-sm mb-1">{testimonial?.profession}</p>
          <p className="text-sm">{testimonial?.skill}</p>
        </div>
        {/* Pop-up card 
        <div className="absolute inset-0 bg-white bg-opacity-90 p-6 flex flex-col justify-center items-center text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out ">
          <p className="text-lg">{testimonial?.testimony}</p>
        </div>
      </div>*/
}



      {/* Smaller Card 
      <div className="absolute  bottom-6 left-1/2 transform -translate-x-1/2 z-10 p-4 bg-testimonialCardBg bg-opacity-70 w-[350px] sm:w-[450px] h-56 rounded-lessCurve shadow-lg">
        <div className="flex flex-col gap-3 ">
          <div className="flex items-center mt-5">
            <Image
              src="/Stars.svg"
              alt="5 stars"
              width={150}
              height={20}
            />
          </div>
          <h3 className="text-4xl font-bold  text-fontColor">
            {testimonial.name}
          </h3>
          <p className="text-2xl mb-1 text-fontColor ">
            {testimonial.profession}
          </p>
          <p className="text-lg text-fontColor">{testimonial.skill}</p>
        </div>
      </div>

      {/* Pop-up card
      <div className="absolute bottom-6 left-1/2 bg-opacity-70 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-52 transition-transform duration-500 opacity-0 group-hover:opacity-100 ease-in-out w-[350px] sm:w-[450px] h-auto bg-testimonialCardBg p-6 rounded-t-3xl shadow-lg flex flex-col justify-center items-center text-center z-0">
        <p className="text-2xl text-fontColor font-bold">{testimonial.testimony}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;*/}