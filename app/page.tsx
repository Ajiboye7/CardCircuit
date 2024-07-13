import Image from "next/image";
import { Hero, TestimonialCard } from "@/components";
import { TextWithBackground } from "@/components";
import { Features } from "@/components";
import WithEase from "@/components/WithEase";

export default function Home() {
  return (
    <main>
      {/*<Hero />*/}
      <TextWithBackground/>
      <Features/>
      <WithEase/>
      <TestimonialCard/>
    </main>
  );
}
