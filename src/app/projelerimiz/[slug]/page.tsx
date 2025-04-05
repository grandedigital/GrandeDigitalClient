import DetailGallery from "@/components/portfolioDetail/detailGallery";
import Section1 from "@/components/portfolioDetail/Section1";
import Section2 from "@/components/portfolioDetail/Section2";
import Section3 from "@/components/portfolioDetail/Section3";
import Section4 from "@/components/portfolioDetail/Section4";
import Section5 from "@/components/portfolioDetail/Section5";
import MarqueeText from "@/components/sections/marqueeText";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";

//Dynamic metadata
export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params;
  return {
    title: `Grande Digital | Projelerimiz | ${slug}`,
    description: "Proje detay content",
  };
}

export default async function Page({ params }: { params?: any }) {
  const { slug } = await params;
  const data = projects.find((itm) => itm.slug === slug);
  if (!data) {
    notFound();
  }
  return (
    <div>
      <Section1 data={data} />
      <Section3 data={data} />
      <Section2 data={data} />
      {/* {data?.detailPhoto2 && <Section4 data={data} />}
      {data?.detailPhoto2Desc1 && <Section5 data={data} />}
      {data?.galleryPhoto1 && <DetailGallery data={data} />} */}
      <MarqueeText />
    </div>
  );
}

// export async function generateStaticParams() {
//   const portfolioItems = [{ slug: "detail1" }];

//   return portfolioItems.map((item) => ({
//     slug: item.slug,
//   }));
// }
