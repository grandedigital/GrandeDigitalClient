"use client";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function Section3() {
  const [isAnimationsPassive, setIsAnimationsPassive] = useState(false);

  const stickyAreaRef = useRef(null);
  const statsAreaRef = useRef(null);

  const stickyAreViewArea = useInView(stickyAreaRef, {
    once: true,
    amount: 0.2,
  });

  const statsAreaViewArea = useInView(statsAreaRef, {
    once: true,
    amount: 0.2,
  });

  useEffect(() => {
    setIsAnimationsPassive(window.innerWidth < 1217);
  }, []);

  return (
    <section className="max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row mb-[3%] max-md:mb-0">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full xxl:w-3/4 lgx:w-[83.33333333%]">
            <h2 className="font-semibold w-[95%] tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-[30px] max-mdx:w-full max-md:mb-[25px]">
              {
                "Sezgi ve strateji, geleneksel medya alanındaki çalışmalarımıza entegre ettiğimiz kapsamlı araştırma metodolojisiyle uyumlu bir şekilde "
              }
              <span className="shadow-none inline-block relative pb-0 mb-0">
                bütünleşir.
                <span className="h-[45px] bottom-[-10px] -z-1 float-left w-full absolute left-0">
                  <img
                    src="/images/demo-digital-agency-highlight-separator.webp"
                    className="h-[45px] w-full absolute left-0 bottom-0 transition-none max-w-full"
                    alt=""
                  />
                </span>
              </span>
            </h2>
          </div>
        </div>
        <div className="row mb-[3%] max-mdx:mb-0">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full mdx:w-1/3 md:w-[66.66666667%] max-mdx:mb-[50px]">
            <motion.div
              initial={!isAnimationsPassive && { translateY: 30, opacity: 0 }}
              animate={
                !isAnimationsPassive && {
                  translateY: stickyAreViewArea ? 0 : 30,
                  opacity: stickyAreViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0 }}
              ref={stickyAreaRef}
              className="top-[120px] sticky"
            >
              <p className="mb-[40px] w-3/4 mt-0 max-lgx:w-full">
                {
                  "En yüksek memnuniyet düzeyini sağlamak amacıyla, insan empatisi ile "
                }
                <span className="font-semibold border-b border-solid text-[--dark-gray2] border-[--dark-gray2]">
                  yapay zeka
                </span>
                {" verilerini stratejik bir şekilde birleştiriyoruz."}
              </p>
              <Link
                href={"#"}
                className="bg-[--dark-gray2] text-white text-[14px] py-[18px] px-[34px] border-2 border-solid border-transparent rounded-none uppercase tracking-[.5px] w-auto font-spaceGrotesk transition-all duration-300 ease-in-out [box-shadow:0_5px_20px_rgba(0,0,0,.1)] font-medium inline-block max-md:text-[13px] max-md:py-[16px] max-md:px-[36px] hover:translate-y-[-3px]"
              >
                {"HEMEN BAŞLA"}
                <HiOutlineMail size={18} className="ml-[6px] inline-block" />
              </Link>
            </motion.div>
          </div>
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full mdx:w-[66.66666667%] md:w-full">
            <div ref={statsAreaRef} className="mx-0 flex flex-wrap">
              <motion.div
                initial={!isAnimationsPassive && { opacity: 0 }}
                animate={
                  !isAnimationsPassive && { opacity: statsAreaViewArea ? 1 : 0 }
                }
                transition={{ duration: 0.6 }}
                className="pl-[60px] pb-[30px] pr-[60px] pt-[40px] border-[--bs-border-color] border-l border-solid border-b flex-[0_0_auto] w-full max-w-full md:w-1/2 max-lgx:pl-[40px] max-lgx:pr-[40px] max-lgx:pt-[30px] max-md:border-r"
              >
                <p className="font-medium mb-[30%] w-[85%] text-[--dark-gray2] text-[19px] mt-0 max-md:mb-[15%]">
                  Users on marketplaces we've created in 2023.
                </p>
                <h2 className="font-bold mt-[20%] tracking-[-2px] text-[--dark-gray2] font-spaceGrotesk inline-flex mb-[30px] max-md:mb-0">
                  <sup className="top-0 relative text-[.75em] leading-[0] align-baseline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="28"
                      fill="var(--dark-gray2)"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                      />
                    </svg>
                  </sup>
                  <span className="w-full h-auto">8500+</span>
                </h2>
              </motion.div>
              <motion.div
                initial={!isAnimationsPassive && { opacity: 0 }}
                animate={
                  !isAnimationsPassive && { opacity: statsAreaViewArea ? 1 : 0 }
                }
                transition={{ duration: 0.6 }}
                className="pl-[60px] pb-[30px] pr-[60px] pt-[40px] border-[--bs-border-color] border-l border-solid border-b border-r flex-[0_0_auto] w-full max-w-full md:w-1/2 max-lgx:pl-[40px] max-lgx:pr-[40px] max-lgx:pt-[30px] max-md:border-r"
              >
                <p className="font-medium mb-[30%] w-[85%] text-[--dark-gray2] text-[19px] mt-0 max-md:mb-[15%]">
                  Successfully finished projects with creativity.
                </p>
                <h2 className="font-bold mt-[20%] tracking-[-2px] text-[--dark-gray2] font-spaceGrotesk inline-flex mb-[30px] max-md:mb-0">
                  <sup className="top-0 relative text-[.75em] leading-[0] align-baseline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="28"
                      fill="var(--dark-gray2)"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                      />
                    </svg>
                  </sup>
                  <span className="w-full h-auto">660+</span>
                </h2>
              </motion.div>
              <motion.div
                initial={!isAnimationsPassive && { opacity: 0 }}
                animate={
                  !isAnimationsPassive && { opacity: statsAreaViewArea ? 1 : 0 }
                }
                transition={{ duration: 0.6 }}
                className="pl-[60px] pb-[30px] pr-[60px] pt-[40px] border-[--bs-border-color] border-l border-solid flex-[0_0_auto] w-full max-w-full md:w-1/2 max-lgx:pl-[40px] max-lgx:pr-[40px] max-lgx:pt-[30px] max-md:border-r"
              >
                <p className="font-medium mb-[30%] w-[85%] text-[--dark-gray2] text-[19px] mt-0 max-md:mb-[15%]">
                  Monthly visitors on our e-Commerce platform.
                </p>
                <h2 className="font-bold mt-[20%] tracking-[-2px] text-[--dark-gray2] font-spaceGrotesk inline-flex mb-[30px] max-md:mb-0">
                  <sup className="top-0 relative text-[.75em] leading-[0] align-baseline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="28"
                      fill="var(--dark-gray2)"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                      />
                    </svg>
                  </sup>
                  <span className="w-full h-auto">6834+</span>
                </h2>
              </motion.div>
              <motion.div
                initial={!isAnimationsPassive && { opacity: 0 }}
                animate={
                  !isAnimationsPassive && { opacity: statsAreaViewArea ? 1 : 0 }
                }
                transition={{ duration: 0.6 }}
                className="pl-[60px] pb-[30px] pr-[60px] pt-[40px] border-[--bs-border-color] border-l border-r border-solid flex-[0_0_auto] w-full max-w-full md:w-1/2 max-lgx:pl-[40px] max-lgx:pr-[40px] max-lgx:pt-[30px] max-md:border-r"
              >
                <p className="font-medium mb-[30%] w-[85%] text-[--dark-gray2] text-[19px] mt-0 max-md:mb-[15%]">
                  Onboarding conversions growth increased.
                </p>
                <h2 className="font-bold mt-[20%] tracking-[-2px] text-[--dark-gray2] font-spaceGrotesk inline-flex mb-[30px] max-md:mb-0">
                  <sup className="top-0 relative text-[.75em] leading-[0] align-baseline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="28"
                      fill="var(--dark-gray2)"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                      />
                    </svg>
                  </sup>
                  <span className="w-full h-auto">300%</span>
                </h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
