"use client";

import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import "swiper/css";
import "swiper/css/bundle";
import { useEffect, useRef, useState } from "react";

export default function Hero({ verticalText = "HER ADIMDA KALİTE" }) {
  const [isAnimationsPassive, setIsAnimationsPassive] = useState(
    window.innerWidth < 1217
  );

  const area1Ref = useRef(null);
  const area2Ref = useRef(null);
  const area3Ref = useRef(null);
  const verticalTextRef = useRef(null);
  const sliderMiniIconRef = useRef(null);
  const isInViewArea1 = useInView(area1Ref, { once: true, amount: 1 });
  const isInViewArea2 = useInView(area2Ref, { once: true, amount: 1 });
  const isInViewArea3 = useInView(area3Ref, { once: true, amount: 1 });
  const isInViewArea4 = useInView(verticalTextRef, { once: true, amount: 0.4 });
  const isInViewArea5 = useInView(sliderMiniIconRef, { once: true, amount: 1 });

  const [area1AnimationComplated, setArea1AnimationCompleted] = useState(false);
  const [sliderMiniAnimationComplated, SetSliderMiniAnimationComplated] =
    useState(false);

  return (
    <section className="mt-[inherit] h-[919px] max-mdx:mt-[83px] max-mdx:h-[836px] max-md:h-auto p-0 relative overflow-hidden">
      <div className="p-0 h-full relative w-full mx-auto">
        <div className="mx-0 h-full flex-wrap flex">
          <div className="bg-sliding-line p-[10%] bg-[--base-color] order-2 md:order-1 justify-center flex-col relative flex md:flex-[0_0_auto] md:w-[50%] max-md:w-[100%] max-w-[100%] max-xxl:p-[6%] max-mdx:p-[5%] max-md:px-[30px] max-md:py-[50px]">
            <div className="right-[3px] pb-[50px] w-[75px] flex h-full items-end justify-center absolute max-md:pb-[30px] max-md:w-[60px]">
              <div
                ref={verticalTextRef}
                className="opacity-100 transition-none rotate-180 writing font-bold tracking-[1px] text-[--dark-gray2] text-[16px] uppercase relative"
                style={{ writingMode: "vertical-lr" }}
              >
                {verticalText.split("").map((item, index) => (
                  <motion.span
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    initial={
                      !isAnimationsPassive && {
                        translateY: 10,
                        opacity: 0,
                        filter: "blur(5px)",
                        top: "10px",
                        fontSize: "30px",
                      }
                    }
                    animate={
                      !isAnimationsPassive && {
                        translateY: isInViewArea4 ? 0 : 10,
                        opacity: isInViewArea4 ? 1 : 0,
                        filter: isInViewArea4 ? "blur(0px)" : "blur(5px)",
                        top: isInViewArea4 ? 0 : "10px",
                        fontSize: isInViewArea4 ? "16px" : "30px",
                      }
                    }
                    className="relative"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="bottom-0 right-[80px] h-[120px] w-[2px] bg-[--dark-gray2] absolute max-md:right-[60px]"></div>
            <motion.div
              ref={area1Ref}
              transition={{ duration: 0.6 }}
              initial={!isAnimationsPassive && { translateX: 80, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateX: isInViewArea1 ? 0 : 80,
                  opacity: isInViewArea1 ? 1 : 0,
                }
              }
              onAnimationComplete={() => {
                isInViewArea1 && setArea1AnimationCompleted(true);
              }}
              className="font-semibold mb-[50px] tracking-[-8px] text-[--dark-gray2] leading-[5.938rem] text-[8.75rem] font-spaceGrotesk max-2xl:text-[8.125rem] max-lgx:leading-[4.75rem] max-lgx:text-[6rem] max-md:leading-[3.75rem] max-md:text-[5rem] max-md:mb-[30px] max-md:tracking-[-2px]"
            >
              <div className="z-9 relative inline-block">
                <div className="shadow-none inline-block relative pb-5 mb-0">
                  Dijitali &nbsp;
                  <span className="h-full -z-1 float-left w-full absolute left-0 bottom-0">
                    <motion.img
                      initial={!isAnimationsPassive && { width: "0%" }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      animate={
                        !isAnimationsPassive && {
                          width: area1AnimationComplated ? "100%" : "0%",
                        }
                      }
                      src="/images/demo-digital-agency-highlight-separator.webp"
                      className="h-[100px] w-auto absolute left-0 bottom-0 transition-none"
                      alt=""
                    />
                  </span>
                </div>
                hisset
              </div>
            </motion.div>
            <motion.div
              ref={area2Ref}
              transition={{ duration: 0.6 }}
              initial={!isAnimationsPassive && { translateX: 110, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateX: isInViewArea2 ? 0 : 110,
                  opacity: isInViewArea2 ? 1 : 0,
                }
              }
              className="mb-5 w-[70%] text-[--dark-gray2] text-[20px] block max-2xl:w-full max-lgx:w-full max-md:text-[18px] max-md:w-[90%]"
            >
              <span className="opacity-80 inline-block text-[--dark-gray2] text-[20px] max-md:text-[18px] tracking-[0.7px]">
              Sıradan olana veda et, dijital dünyada iz bırak.
              </span>
            </motion.div>
            <motion.div
              ref={area3Ref}
              transition={{ duration: 0.6 }}
              initial={!isAnimationsPassive && { translateX: 140, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateX: isInViewArea3 ? 0 : 140,
                  opacity: isInViewArea3 ? 1 : 0,
                }
              }
            >
              <div className="flex flex-row flex-wrap items-center justify-start text-left relative z-1">
                <div className="flex justify-center items-center relative overflow-hidden duration-300 mr-[15px] h-[55px] w-[55px] bg-[--dark-gray2] rounded-full">
                  <GoArrowRight size={20} color="var(--base-color)" />
                </div>
                <div className="flex-1">
                  <Link
                    href={"#"}
                    className="font-semibold tracking-[-0.5px] text-[--dark-gray2] text-[20px] font-spaceGrotesk inline-block"
                  >
                    Keşfet
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="order-2 max-md:order-1 md:flex-[0_0_auto] flex-[0_0_auto] md:w-[50%] w-full px-0 relative max-w-[100%] mt-0">
            <div className="z-9 left-0 bottom-0 p-[65px] w-[360px] bg-white absolute hidden md:block max-mdx:p-[40px]">
              <div className="right-[30px] top-[30px] absolute">
                <FiArrowUpRight size={24} color="var(--dark-gray2)" />
              </div>
              <div
                ref={sliderMiniIconRef}
                className="relative w-[60%] overflow-hidden"
              >
                <motion.img
                  initial={!isAnimationsPassive && { opacity: 0 }}
                  animate={
                    !isAnimationsPassive && { opacity: isInViewArea5 ? 1 : 0 }
                  }
                  transition={{ duration: 1, delay: 0.5 }}
                  src="/images/demo-digital-agency-01.webp"
                  alt=""
                />
                {!isAnimationsPassive && (
                  <motion.div
                    initial={!isAnimationsPassive && { translateX: "-100%" }}
                    animate={
                      !isAnimationsPassive && {
                        translateX: isInViewArea5 ? "100%" : "-100%",
                      }
                    }
                    onAnimationComplete={() =>
                      isInViewArea5 && SetSliderMiniAnimationComplated(true)
                    }
                    transition={{ duration: 1, ease: [0.21, 0.43, 1, 0.41] }}
                    className="h-full bg-[rgb(246,214,63)] w-[150%] absolute left-0 top-0"
                  ></motion.div>
                )}
              </div>
              <div className="mt-[60px] max-lgx:rotate-0">
                <h4 className="font-semibold bg-cover bg-center relative bg-no-repeat overflow-hidden image-mask tracking-[-2px] text-[--dark-gray2] leading-[2.5rem] font-spaceGrotesk mb-0 text-[2.375rem] bg-[url('/images/demo-digital-agency-text-img.jpg')]">
                Dijitalleşen dünyada neredesiniz?
                </h4>
              </div>
            </div>
            <Swiper
              autoplay={{
                delay: 2500, // 2.5 saniye sonra otomatik geçiş
                disableOnInteraction: false, // Kullanıcı etkileşiminden sonra da devam etmesini sağlar
              }}
              className="h-full max-md:h-[450px]"
              onSwiper={(swiper) => console.log(swiper)}
              modules={[EffectFade, Autoplay]}
              effect="fade"
              speed={1000}
              loop={true}
            >
              <SwiperSlide>
                <div className="bg-[url('/images/demo-digital-agency-slider-01.jpg')] w-full h-full bg-cover max-md:bg-center swiper-slide-bg"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[url('/images/demo-digital-agency-slider-02.jpg')] w-full h-full bg-cover max-md:bg-center swiper-slide-bg"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[url('/images/demo-digital-agency-slider-03.jpg')] w-full h-full bg-cover max-md:bg-center swiper-slide-bg"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[url('/images/demo-digital-agency-slider-04.jpg')] w-full h-full bg-cover max-md:bg-center swiper-slide-bg"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
