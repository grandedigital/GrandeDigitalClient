import Banner from "@/components/about/banner/banner";
import Section1 from "@/components/contact/section1";
import Section2 from "@/components/about/sections/section2";
import Section3 from "@/components/about/sections/section3";
import OurTeam from "@/components/ourTeam/ourteam";
import MarqueeText from "@/components/sections/marqueeText";

export default function Page() {
  return (
    <div>
      <Banner
        title={"Contact"}
        text={
          "We're here to here answer any question you may have. Let us help you get your project started."
        }
      />
      <Section1 />
    </div>
  );
}
