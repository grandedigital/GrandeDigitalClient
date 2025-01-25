import Banner from "@/components/about/banner/banner";
import Section1 from "@/components/about/sections/section1";
import Section2 from "@/components/about/sections/section2";
import Section3 from "@/components/about/sections/section3";
import OurTeam from "@/components/ourTeam/ourteam";
import MarqueeText from "@/components/sections/marqueeText";

export default function Page() {
  return (
    <div>
      <Banner
        title={"About"}
        title2=" us"
        text={
          "We are committed to deliver unique digital media solutions from design to eCommerce solutions."
        }
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <OurTeam />
      <MarqueeText />
    </div>
  );
}
