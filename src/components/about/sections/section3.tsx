"use client";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

export default function Section3() {
  const [isAnimationsPassive, setIsAnimationsPassive] = useState(
    window.innerWidth < 1217
  );

  const areaRef = useRef(null);

  const areaViewArea = useInView(areaRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section className="pb-0 max-2xl:pt-[90px] max-mdx:pt-[75px] max-md:pt-[70px]">
      <div className="custom-container">
        <div ref={areaRef} className="row">
          <div className="px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[41.66666667%] max-mdx:mb-[10px]">
            <motion.h2
              initial={!isAnimationsPassive && { translateY: 15, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateY: areaViewArea ? 0 : 15,
                  opacity: areaViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0 }}
              className="font-semibold tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-[30px] max-md:mb-[25px]"
            >
              {"We want to bring and business the "}
              <span className="shadow-none inline-block transition-shadow duration-500 ease-[cubic-bezier(.7,0,.3,1)] relative pb-0 mb-0">
                {"digital"}
                <span className="h-[45px] bottom-[-10px] -z-1 float-left w-full absolute left-0">
                  <img
                    src="/images/demo-digital-agency-highlight-separator.webp"
                    className="h-[45px] w-full absolute left-0 bottom-0 transition-none max-w-full"
                    alt=""
                  />
                </span>
              </span>
              {" world."}
            </motion.h2>
          </div>
          <div className="transition-none px-[15px] w-full max-w-full mdx:w-[58.33333333%] mdx:flex-[0_0_auto]">
            <motion.div
              initial={!isAnimationsPassive && { translateY: 15, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateY: areaViewArea ? 0 : 15,
                  opacity: areaViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0 }}
              className="row"
            >
              <div className="px-[15px] w-full max-w-full md:w-[41.66666667%] md:flex-[0_0_auto]">
                <div className="font-semibold w-[90%] text-[--dark-gray2] text-[19px] max-xxl:w-full max-md:mb-[10px]">
                  Successfully finished projects with creativity.
                </div>
              </div>
              <div className="px-[15px] w-full max-w-full md:w-[58.33333333%] md:flex-[0_0_auto]">
                <p className="mb-0 mt-0">
                  We value each and every human life placed our hands constantly
                  work towards meeting the expectations of our customers.
                </p>
              </div>
            </motion.div>
            <div className="my-[40px] border-[--extra-medium-gray] h-[1px] border-b max-md:my-[30px]"></div>
            <motion.div
              initial={!isAnimationsPassive && { translateY: 15, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateY: areaViewArea ? 0 : 15,
                  opacity: areaViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="row"
            >
              <div className="px-[15px] w-full max-w-full md:w-[41.66666667%] md:flex-[0_0_auto]">
                <div className="font-semibold w-[90%] text-[--dark-gray2] text-[19px] max-xxl:w-full max-md:mb-[10px]">
                  Work together for better branding solutions.
                </div>
              </div>
              <div className="px-[15px] w-full max-w-full md:w-[58.33333333%] md:flex-[0_0_auto]">
                <p className="mb-0 mt-0">
                  We value each and every human life placed our hands constantly
                  work towards meeting the expectations of our customers.
                </p>
              </div>
            </motion.div>
            <div className="my-[40px] border-[--extra-medium-gray] h-[1px] border-b max-md:my-[30px]"></div>
            <motion.div
              initial={!isAnimationsPassive && { translateY: 15, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateY: areaViewArea ? 0 : 15,
                  opacity: areaViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              className="row"
            >
              <div className="px-[15px] w-full max-w-full md:w-[41.66666667%] md:flex-[0_0_auto]">
                <div className="font-semibold w-[90%] text-[--dark-gray2] text-[19px] max-xxl:w-full max-md:mb-[10px]">
                  Committed to deliver unique digital media.
                </div>
              </div>
              <div className="px-[15px] w-full max-w-full md:w-[58.33333333%] md:flex-[0_0_auto]">
                <p className="mb-0 mt-0">
                  We value each and every human life placed our hands constantly
                  work towards meeting the expectations of our customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
