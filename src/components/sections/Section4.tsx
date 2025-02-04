"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Section4({
  longText = "Forward thinking team of designers, copywriters and developers.",
}) {
  const [isAnimationsPassive, setIsAnimationsPassive] = useState(
    window.innerWidth < 1217
  );

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
                    !isAnimationsPassive && {
                      opacity: 0,
                      top: 50,
                      filter: "blur(20px)",
                    }
                  }
                  animate={
                    !isAnimationsPassive && {
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
        <div ref={bottomPropsRef} className="mx-[-15px] flex flex-wrap">
          <motion.div
            initial={!isAnimationsPassive && { translateY: 30, opacity: 0 }}
            animate={
              !isAnimationsPassive && {
                translateY: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0 }}
            className="px-[15px] w-1/2 flex-[0_0_auto] max-w-full mdx:w-1/4 md:w-1/3"
          >
            <Link href={"#"}>
              <img
                className="max-w-full h-auto"
                src="/images/demo-digital-agency-envato.svg"
                alt=""
              />
            </Link>
            <div className="font-medium mt-[30px] pt-[15px] border-[--dark-gray2] text-14 text-white uppercase border-t border-solid">
              3x site of the day
            </div>
          </motion.div>
          <motion.div
            initial={!isAnimationsPassive && { translateY: 30, opacity: 0 }}
            animate={
              !isAnimationsPassive && {
                translateY: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-[15px] w-1/2 flex-[0_0_auto] max-w-full mdx:w-1/4 md:w-1/3"
          >
            <Link href={"#"}>
              <img
                className="max-w-full h-auto"
                src="/images/demo-digital-agency-awwards.svg"
                alt=""
              />
            </Link>
            <div className="font-medium mt-[30px] pt-[15px] border-[--dark-gray2] text-14 text-white uppercase border-t border-solid">
              2x developer award
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
