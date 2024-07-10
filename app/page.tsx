import Image from "next/image";
import { Hero } from "@/components";
import {TextWithBackground} from "@/components";
import {Features} from "@/components"

export default function Home() {
  return (
    <main>
      <Hero/>
      <h2  className="text-fontColor text-7xl">Let go</h2>
    </main>
  );
}
