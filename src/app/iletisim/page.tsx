import Banner from "@/components/about/banner/banner";
import Section1 from "@/components/contact/section1";
import MarqueeText from "@/components/sections/marqueeText";
import MapAndForm from "@/components/contact/mapAndForm";

export default function Page() {
  return (
    <div>
      <Banner
        title={"İletişim"}
        text={
          "Dijital dünyadaki varlığınızı güçlendirmek ve markanızı bir adım öne taşımak için bize ulaşın!"
        }
      />
      <Section1
        text={"Size yardımcı olmak ve sorularınızı yanıtlamak için buradayız."}
      />
      <MapAndForm />
      <MarqueeText />
    </div>
  );
}
