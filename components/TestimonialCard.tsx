import { Testimonial as TestimonialData } from "@/constants";
import Image from "next/image";
import { TestimonialProps } from "@/types";

interface TestimonialCardProps {
  testimonial: TestimonialProps;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="relative group testimonial-big-card m-4 overflow-hidden container mx-auto">
      {/* Parent Card with background image*/}
      <Image
        src={testimonial.img}
        alt={testimonial.alt}
        width={380}
        height={600}
        layout="intrinsic"
        /*layout="fill"
        objectFit="cover"*/
        classNa tems-center mt-5">
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
      </div>

      {/* Pop-up card*/}
      <div className="absolute bottom-[0.12rem] xs:bottom-[0.74rem] left-1/2 bg-opacity-70 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-52 transition-transform duration-700 opacity-0 group-hover:opacity-100 ease-in-out w-[310px] xs:w-[340px] h-auto bg-testimonialCardBg p-6 rounded-t-3xl shadow-lg flex flex-col justify-center items-center text-center z-0">
        <p className=" pop-card-text text-fontColor font-bold">{testimonial.testimony}</p>
      </div>
    </div>
  );
};

  export default TestimonialCard;




