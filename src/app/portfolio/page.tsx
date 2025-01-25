import Banner from "@/components/about/banner/banner";
import Gallery from "@/components/gallery/Gallery";
import MarqueeText from "@/components/sections/marqueeText";

export default function Page() {
  return (
    <div>
      <Banner
        title="Portfolio"
        text="Our skilled developers and designers make sure to deliver tried-tested efficient and robust designs."
      />
      <Gallery />
      <MarqueeText />
    </div>
  );
}
