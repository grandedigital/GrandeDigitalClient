import Content1 from "@/components/blog/content1";
import Content2 from "@/components/blog/content2";
import Content3 from "@/components/blog/content3";
import FullPhoto1 from "@/components/blog/fullPhoto1";
import Header from "@/components/blog/header";
import PhotoWithTwoSection from "@/components/blog/photoWithTwoSection";
import Section1 from "@/components/blog/section1";

export default function Page() {
  return (
    <div>
      <Header />
      <FullPhoto1 img="blog-single-creative-01.jpg" />
      <Content1 />
      <FullPhoto1 img="blog-single-creative-02.jpg" />
      <Content2 />
      <PhotoWithTwoSection />
      <Content3 />
      <Section1 />
    </div>
  );
}
