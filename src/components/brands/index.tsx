"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useResponsiveAnimation } from "@/hooks/useResponsiveAnimation";

export default function Brands({ toPage = "homepage" }) {
  const brandsContainerRef = useRef(null);
  const shouldAnimate = useResponsiveAnimation(1217);

  const bransViewArea = useInView(brandsContainerRef, {
    once: true,
    amount: 1,
  });

  if (!shouldAnimate) {
    if (toPage == "homepage") {
      return (
        <section
          ref={brandsContainerRef}
          className="pb-0 pt-[110px] max-2xl:pt-[90px] max-mdx:pt-[75px] max-md:pt-[50px]"
        >
          <div className="custom-container">
            <div className="row justify-center brands-container">
              <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
                <Link href={"#"} className="">
                  <img
                    className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
                    src="/images/akaydinref.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
                <Link href={"#"} className="">
                  <img
                    className="max-w-[inherit] h-[40px] max-xsm:inline-flex"
                    src="/images/gdmenuref.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
                <Link href={"#"} className="">
                  <img
                    className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
                    src="/images/labirentreff.webp"
                    alt=""
                  />
                </Link>
              </div>
              <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-0 max-md:mb-[40px]">
                <Link href={"#"} className="">
                  <img
                    className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
                    src="/images/mororef.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[0px]">
                <Link href={"#"} className="">
                  <img
                    className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
                    src="/images/limoref.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      );
    } else if (toPage == "about") {
      return (
        <div
          ref={brandsContainerRef}
          className="row justify-center brands-container"
        >
          <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
            <Link href={"#"} className="">
              <img
                className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
                src="/images/akaydinref.png"
                alt=""
              />
            </Link>
          </div>
          <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
            <Link href={"#"} className="">
              <img
                className="max-w-[inherit] h-[40px] max-xsm:inline-flex"
                src="/images/gdmenuref.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
            <Link href={"#"} className="">
              <img
                className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
                src="/images/labirentreff.webp"
                alt=""
              />
            </Link>
          </div>
          <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-0 max-md:mb-[40px]">
            <Link href={"#"} className="">
              <img
                className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
                src="/images/mororef.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[0px]">
            <Link href={"#"} className="">
              <img
                className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
                src="/images/limoref.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      );
    }
  }

  if (toPage == "homepage") {
    return (
      <section
        ref={brandsContainerRef}
        className="pb-0 pt-[110px] max-2xl:pt-[90px] max-mdx:pt-[75px] max-md:pt-[50px]"
      >
        <div className="custom-container">
          <div className="row justify-center brands-container">
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
              <Link href={"#"} className="">
                <motion.img
                  initial={
                    shouldAnimate && {
                      translateY: -20,
                      scale: 1.1,
                      opacity: 0,
                    }
                  }
                  transition={{ duration: 0.5, delay: 0 }}
                  animate={
                    shouldAnimate && {
                      translateY: bransViewArea ? 0 : -20,
                      scale: bransViewArea ? 1 : 1.1,
                      opacity: bransViewArea ? 1 : 0,
                    }
                  }
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
                  src="/images/akaydinref.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
              <Link href={"#"} className="">
                <motion.img
                  initial={
                    shouldAnimate && {
                      translateY: -20,
                      scale: 1.1,
                      opacity: 0,
                    }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                  animate={
                    shouldAnimate && {
                      translateY: bransViewArea ? 0 : -20,
                      scale: bransViewArea ? 1 : 1.1,
                      opacity: bransViewArea ? 1 : 0,
                    }
                  }
                  className="max-w-[inherit] h-[40px] max-xsm:inline-flex"
                  src="/images/gdmenuref.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
              <Link href={"#"} className="">
                <motion.img
                  initial={
                    shouldAnimate && {
                      translateY: -20,
                      scale: 1.1,
                      opacity: 0,
                    }
                  }
                  transition={{ duration: 0.5, delay: 0.6 }}
                  animate={
                    shouldAnimate && {
                      translateY: bransViewArea ? 0 : -20,
                      scale: bransViewArea ? 1 : 1.1,
                      opacity: bransViewArea ? 1 : 0,
                    }
                  }
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
                  src="/images/labirentreff.webp"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-0 max-md:mb-[40px]">
              <Link href={"#"} className="">
                <motion.img
                  initial={
                    shouldAnimate && {
                      translateY: -20,
                      scale: 1.1,
                      opacity: 0,
                    }
                  }
                  transition={{ duration: 0.5, delay: 0.9 }}
                  animate={
                    shouldAnimate && {
                      translateY: bransViewArea ? 0 : -20,
                      scale: bransViewArea ? 1 : 1.1,
                      opacity: bransViewArea ? 1 : 0,
                    }
                  }
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
                  src="/images/mororef.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[0px]">
              <Link href={"#"} className="">
                <motion.img
                  initial={
                    shouldAnimate && {
                      translateY: -20,
                      scale: 1.1,
                      opacity: 0,
                    }
                  }
                  transition={{ duration: 0.5, delay: 1.2 }}
                  animate={
                    shouldAnimate && {
                      translateY: bransViewArea ? 0 : -20,
                      scale: bransViewArea ? 1 : 1.1,
                      opacity: bransViewArea ? 1 : 0,
                    }
                  }
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
                  src="/images/limoref.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (toPage == "about") {
    return (
      <div
        ref={brandsContainerRef}
        className="row justify-center brands-container"
      >
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
          <Link href={"#"} className="">
            <motion.img
              initial={
                shouldAnimate && {
                  translateY: -20,
                  scale: 1.1,
                  opacity: 0,
                }
              }
              transition={{ duration: 0.5, delay: 0 }}
              animate={
                shouldAnimate && {
                  translateY: bransViewArea ? 0 : -20,
                  scale: bransViewArea ? 1 : 1.1,
                  opacity: bransViewArea ? 1 : 0,
                }
              }
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
              src="/images/akaydinref.png"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
          <Link href={"#"} className="">
            <motion.img
              initial={
                shouldAnimate && {
                  translateY: -20,
                  scale: 1.1,
                  opacity: 0,
                }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              animate={
                shouldAnimate && {
                  translateY: bransViewArea ? 0 : -20,
                  scale: bransViewArea ? 1 : 1.1,
                  opacity: bransViewArea ? 1 : 0,
                }
              }
              className="max-w-[inherit] h-[40px] max-xsm:inline-flex"
              src="/images/gdmenuref.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
          <Link href={"#"} className="">
            <motion.img
              initial={
                shouldAnimate && {
                  translateY: -20,
                  scale: 1.1,
                  opacity: 0,
                }
              }
              transition={{ duration: 0.5, delay: 0.6 }}
              animate={
                shouldAnimate && {
                  translateY: bransViewArea ? 0 : -20,
                  scale: bransViewArea ? 1 : 1.1,
                  opacity: bransViewArea ? 1 : 0,
                }
              }
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
              src="/images/labirentreff.webp"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-0 max-md:mb-[40px]">
          <Link href={"#"} className="">
            <motion.img
              initial={
                shouldAnimate && {
                  translateY: -20,
                  scale: 1.1,
                  opacity: 0,
                }
              }
              transition={{ duration: 0.5, delay: 0.9 }}
              animate={
                shouldAnimate && {
                  translateY: bransViewArea ? 0 : -20,
                  scale: bransViewArea ? 1 : 1.1,
                  opacity: bransViewArea ? 1 : 0,
                }
              }
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex"
              src="/images/mororef.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[0px]">
          <Link href={"#"} className="">
            <motion.img
              initial={
                shouldAnimate && {
                  translateY: -20,
                  scale: 1.1,
                  opacity: 0,
                }
              }
              transition={{ duration: 0.5, delay: 1.2 }}
              animate={
                shouldAnimate && {
                  translateY: bransViewArea ? 0 : -20,
                  scale: bransViewArea ? 1 : 1.1,
                  opacity: bransViewArea ? 1 : 0,
                }
              }
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
              src="/images/limoref.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
    );
  }
}
