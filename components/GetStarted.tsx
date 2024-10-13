import CustomButton from "./CustomButton";

const GetStarted = () => {
  return (
    <section className=" mx-5 md:mx-10 lg:mx-20 bg-footer-bg1 bg-center z-10">
      <div className=" text-center max-w-[1440px] mx-auto min-h-[400px] md:min-h-[600px] bg-fontColor rounded-3xl sm:rounded-borderCurve p-5 sm:p-14 sm:relative top-64 bg-footer-bg1 bg-no-repeat mb-[3rem] sm:mb-0 ">
        <p className="text-customBg get-started-title sm:my-4 md:my-6 lg:my-8 xl:my-12">
          Get{" "}
          <span className="text-cardThreeBg get-started-title-span">
            Started{" "}
          </span>
          Today
        </p>
        <p className="get-started-body bg-footer2 bg-no-repeat mb-8 sm:mb-12 text-GetStartedTextFont">
          Ready to revolutionize how you manage your money? Take the leap
          towards effortless money management with CardCircuit. Join us now and
          experience the future of centralized finance.
        </p>
        <div className="flex flex-row xs:flex-col sm:flex-row items-center justify-center gap-[10px] lg:gap-[30px] ">
          

          <CustomButton
            title="GET IT ON<br> Google Play"
            Icon="/playstore-svgrepo-com 1.svg"
            imageStyle="get-started-img1 transform: scale(1.1) rotate(10deg);"
            containerStyles="flex-row-reverse bg-customBg w-[150px] h-[50px] xs:w-[250px] xs:h-[80px] rounded-[10px]  xs:!p-11"
            line1Styles="xs:text-[25px] text-[10px]"
            line2Styles="font-bold text-[13px] xs:text-[20px]"
          />
          <CustomButton
            title="Download on the<br> App Store"
            Icon="/Vector.svg"
            imageStyle="get-started-img2"
            containerStyles="flex-row-reverse bg-customBg w-[150px] h-[50px] xs:w-[250px] xs:h-[80px] rounded-[10px]  xs:!p-11"
            line1Styles="text-[10px] xs:text-[20px] "
            line2Styles="font-bold text-[13px] xs:text-[25px] "
            
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
