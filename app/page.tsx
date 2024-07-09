import Image from "next/image";
import { Hero } from "@/components";
import {TextWithBackground} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero/>
      <TextWithBackground/>
    </main>
  );
}
