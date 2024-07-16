import Image from "next/image";
import { AsFeaturedIn,GetStarted ,Hero,} from "@/components";
import { TextWithBackground } from "@/components";
import { Features } from "@/components";
import WithEase from "@/components/WithEase";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main>
      {/*<Hero />*/}
      <TextWithBackground/>
      <Features/>
      <WithEase/>
      <TestimonialSection/>
      <AsFeaturedIn/>
      <GetStarted/>
    </main>
  );
}
