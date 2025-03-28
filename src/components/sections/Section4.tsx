"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useResponsiveAnimation } from "@/hooks/useResponsiveAnimation";

export default function Section4({
  longText = "Son teknoloji yazılım dilleri, veritabanı yapıları ve sunucularla güçlü dijital çözümler sunuyoruz.",
}) {
  const shouldAnimate = useResponsiveAnimation(1217);

  const longTextRef = useRef(null);
  const bottomPropsRef = useRef(null);

  const longTextViewArea = useInView(longTextRef, {
    once: true,
    amount: 0.2,
  });

  const bottomPropsViewArea = useInView(bottomPropsRef, {
    once: true,
    amount: 0.2,
  });

  if (!shouldAnimate) {
    return (
      <section className="py-[130px] bg-[url('/images/demo-digital-agency-bg-01.jpg')] relative overflow-hidden bg-fixed bg-cover max-2xl:py-[120px] max-lgx:bg-inherit max-lgx:bg-center max-mdx:py-[95px] max-md:py-[50px]">
        <div className="custom-container">
          <div className="row mb-[15%]">
            <div className="px-[15px] flex-[0_0_auto] w-full max-w-full xxl:w-[58.33333333%] lgx:w-[66.66666667%]">
              <h2
                ref={longTextRef}
                className="font-medium w-[95%] tracking-[-2px] font-spaceGrotesk text-white mb-[30px] max-mdx:w-full max-md:mb-[25px]"
              >
                <span>{longText}</span>
              </h2>
            </div>
          </div>
          <div ref={bottomPropsRef} className="mx-[-15px] flex flex-wrap gap-y-7">
            <div className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-w-[12.5%] md:w-[12.5%]">
              <Link href={"#"}>
                <img
                  className="max-w-full h-auto w-[100px]"
                  src="/images/html.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]">
              <Link href={"#"}>
                <img
                  className="max-w-full h-auto w-[100px]"
                  src="/images/css.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]">
              <Link href={"#"}>
                <img
                  className="max-w-full h-auto w-[100px]"
                  src="/images/js.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]">
              <Link href={"#"}>
                <img
                  className="max-w-full h-auto w-[100px]"
                  src="/images/react.webp"
                  alt=""
                />
              </Link>
              {/* <div className="font-medium mt-[30px] pt-[15px] border-[--dark-gray2] text-14 text-white uppercase border-t border-solid">
                2x developer award
              </div> */}
            </div>
            <div className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]">
              <Link href={"#"}>
                <img
                  className="max-w-full h-auto w-[100px]"
                  src="/images/csharp.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]">
              <Link href={"#"}>
                <img
                  className="max-w-full h-auto w-[100px]"
                  src="/images/nodejs.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[130px] bg-[url('/images/demo-digital-agency-bg-01.jpg')] relative overflow-hidden bg-fixed bg-cover max-2xl:py-[120px] max-lgx:bg-inherit max-lgx:bg-center max-mdx:py-[95px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row mb-[15%]">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full xxl:w-[58.33333333%] lgx:w-[66.66666667%]">
            <h2
              ref={longTextRef}
              className="font-medium w-[95%] tracking-[-2px] font-spaceGrotesk text-white mb-[30px] max-mdx:w-full max-md:mb-[25px]"
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
        <div ref={bottomPropsRef} className="mx-[-15px] flex flex-wrap gap-y-7">
        <motion.div
            initial={shouldAnimate && { translateY: 30, opacity: 0 }}
            animate={
              shouldAnimate && {
                translateY: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]"
          >
            <Link href={"#"}>
              <img
                className="max-w-full h-auto w-[100px]"
                src="/images/html.png"
                alt=""
              />
            </Link>
          </motion.div>
          <motion.div
            initial={shouldAnimate && { translateY: 30, opacity: 0 }}
            animate={
              shouldAnimate && {
                translateY: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]"
          >
            <Link href={"#"}>
              <img
                className="max-w-full h-[100px] w-[100px]"
                src="/images/css.svg"
                alt=""
              />
            </Link>
          </motion.div>
          <motion.div
            initial={shouldAnimate && { translateY: 30, opacity: 0 }}
            animate={
              shouldAnimate && {
                translateY: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0 }}
            className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]"
          >
            <Link href={"#"}>
              <img
                className="max-w-full h-auto w-[100px]"
                src="/images/js.png"
                alt=""
              />
            </Link>
          </motion.div>
          <motion.div
            initial={shouldAnimate && { translateY: 30, opacity: 0 }}
            animate={
              shouldAnimate && {
                translateY: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]"
          >
            <Link href={"#"}>
              <img
                className="max-w-full h-auto w-[100px]"
                src="/images/react.webp"
                alt=""
              />
            </Link>
            {/* <div className="font-medium mt-[30px] pt-[15px] border-[--dark-gray2] text-14 text-white uppercase border-t border-solid">
              2x developer award
            </div> */}
          </motion.div>
          <motion.div
            initial={shouldAnimate && { translateY: 30, opacity: 0 }}
            animate={
              shouldAnimate && {
                translateY: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]"
          >
            <Link href={"#"}>
              <img
                className="max-w-full h-auto w-[100px]"
                src="/images/csharp.png"
                alt=""
              />
            </Link>
          </motion.div>
          <motion.div
            initial={shouldAnimate && { translateY: 30, opacity: 0 }}
            animate={
              shouldAnimate && {
                translateY: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-[15px] md:w-[12.5%] flex-[0_0_auto] max-w-full mdx:w-[12.5%] md:w-[12.5%]"
          >
            <Link href={"#"}>
              <img
                className="max-w-full h-auto w-[100px]"
                src="/images/nodejs.png"
                alt=""
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
