"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useResponsiveAnimation } from "@/hooks/useResponsiveAnimation";

export default function Section2({
  longText = "İyi bir ekip, harika işler demek..",
}) {
  const [isAnimationsPassive, setIsAnimationsPassive] = useState(false);
  const shouldAnimate = useResponsiveAnimation(1217);

  const longTextRef = useRef(null);
  const titlesRef = useRef(null);
  const titleBottomTextRef = useRef(null);

  const longTextViewArea = useInView(longTextRef, {
    once: true,
    amount: 0.2,
  });

  const titlesViewArea = useInView(titlesRef, {
    once: true,
    amount: 0.2,
  });

  const titleBottomTextViewArea = useInView(titleBottomTextRef, {
    once: true,
    amount: 0.2,
  });

  if (!shouldAnimate) {
    return (
      <section className="py-[130px] bg-[--nero-gray] max-2xl:py-[120px] max-mdx:py-[95px] max-md:py-[50px]">
        <div className="custom-container">
          <div className="mb-[7%] row max-md:mb-[50px]">
            <div className="px-[15px] flex-[0_0_auto] w-full max-w-full lgx:flex-[0_0_auto] lgx:w-3/4 mdx:flex-[0_0_auto] mdx:w-full">
              <h2
                ref={longTextRef}
                className="font-medium tracking-[-2px] font-spaceGrotesk text-white mb-0 relative"
              >
                <span>{longText}</span>
              </h2>
            </div>
          </div>
          <div className="mb-[6%] row max-md:mb-[30px]">
            <div
              ref={titlesRef}
              className="px-[15px] flex-[0_0_auto] w-full max-w-full"
            >
              <div className="mx-0 py-[40px] border-[--dark-gray2] border-b border-t items-center relative flex flex-wrap">
                <div className="px-0 text-left max-w-full md:text-center md:flex-[0_0_auto] md:w-[8.33333333%] max-md:mb-[20px] w-full">
                  <span className="text-white text-[18px] font-spaceGrotesk">
                    01
                  </span>
                </div>
                <div className="px-0 items-center flex max-w-full md:ml-[8.33333333%] md:flex-[0_0_auto] md:w-[41.66666667%] max-md:mb-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    fill="var(--base-color)"
                    viewBox="0 0 16 16"
                    className="mr-[20px] inline-block"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                    />
                    <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.52 6.52 0 0 0 1.814 9H2.5q.186 0 .358.043a5.52 5.52 0 0 1 3.185-3.185A1.5 1.5 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.52 6.52 0 0 1 2.72 3.5H13.5q-.185 0-.358.043a5.52 5.52 0 0 0-3.185-3.185" />
                  </svg>
                  <span className="font-medium text-white text-[1.875rem] leading-[2.8rem] font-spaceGrotesk">
                    Web Tasarımı ve Geliştirme
                  </span>
                </div>
                <div className="px-0 max-w-full md:flex-[0_0_auto] md:w-[41.66666667%]">
                  <p className="my-0 tracking-[.6px]">
                    Küçük ölçekli girişimlerden büyük çaplı projelere kadar, her
                    tür ihtiyaç için özel web çözümleri sunuyor ve gerçek
                    dünyada uygulanabilir, etkili web tasarımları
                    geliştiriyoruz.
                  </p>
                </div>
              </div>
              <div className="mx-0 py-[40px] border-[--dark-gray2] border-b items-center relative flex flex-wrap">
                <div className="px-0 text-left max-w-full md:text-center md:flex-[0_0_auto] md:w-[8.33333333%] max-md:mb-[20px] w-full">
                  <span className="text-white text-[18px] font-spaceGrotesk">
                    02
                  </span>
                </div>
                <div className="px-0 items-center flex max-w-full md:ml-[8.33333333%] md:flex-[0_0_auto] md:w-[41.66666667%] max-md:mb-[20px] flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="42"
                    height="42"
                    fill="var(--base-color)"
                    className="mr-[20px] inline-block"
                  >
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                  </svg>
                  <span className="font-medium text-white text-[1.875rem] leading-[2.8rem] font-spaceGrotesk mr-[15px]">
                    Yazılım Geliştirme
                  </span>
                  <span className="font-bold px-[15px] rounded-full bg-[--yellow] text-[--dark-gray2] leading-[28px] text-[12px] uppercase max-mdx:my-[10px]">
                    Popular
                  </span>
                </div>
                <div className="px-0 max-w-full md:flex-[0_0_auto] md:w-[41.66666667%]">
                  <p className="my-0 tracking-[.6px]">
                    Her ölçekteki projeye özel, yüksek verimli ve ölçeklenebilir
                    yazılım çözümleri geliştirmek için çalışıyor, iş süreçlerini
                    dijital dünyada güçlendiren özelleştirilmiş yazılımlar
                    sunuyoruz.
                  </p>
                </div>
              </div>
              <div className="mx-0 py-[40px] border-[--dark-gray2] border-b items-center relative flex flex-wrap">
                <div className="px-0 text-left max-w-full md:text-center md:flex-[0_0_auto] md:w-[8.33333333%] max-md:mb-[20px] w-full">
                  <span className="text-white text-[18px] font-spaceGrotesk">
                    03
                  </span>
                </div>
                <div className="px-0 items-center flex max-w-full md:ml-[8.33333333%] md:flex-[0_0_auto] md:w-[41.66666667%] max-md:mb-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="42"
                    height="42"
                    fill="var(--base-color)"
                    className="mr-[20px] inline-block"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                  </svg>
                  <span className="font-medium text-white text-[1.875rem] leading-[2.8rem] font-spaceGrotesk">
                    Mobil Uygulama Geliştirme
                  </span>
                </div>
                <div className="px-0 max-w-full md:flex-[0_0_auto] md:w-[41.66666667%]">
                  <p className="my-0 tracking-[.6px]">
                    Farklı platformlarda çalışabilen, kullanıcı dostu ve yüksek
                    performanslı mobil uygulamalar geliştirmek için çaba
                    harcıyor, her ihtiyaca yönelik yenilikçi mobil çözümler
                    sunuyoruz.
                  </p>
                </div>
              </div>
              <div className="mx-0 py-[40px] border-[--dark-gray2] border-b items-center relative flex flex-wrap">
                <div className="px-0 text-left max-w-full md:text-center md:flex-[0_0_auto] md:w-[8.33333333%] max-md:mb-[20px] w-full">
                  <span className="text-white text-[18px] font-spaceGrotesk">
                    04
                  </span>
                </div>
                <div className="px-0 items-center flex max-w-full md:ml-[8.33333333%] md:flex-[0_0_auto] md:w-[41.66666667%] max-md:mb-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    fill="var(--base-color)"
                    className="mr-[20px] inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  <span className="font-medium text-white text-[1.875rem] leading-[2.8rem] font-spaceGrotesk">
                    Danışmanlık Hizmetleri
                  </span>
                </div>
                <div className="px-0 max-w-full md:flex-[0_0_auto] md:w-[41.66666667%]">
                  <p className="my-0 tracking-[.6px]">
                    Dijital dünyada başarıya ulaşmanız için stratejik rehberlik
                    sunuyor, iş süreçlerinizi optimize etmek ve dijital dönüşüm
                    yolculuğunuzu hızlandırmak adına özelleştirilmiş danışmanlık
                    hizmetleri sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-center">
            <div
              ref={titleBottomTextRef}
              className="px-[15px] text-center w-full max-w-full mdx:flex-[0_0_auto] mdx:w-full md:flex-[0_0_auto] md:w-[83.33333333%]"
            >
              <div className="text-white text-20 tracking-[.7px]">
                {
                  "Zamanınızı ve çabanızı daha verimli kullanmak için çözüm arayışınızı bize bırakın."
                }
                <br />
                <Link
                  href={"#"}
                  className="border-b border-solid text-[--base-color]"
                >
                  Şimdi bizimle iletişime geçin, en etkili çözümleri sunalım.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[130px] bg-[--nero-gray] max-2xl:py-[120px] max-mdx:py-[95px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="mb-[7%] row max-md:mb-[50px]">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full lgx:flex-[0_0_auto] lgx:w-3/4 mdx:flex-[0_0_auto] mdx:w-full">
            <h2
              ref={longTextRef}
              className="font-medium tracking-[-2px] font-spaceGrotesk text-white mb-0 relative"
            >
              {longText.split("").map((item, index) => (
                <motion.span
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  initial={
                    shouldAnimate && {
                      opacity: 0,
                      top: 50,
                      filter: "blur(20px)",
                    }
                  }
                  animate={
                    shouldAnimate && {
                      opacity: longTextViewArea ? 1 : 0,
                      top: longTextViewArea ? 0 : 50,
                      filter: longTextViewArea ? "blur(0px)" : "blur(20px)",
                    }
                  }
                  key={index}
                  className="relative"
                >
                  {item}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>
        <div className="mb-[6%] row max-md:mb-[30px]">
          <div
            ref={titlesRef}
            className="px-[15px] flex-[0_0_auto] w-full max-w-full"
          >
            <motion.div
              initial={shouldAnimate && { translateY: 30, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: titlesViewArea ? 0 : 30,
                  opacity: titlesViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0 }}
              className="mx-0 py-[40px] border-[--dark-gray2] border-b border-t items-center relative flex flex-wrap"
            >
              <div className="px-0 text-left max-w-full md:text-center md:flex-[0_0_auto] md:w-[8.33333333%] max-md:mb-[20px] w-full">
                <span className="text-white text-[18px] font-spaceGrotesk">
                  01
                </span>
              </div>
              <div className="px-0 items-center flex max-w-full md:ml-[8.33333333%] md:flex-[0_0_auto] md:w-[41.66666667%] max-md:mb-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  fill="var(--base-color)"
                  viewBox="0 0 16 16"
                  className="mr-[20px] inline-block"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                  />
                  <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.52 6.52 0 0 0 1.814 9H2.5q.186 0 .358.043a5.52 5.52 0 0 1 3.185-3.185A1.5 1.5 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.52 6.52 0 0 1 2.72 3.5H13.5q-.185 0-.358.043a5.52 5.52 0 0 0-3.185-3.185" />
                </svg>
                <span className="font-medium text-white text-[1.875rem] leading-[2.8rem] font-spaceGrotesk">
                  Web Tasarımı ve Geliştirme
                </span>
              </div>
              <div className="px-0 max-w-full md:flex-[0_0_auto] md:w-[41.66666667%]">
                <p className="my-0 tracking-[.6px]">
                  Küçük ölçekli girişimlerden büyük çaplı projelere kadar, her
                  tür ihtiyaç için özel web çözümleri sunuyor ve gerçek dünyada
                  uygulanabilir, etkili web tasarımları geliştiriyoruz.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={shouldAnimate && { translateY: 30, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: titlesViewArea ? 0 : 30,
                  opacity: titlesViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-0 py-[40px] border-[--dark-gray2] border-b items-center relative flex flex-wrap"
            >
              <div className="px-0 text-left max-w-full md:text-center md:flex-[0_0_auto] md:w-[8.33333333%] max-md:mb-[20px] w-full">
                <span className="text-white text-[18px] font-spaceGrotesk">
                  02
                </span>
              </div>
              <div className="px-0 items-center flex max-w-full md:ml-[8.33333333%] md:flex-[0_0_auto] md:w-[41.66666667%] max-md:mb-[20px] flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="42"
                  height="42"
                  fill="var(--base-color)"
                  className="mr-[20px] inline-block"
                >
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                </svg>
                <span className="font-medium text-white text-[1.875rem] leading-[2.8rem] font-spaceGrotesk mr-[15px]">
                  Yazılım Geliştirme
                </span>
                <span className="font-bold px-[15px] rounded-full bg-[--yellow] text-[--dark-gray2] leading-[28px] text-[12px] uppercase max-mdx:my-[10px]">
                  Popular
                </span>
              </div>
              <div className="px-0 max-w-full md:flex-[0_0_auto] md:w-[41.66666667%]">
                <p className="my-0 tracking-[.6px]">
                  Her ölçekteki projeye özel, yüksek verimli ve ölçeklenebilir
                  yazılım çözümleri geliştirmek için çalışıyor, iş süreçlerini
                  dijital dünyada güçlendiren özelleştirilmiş yazılımlar
                  sunuyoruz.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={shouldAnimate && { translateY: 30, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: titlesViewArea ? 0 : 30,
                  opacity: titlesViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-0 py-[40px] border-[--dark-gray2] border-b items-center relative flex flex-wrap"
            >
              <div className="px-0 text-left max-w-full md:text-center md:flex-[0_0_auto] md:w-[8.33333333%] max-md:mb-[20px] w-full">
                <span className="text-white text-[18px] font-spaceGrotesk">
                  03
                </span>
              </div>
              <div className="px-0 items-center flex max-w-full md:ml-[8.33333333%] md:flex-[0_0_auto] md:w-[41.66666667%] max-md:mb-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="42"
                  height="42"
                  fill="var(--base-color)"
                  className="mr-[20px] inline-block"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                </svg>
                <span className="font-medium text-white text-[1.875rem] leading-[2.8rem] font-spaceGrotesk">
                  Mobil Uygulama Geliştirme
                </span>
              </div>
              <div className="px-0 max-w-full md:flex-[0_0_auto] md:w-[41.66666667%]">
                <p className="my-0 tracking-[.6px]">
                  Farklı platformlarda çalışabilen, kullanıcı dostu ve yüksek
                  performanslı mobil uygulamalar geliştirmek için çaba harcıyor,
                  her ihtiyaca yönelik yenilikçi mobil çözümler sunuyoruz.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={shouldAnimate && { translateY: 30, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: titlesViewArea ? 0 : 30,
                  opacity: titlesViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mx-0 py-[40px] border-[--dark-gray2] border-b items-center relative flex flex-wrap"
            >
              <div className="px-0 text-left max-w-full md:text-center md:flex-[0_0_auto] md:w-[8.33333333%] max-md:mb-[20px] w-full">
                <span className="text-white text-[18px] font-spaceGrotesk">
                  04
                </span>
              </div>
              <div className="px-0 items-center flex max-w-full md:ml-[8.33333333%] md:flex-[0_0_auto] md:w-[41.66666667%] max-md:mb-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  fill="var(--base-color)"
                  className="mr-[20px] inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                </svg>
                <span className="font-medium text-white text-[1.875rem] leading-[2.8rem] font-spaceGrotesk">
                  Danışmanlık Hizmetleri
                </span>
              </div>
              <div className="px-0 max-w-full md:flex-[0_0_auto] md:w-[41.66666667%]">
                <p className="my-0 tracking-[.6px]">
                  Dijital dünyada başarıya ulaşmanız için stratejik rehberlik
                  sunuyor, iş süreçlerinizi optimize etmek ve dijital dönüşüm
                  yolculuğunuzu hızlandırmak adına özelleştirilmiş danışmanlık
                  hizmetleri sağlıyoruz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="row justify-center">
          <div
            ref={titleBottomTextRef}
            className="px-[15px] text-center w-full max-w-full mdx:flex-[0_0_auto] mdx:w-full md:flex-[0_0_auto] md:w-[83.33333333%]"
          >
            <motion.div
              transition={{ duration: 0.6 }}
              initial={shouldAnimate && { translateY: 30, opacity: 1 }}
              animate={
                shouldAnimate && {
                  translateY: titleBottomTextViewArea ? 0 : 30,
                  opacity: titleBottomTextViewArea ? 1 : 0,
                }
              }
              className="text-white text-20 tracking-[.7px]"
            >
              {
                "Zamanınızı ve çabanızı daha verimli kullanmak için çözüm arayışınızı bize bırakın."
              }
              <br />
              <Link
                href={"#"}
                className="border-b border-solid text-[--base-color]"
              >
                Şimdi bizimle iletişime geçin, en etkili çözümleri sunalım.
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
