import Banner from "@/components/about/banner/banner";
import Section1 from "@/components/about/sections/section1";
import Section2 from "@/components/about/sections/section2";
import Section3 from "@/components/about/sections/section3";
//import OurTeam from "@/components/ourTeam/ourteam";
import MarqueeText from "@/components/sections/marqueeText";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Grande Digital | Hakkımızda",
  description: "Hakkımızda content",
};

export default function Page() {
  return (
    <div>
      <Banner
        title={""}
        title2="Hakkımızda"
        text={
          "Düşün, taşın, tasarla! Teknoloji ve tasarımın gücünü birleştiriyoruz."
        }
      />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <OurTeam /> */}
      <MarqueeText />
    </div>
  );
}
