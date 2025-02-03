"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

export default function Brands({ toPage = "homepage" }) {
  const brandsContainerRef = useRef(null);
  const [isAnimationsPassive, setIsAnimationsPassive] = useState(
    window.innerWidth < 1217
  );

  const bransViewArea = useInView(brandsContainerRef, {
    once: true,
    amount: 1,
  });
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
                    !isAnimationsPassive && {
                      translateY: -20,
                      scale: 1.1,
                      opacity: 0,
                    }
                  }
                  transition={{ duration: 0.5, delay: 0 }}
                  animate={
                    !isAnimationsPassive && {
                      translateY: bransViewArea ? 0 : -20,
                      scale: bransViewArea ? 1 : 1.1,
                      opacity: bransViewArea ? 1 : 0,
                    }
                  }
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
                  src="/images/logo-walmart-dark-gray.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
              <Link href={"#"} className="">
                <motion.img
                  initial={
                    !isAnimationsPassive && {
                      translateY: -20,
                      scale: 1.1,
                      opacity: 0,
                    }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                  animate={
                    !isAnimationsPassive && {
                      translateY: bransViewArea ? 0 : -20,
                      scale: bransViewArea ? 1 : 1.1,
                      opacity: bransViewArea ? 1 : 0,
                    }
                  }
                  className="max-w-[inherit] h-[40px] max-xsm:inline-flex w-full"
                  src="/images/logo-invision-dark-gray.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
              <Link href={"#"} className="">
                <motion.img
                  initial={
                    !isAnimationsPassive && {
                      translateY: -20,
                      scale: 1.1,
                      opacity: 0,
                    }
                  }
                  transition={{ duration: 0.5, delay: 0.6 }}
                  animate={
                    !isAnimationsPassive && {
                      translateY: bransViewArea ? 0 : -20,
                      scale: bransViewArea ? 1 : 1.1,
                      opacity: bransViewArea ? 1 : 0,
                    }
                  }
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
                  src="/images/logo-netflix-dark-gray.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-0 max-md:mb-[40px]">
              <Link href={"#"} className="">
                <motion.img
                  initial={
                    !isAnimationsPassive && {
                      translateY: -20,
                      scale: 1.1,
                      opacity: 0,
                    }
                  }
                  transition={{ duration: 0.5, delay: 0.9 }}
                  animate={
                    !isAnimationsPassive && {
                      translateY: bransViewArea ? 0 : -20,
                      scale: bransViewArea ? 1 : 1.1,
                      opacity: bransViewArea ? 1 : 0,
                    }
                  }
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
                  src="/images/logo-logitech-dark-gray.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[0px]">
              <Link href={"#"} className="">
                <motion.img
                  initial={
                    !isAnimationsPassive && {
                      translateY: -20,
                      scale: 1.1,
                      opacity: 0,
                    }
                  }
                  transition={{ duration: 0.5, delay: 1.2 }}
                  animate={
                    !isAnimationsPassive && {
                      translateY: bransViewArea ? 0 : -20,
                      scale: bransViewArea ? 1 : 1.1,
                      opacity: bransViewArea ? 1 : 0,
                    }
                  }
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
                  src="/images/logo-amazon-dark-gray.svg"
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
      <div className="row justify-center">
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
          <Link href={"#"} className="">
            <img
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
              src="/images/logo-walmart-dark-gray.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
          <Link href={"#"} className="">
            <img
              className="max-w-[inherit] h-[40px] max-xsm:inline-flex w-full"
              src="/images/logo-invision-dark-gray.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
          <Link href={"#"} className="">
            <img
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
              src="/images/logo-netflix-dark-gray.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-0 max-md:mb-[40px]">
          <Link href={"#"} className="">
            <img
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
              src="/images/logo-logitech-dark-gray.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[0px]">
          <Link href={"#"} className="">
            <img
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
              src="/images/logo-amazon-dark-gray.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
    );
  }
}
