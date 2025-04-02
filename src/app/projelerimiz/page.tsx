import Banner from "@/components/about/banner/banner";
import Gallery from "@/components/gallery/Gallery";
import MarqueeText from "@/components/sections/marqueeText";

export default function Page() {
  return (
    <div>
      <Banner
        title="Projelerimiz"
        text="Uzman geliştiricilerimiz ve tasarım ekibimiz, kullanıcı odaklı ve yüksek performanslı dijital çözümler üretir."
      />
      <Gallery />
      <MarqueeText />
    </div>
  );
}
