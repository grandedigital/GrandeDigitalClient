"use client";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { FaRegComments } from "react-icons/fa";

export default function Section2() {
  const [isAnimationsPassive, setIsAnimationsPassive] = useState(
    window.innerWidth < 1217
  );

  const spinnerRef = useRef(null);
  const bottomTextRef = useRef(null);
  const bottomPropsContainerRef = useRef(null);

  const spinnerViewArea = useInView(spinnerRef, {
    once: true,
    amount: 0.2,
  });

  const bottomTextViewArea = useInView(bottomTextRef, {
    once: true,
    amount: 0.1,
  });

  const bottomPropsContainerViewArea = useInView(bottomPropsContainerRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section className="bg-[url('/images/demo-digital-agency-02.jpg')] bg-center relative overflow-hidden bg-fixed bg-cover pb-0 max-2xl:pt-[90px] max-lgx:[background-attachment:inherit] max-mdx:pt-[75px] max-md:pt-[50px]">
      <div className="bg-[--dark-gray2] opacity-30 absolute h-full w-full top-0 left-0"></div>
      <div className="custom-container relative">
        <div className="row mb-[6%] justify-center">
          <div className="px-[15px] text-center w-full max-w-full xxl:flex-[0_0_auto] xxl:w-[58.33333333%] lgx:w-[83.33333333%] lgx:flex-[0_0_auto]">
            <Link ref={spinnerRef} href={"#"}>
              <motion.div
                initial={
                  !isAnimationsPassive && {
                    translateY: -15,
                    scale: 0.8,
                    opacity: 0,
                  }
                }
                animate={
                  !isAnimationsPassive && {
                    translateY: spinnerViewArea ? 0 : -15,
                    scale: spinnerViewArea ? 1 : 0.8,
                    opacity: spinnerViewArea ? 1 : 0,
                  }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="z-9 mb-[40px] relative max-md:mb-[30px] [text-align:-webkit-center]"
              >
                <img
                  className="[-webkit-animation:rotation_8s_infinite_linear] max-w-full h-auto"
                  src="/images/demo-digital-agency-about-play-text.webp"
                  alt=""
                />
                <div className="-z-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    className="max-w-full h-auto"
                    src="/images/demo-digital-agency-about-play.webp"
                    alt=""
                  />
                </div>
              </motion.div>
            </Link>
            <motion.h2
              ref={bottomTextRef}
              initial={!isAnimationsPassive && { translateY: 15, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateY: bottomTextViewArea ? 0 : 15,
                  opacity: bottomTextViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="tracking-[-2px] [text-shadow:_0_0_60px_rgba(0,0,0,.9)] font-spaceGrotesk text-white max-md:mb-[25px]"
            >
              Forward thinking team of designers, copywriters and developers.{" "}
            </motion.h2>
          </div>
        </div>
      </div>
      <div className="py-[40px] bg-[rgba(35,35,35,.4)] [backdrop-filter:_blur(5px)]">
        <div ref={bottomPropsContainerRef} className="custom-container">
          <div className="row items-center justify-center">
            <motion.div
              initial={!isAnimationsPassive && { translateX: 15, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateX: bottomPropsContainerViewArea ? 0 : 15,
                  opacity: bottomPropsContainerViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0 }}
              className="px-[15px] text-center w-full flex-[0_0_auto] max-w-full mdx:w-1/4 xsm:w-1/2 max-mdx:mb-[30px]"
            >
              <div className="flex-row flex-wrap items-center justify-start text-left relative z-1 inline-flex align-middle">
                <div className="mr-[15px]">
                  <img
                    width={34}
                    height={34}
                    src="/images/archery.png"
                    className="flex"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <span className="text-20 font-spaceGrotesk text-white max-lgx:text-18">
                    Trusted company
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={!isAnimationsPassive && { translateX: 15, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateX: bottomPropsContainerViewArea ? 0 : 15,
                  opacity: bottomPropsContainerViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="px-[15px] text-center w-full flex-[0_0_auto] max-w-full mdx:w-1/4 xsm:w-1/2 max-mdx:mb-[30px]"
            >
              <div className="flex-row flex-wrap items-center justify-start text-left relative z-1 inline-flex align-middle">
                <div className="mr-[15px]">
                  <img
                    width={34}
                    height={34}
                    src="/images/moustache-smiley.png"
                    className="flex"
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <span className="text-20 font-spaceGrotesk text-white max-lgx:text-18">
                    Award winning
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={!isAnimationsPassive && { translateX: 15, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateX: bottomPropsContainerViewArea ? 0 : 15,
                  opacity: bottomPropsContainerViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              className="px-[15px] text-center w-full flex-[0_0_auto] max-w-full mdx:w-1/4 xsm:w-1/2 max-xsm:mb-[30px]"
            >
              <div className="flex-row flex-wrap items-center justify-start text-left relative z-1 inline-flex align-middle">
                <div className="mr-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    fill="#e8e8e8"
                    className="flex"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-20 font-spaceGrotesk text-white max-lgx:text-18">
                    Professional work
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={!isAnimationsPassive && { translateX: 15, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateX: bottomPropsContainerViewArea ? 0 : 15,
                  opacity: bottomPropsContainerViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.9 }}
              className="px-[15px] text-center w-full flex-[0_0_auto] max-w-full mdx:w-1/4 xsm:w-1/2"
            >
              <div className="flex-row flex-wrap items-center justify-start text-left relative z-1 inline-flex align-middle">
                <div className="mr-[15px]">
                  <FaRegComments className="flex" size={34} color="#e8e8e8" />
                </div>
                <div className="flex-1">
                  <span className="text-20 font-spaceGrotesk text-white max-lgx:text-18">
                    Help any time
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
