import Brands from "@/components/brands";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero";
import Posts from "@/components/posts";
import Section1 from "@/components/sections/Section1";
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import Section4 from "@/components/sections/Section4";
import Marquee from "@/components/sections/marqueeText";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Grande Digital",
  description: "Dijital Yazılım Ajansı",
};

export default function Home() {
  return (
    <div>
      <Hero verticalText="HER ADIMDA KALİTE" />
      <Brands />
      <Section1 />
      <Section2 />
      <Gallery homepage={true} title="Neler Yaptık" />
      <Section3 />
      <Section4 />
      {/* <Posts isNavigateButtonActive={true} /> */}
      <Marquee />
    </div>
  );
}
