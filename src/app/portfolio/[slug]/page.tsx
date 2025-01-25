import DetailGallery from "@/components/portfolioDetail/detailGallery";
import Section1 from "@/components/portfolioDetail/Section1";
import Section2 from "@/components/portfolioDetail/Section2";
import Section3 from "@/components/portfolioDetail/Section3";
import Section4 from "@/components/portfolioDetail/Section4";
import Section5 from "@/components/portfolioDetail/Section5";
import MarqueeText from "@/components/sections/marqueeText";

export default function Page() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <DetailGallery />
      <MarqueeText />
    </div>
  );
}

export async function generateStaticParams() {
  const portfolioItems = [{ slug: "detail1" }];

  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}
