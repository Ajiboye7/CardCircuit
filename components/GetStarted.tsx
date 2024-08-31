import CustomButton from "./CustomButton";

const GetStarted = () => {
  return (
    <section className=" mx-5 md:mx-10 lg:mx-20 bg-footer-bg1 bg-center z-10">
      <div className=" text-center max-w-[1440px] mx-auto min-h-[400px] md:min-h-[600px] bg-fontColor rounded-3xl sm:rounded-borderCurve p-5 sm:p-14 sm:relative top-64 bg-footer-bg1 bg-no-repeat ">
        <p className="text-customBg get-started-title sm:my-4 md:my-6 lg:my-8 xl:my-12">
          Get{" "}
          <span className="text-cardThreeBg get-started-title-span">
            Started{" "}
          </span>
          Today
        </p>
        <p className="get-started-body bg-footer2 bg-no-repeat mb-12 text-GetStartedTextFont">
          Ready to revolutionize how you manage your money? Take the leap
          towards effortless money management with CardCircuit. Join us now and
          experience the future of centralized finance.
        </p>
        <div className="flex gap-btnGapSm items-center justify-center sm:gap-7">
          {/*<CustomButton
            title="GET IT ON<br> Google Play"
            Icon="/playstore-svgrepo-com 1.svg"
            imageStyle=" w-[35px] md:w-8 lg:w-10 xl:w-16 sm:ml-2"
            containerStyles="flex-row-reverse bg-customBg"
            line2Styles="font-bold md:text-3xl lg:text-4xl"
            line1Styles="md:text-2xl lg:text-2xl md:mr-16 lg:mr-24"
          />
          <CustomButton 
          title="Download on the<br> App Store" 
          Icon="/Vector.svg" 
          imageStyle=" w-[35px] md:w-8 lg:w-10 xl:w-16 sm:ml-2"
          containerStyles="flex-row-reverse bg-customBg"
          line2Styles="font-bold md:text-3xl lg:text-4xl"
          line1Styles="text-1xl md:text-2xl"
          />*/}

          <CustomButton
            title="GET IT ON<br> Google Play"
            Icon="/playstore-svgrepo-com 1.svg"
            imageStyle="get-started-img1"
            containerStyles="flex-row-reverse bg-customBg w-[250px] h-[80px] rounded-[10px]"
            line1Styles=""
            line2Styles="font-bold "
          />
          <CustomButton
            title="Download on the<br> App Store"
            Icon="/Vector.svg"
            imageStyle="get-started-img2"
            containerStyles="flex-row-reverse bg-customBg w-[250px] h-[80px]"
            line1Styles=""
            line2Styles="font-bold "
            
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
