"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useResponsiveAnimation } from "@/hooks/useResponsiveAnimation";

export default function Section1({ text }: { text: String }) {
  const h2TextRef = useRef(null);
  const itemsRef = useRef(null);

  const shouldAnimate = useResponsiveAnimation(1217);

  const h2TextViewArea = useInView(h2TextRef, {
    once: true,
    amount: 0.2,
  });

  const itemsViewArea = useInView(itemsRef, {
    once: true,
    amount: 0.2,
  });

  if (!shouldAnimate) {
    return (
      <section className="max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
        <div className="custom-container">
          <div className="row mb-[6%] max-mdx:mb-[30px]">
            <div className="px-[15px] w-full flex-[0_0_auto] max-w-full xxl:w-[75%] lgx:w-[83.33333333%]">
              <h2
                ref={h2TextRef}
                className="font-semibold w-[95%] tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk text-center mb-0 mdx:text-left max-mdx:w-full"
              >
                {text}
              </h2>
            </div>
          </div>
          <div ref={itemsRef} className="row justify-center">
            <div className="px-[15px] w-full flex-[0_0_auto] max-w-full xsm:w-1/2 mdx:w-1/4 max-mdx:mb-[50px] max-md:mb-[30px]">
              <div className="feaure-box">
                <div>
                  <img
                    className="mb-[20px] max-w-full h-auto"
                    src="/images/location.webp"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                    Ofis
                  </span>
                  <p className="mb-0 w-[80%] mx-auto mt-0 max-xxl:w-full max-mdx:w-[75%]">
                    Taşdelen Mah. Çekmeköy / İstanbul
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[15px] w-full flex-[0_0_auto] max-w-full xsm:w-1/2 mdx:w-1/4 max-mdx:mb-[50px] max-md:mb-[30px]">
              <div className="feaure-box">
                <div>
                  <img
                    className="mb-[20px] max-w-full h-auto"
                    src="/images/sendMessage.webp"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                    Mesaj gönder
                  </span>
                  <div className="w-full block">
                    <Link
                      href={"mailto:info@grandedigital.com"}
                      className="transition-all duration-300 text-[--medium-gray] hover:text-[--dark-gray2]"
                    >
                      info@grandedigital.com
                    </Link>
                    <br />
                    {/* <Link
                      href={"mailto:hr@yourdomain.com"}
                      className="transition-all duration-300 text-[--medium-gray] hover:text-[--dark-gray2]"
                    >
                      hr@yourdomain.com
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[15px] w-full flex-[0_0_auto] max-w-full mdx:w-1/4 xsm:w-1/2 max-xsm:mb-[30px]">
              <div className="feaure-box">
                <div>
                  <img
                    className="mb-[20px] max-w-full h-auto"
                    src="/images/makeCall.webp"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                    Bizi Ara
                  </span>
                  <div className="w-full block">
                    <span className="block">
                      {"Phone: "}
                      <Link
                        href={"tel:05382403883"}
                        className="transition-all duration-300 text-[--medium-gray] hover:text-[--dark-gray2]"
                      >
                        05382403883
                      </Link>
                    </span>
                    <span className="block">Fax: 1-800-222-002</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[15px] w-full flex-[0_0_auto] max-w-full mdx:w-1/4 xsm:w-1/2">
              <div className="feaure-box">
                <div>
                  <img
                    className="mb-[20px] max-w-full h-auto"
                    src="/images/people.webp"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                    Bizimle Çalışın (Fikirlerin İçin)
                  </span>
                  <p className="mb-0 w-[80%] mx-auto mt-0 max-xxl:w-full max-mdx:w-[75%]">
                    Projeleriniz bir adım atın. Bizimle tanışın!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row mb-[6%] max-mdx:mb-[30px]">
          <div className="px-[15px] w-full flex-[0_0_auto] max-w-full xxl:w-[75%] lgx:w-[83.33333333%]">
            <motion.h2
              initial={shouldAnimate && { opacity: 0 }}
              animate={shouldAnimate && { opacity: h2TextViewArea ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              ref={h2TextRef}
              className="font-semibold w-[95%] tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk text-center mb-0 mdx:text-left max-mdx:w-full"
            >
              {text}
            </motion.h2>
          </div>
        </div>
        <div ref={itemsRef} className="row justify-center">
          <motion.div
            initial={shouldAnimate && { translateY: 30, opacity: 0 }}
            animate={
              shouldAnimate && {
                translateY: itemsViewArea ? 0 : 30,
                opacity: itemsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0 }}
            className="px-[15px] w-full flex-[0_0_auto] max-w-full xsm:w-1/2 mdx:w-1/4 max-mdx:mb-[50px] max-md:mb-[30px]"
          >
            <div className="feaure-box">
              <div>
                <img
                  className="mb-[20px] max-w-full h-auto"
                  src="/images/location.webp"
                  alt=""
                />
              </div>
              <div>
                <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                  Ofis
                </span>
                <p className="mb-0 w-[80%] mx-auto mt-0 max-xxl:w-full max-mdx:w-[75%]">
                  Taşdelen Mah. Çekmeköy / İstanbul
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={shouldAnimate && { translateY: 30, opacity: 0 }}
            animate={
              shouldAnimate && {
                translateY: itemsViewArea ? 0 : 30,
                opacity: itemsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-[15px] w-full flex-[0_0_auto] max-w-full xsm:w-1/2 mdx:w-1/4 max-mdx:mb-[50px] max-md:mb-[30px]"
          >
            <div className="feaure-box">
              <div>
                <img
                  className="mb-[20px] max-w-full h-auto"
                  src="/images/sendMessage.webp"
                  alt=""
                />
              </div>
              <div>
                <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                  Mesaj gönder
                </span>
                <div className="w-full block">
                  <Link
                    href={"mailto:info@grandedigital.com"}
                    className="transition-all duration-300 text-[--medium-gray] hover:text-[--dark-gray2]"
                  >
                    info@grandedigital.com
                  </Link>
                  <br />
                  {/* <Link
                    href={"mailto:hr@yourdomain.com"}
                    className="transition-all duration-300 text-[--medium-gray] hover:text-[--dark-gray2]"
                  >
                    hr@yourdomain.com
                  </Link> */}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={shouldAnimate && { translateY: 30, opacity: 0 }}
            animate={
              shouldAnimate && {
                translateY: itemsViewArea ? 0 : 30,
                opacity: itemsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.6 }}
            className="px-[15px] w-full flex-[0_0_auto] max-w-full mdx:w-1/4 xsm:w-1/2 max-xsm:mb-[30px]"
          >
            <div className="feaure-box">
              <div>
                <img
                  className="mb-[20px] max-w-full h-auto"
                  src="/images/makeCall.webp"
                  alt=""
                />
              </div>
              <div>
                <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                  Bizi Ara
                </span>
                <div className="w-full block">
                  <span className="block">
                    {"Phone: "}
                    <Link
                      href={"tel:05382403883"}
                      className="transition-all duration-300 text-[--medium-gray] hover:text-[--dark-gray2]"
                    >
                      538 240 38 83
                    </Link>
                  </span>
                  {/* <span className="block">Fax: 1-800-222-002</span> */}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={shouldAnimate && { translateY: 30, opacity: 0 }}
            animate={
              shouldAnimate && {
                translateY: itemsViewArea ? 0 : 30,
                opacity: itemsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.9 }}
            className="px-[15px] w-full flex-[0_0_auto] max-w-full mdx:w-1/4 xsm:w-1/2"
          >
            <div className="feaure-box">
              <div>
                <img
                  className="mb-[20px] max-w-full h-auto"
                  src="/images/people.webp"
                  alt=""
                />
              </div>
              <div>
                <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                  Bizimle Çalışın (Fikirlerin İçin)
                </span>
                <p className="mb-0 w-[80%] mx-auto mt-0 max-xxl:w-full max-mdx:w-[75%]">
                  Projeleriniz bir adım atın. Bizimle tanışın!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
