 
import CustomButton from "./CustomButton";

const GetStarted = () => {
  return (
    <section className="mx-20 mt-10">
        <div className="flex flex-col gap-8 items-center justify-center max-w-[1440px] mx-auto bg-fontColor rounded-3xl p-5 sm:p-14">
      <h2 className="text-customBg text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ">Get <span className="text-cardThreeBg">Started </span>Today</h2>
      <p className="text-GetStartedTextFonts text-2xl md:text-2xl lg:text-3xl font-semibold leading-slightly-loose">Ready to revolutionize how you manage your money? Take the leap towards effortless money management with CardCircuit. Join us now and experience the future of centralized finance.</p>
      <div className="flex gap-7">
      <CustomButton
            title="Get it on<br> Google Play"
            Icon="/playstore-svgrepo-com 1.svg"
            imageStyle="md:w-8 lg:w-10 xl:w-16 sm:ml-2"
            containerStyles="flex-row-reverse bg-customBg"
            line2Styles="font-bold md:text-3xl lg:text-4xl"
            line1Styles="md:text-2xl lg:text-2xl"
        
          />
          <CustomButton 
          title="Download on the<br> App Store" 
          Icon="/Vector.svg" 
          textStyles="text-2xl"
          imageStyle="md:w-8 lg:w-10 xl:w-16 sm:ml-2"
          containerStyles="flex-row-reverse bg-customBg"
          line2Styles="font-bold md:text-3xl lg:text-4xl"
          line1Styles="text-2xl"
          />
          
        </div>
    </div>
    </section>
    
  );
}

export default GetStarted;
