"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  const [speed, setSpeed] = useState(70);
  const words = ["pazarlama.", "analiz.", "strateji.", "işletme."];

  useEffect(() => {
    // Ekran boyutunu kontrol et ve speed değerini buna göre ayarla
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSpeed(30); // Küçük ekranlar için daha yavaş hız
      } else if (window.innerWidth < 1024) {
        setSpeed(70); // Orta boy ekranlar için normal hız
      } else {
        setSpeed(100); // Büyük ekranlar için daha hızlı hız
      }
    };

    // Bileşen yüklendiğinde bir kez çalıştır ve her ekran boyutu değiştiğinde çalıştır
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup: Component unmount olduğunda event listener'ı kaldır
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Sadece bileşen ilk render edildiğinde çalışacak

  return (
    <section className="pt-[70px] pb-0 max-mdx:pt-[50px] max-md:pt-[40px]">
      <Marquee speed={speed} className="overflow-hidden p-1">
        {words.map((item, index) =>
          // Koşul: Eğer item belirli bir değeri taşıyorsa (örneğin "hello"), render et
          index % 2 == 0 ? (
            <div
              key={index}
              className="font-semibold text-[--dark-gray2] leading-[8.75rem] font-spaceGrotesk mx-5 text-[8.75rem] max-2xl:text-[8.125rem] max-lgx:text-[6.875rem] max-lgx:leading-[8.125rem] max-md:text-[5rem] max-md:tracking-[-6px]"
            >
              {words[index]}
            </div>
          ) : (
            <div
              key={index}
              className="stroke-text font-semibold text-[--dark-gray2] leading-[8.75rem] font-spaceGrotesk mx-5 text-[8.75rem] max-2xl:text-[8.125rem] max-lgx:text-[6.875rem] max-lgx:leading-[8.125rem] max-md:text-[5rem] max-md:tracking-[-6px]"
            >
              {words[index]}
            </div>
          )
        )}
      </Marquee>
    </section>
  );
}
