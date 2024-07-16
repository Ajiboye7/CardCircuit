 
import CustomButton from "./CustomButton";

const GetStarted = () => {
  return (
    <section>
        <div className="flex flex-col gap-8 items-center justify-center max-w-[1440px] mx-auto bg-fontColor rounded-3xl p-14">
      <h2 className="text-customBg text-7xl font-bold ">Get <span className="text-cardThreeBg">Started </span>Today</h2>
      <p className="text-GetStartedTextFonts text-3xl font-light">Ready to revolutionize how you manage your money? Take the leap towards effortless money management with CardCircuit. Join us now and experience the future of centralized finance.</p>
      <div className="flex gap-7">
      <CustomButton
            title="Get on Android"
            Icon="/playstore-svgrepo-com 1.svg"
            textStyles="text-2xl"
          />
          <CustomButton 
          title="Get on iPhone" 
          Icon="/Vector.svg" 
          textStyles="text-2xl"/>
        </div>
    </div>
    </section>
    
  );
}

export default GetStarted;
