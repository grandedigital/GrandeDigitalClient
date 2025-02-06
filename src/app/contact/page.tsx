import Banner from "@/components/about/banner/banner";
import Section1 from "@/components/contact/section1";
import MarqueeText from "@/components/sections/marqueeText";
import MapAndForm from "@/components/contact/mapAndForm";

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
      <MapAndForm />
      <MarqueeText />
    </div>
  );
}
