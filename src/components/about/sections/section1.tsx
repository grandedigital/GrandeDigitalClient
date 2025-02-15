"use client";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Brands from "@/components/brands";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneCall } from "react-icons/pi";
import { useResponsiveAnimation } from "@/hooks/useResponsiveAnimation";

export default function Section1() {
  const shouldAnimate = useResponsiveAnimation(1217);

  const contentRef = useRef(null);

  const contentViewArea = useInView(contentRef, {
    once: true,
    amount: 0.1,
  });

  if (!shouldAnimate) {
    return (
      <section className="max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
        <div className="custom-container">
          <div className="row mb-[8%] items-center">
            <div className="px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-1/2 max-mdx:mb-[50px] max-md:mb-[30px]">
              <figure className="m-0 relative overflow-hidden">
                <img
                  className="w-full max-w-full h-auto"
                  src="/images/demo-digital-agency-01.jpg"
                  alt=""
                />
                <figcaption className="left-0 bottom-0 px-[15px] py-[35px] bg-white text-center absolute">
                  <span className="font-bold mb-[5px] tracking-[-2px] text-[--dark-gray2] leading-[5.313rem] text-[5.625rem] font-spaceGrotesk relative block">
                    16
                    <sub className="top-[-40px] text-[--dark-gray2] leading-[2.5rem] text-[2.5rem] relative bottom-[-.25em]">
                      +
                    </sub>
                  </span>
                  <span className="font-semibold w-[200px] text-[--dark-gray2] leading-[20px] text-14 uppercase text-center mx-auto block">
                    YILI AŞKIN TECRÜBE
                  </span>
                </figcaption>
              </figure>
            </div>
            <div
              ref={contentRef}
              className="px-[15px] text-center w-full max-w-full md:text-left lgx:ml-[8.33333333%] lgx:w-[41.66666667%] lgx:flex-[0_0_auto] mdx:w-1/2"
            >
              <h2 className="font-semibold tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-[30px] max-md:mb-[25px]">
                Grande Digital
              </h2>
              <p className="w-[85%] mb-[25px] mt-0 max-md:w-full">
                Firmamız, 2012 yılından bu yana web tasarım ve sürdürülebilir
                yazılım anlayışıyla faaliyet göstermekte olup, güncel
                teknolojileri yakından takip eder ve projelerinizin tüm yaşam
                döngüsünü titizlikle yönetir.
              </p>
              <p className="w-[85%] mb-[25px] mt-0 max-md:w-full">
                Grande Digital ile sahip olacağınız SEO altyapısı güçlü ve
                kaliteli web sitesi tasarımıyla imaj ve prestijinizi
                güçlendirin!
              </p>
              <div className="mt-[15px] w-full inline-block max-md:mt-0">
                <Link
                  href={"#"}
                  className="bg-[--dark-gray2] text-white text-14 py-[18px] px-[34px] border-2 border-transparent rounded-none uppercase tracking-[.5px] w-auto font-spaceGrotesk transition-all duration-300 ease-in-out [box-shadow:_0_5px_20px_rgba(0,0,0,.1);] font-medium mr-[20px] inline-block align-middle leading-[--bs-btn-line-height] text-center cursor-pointer select-none max-md:text-13 max-md:py-[16px] max-md:px-[36px] max-md:mr-0 max-md:mb-[30px] hover:[transform:translate3d(0,-2px,0)]"
                >
                  Şimdi Başla..
                  {/* <HiOutlineMail
                    size={16}
                    className="relative ml-[6px] inline-block"
                  /> */}
                </Link>
                <Link
                  href={"tel:+905382403883"}
                  className="font-semibold text-[--dark-gray2] text-18 block align-middle md:inline-block"
                >
                  <PiPhoneCall size={24} className="mr-[10px] inline-block" />
                  {"+90 538 240 38 83"}
                </Link>
              </div>
            </div>
          </div>
          <Brands toPage="about" />
        </div>
      </section>
    );
  }

  return (
    <section className="max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row mb-[8%] items-center">
          <div className="px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-1/2 max-mdx:mb-[50px] max-md:mb-[30px]">
            <figure className="m-0 relative overflow-hidden">
              <img
                className="w-full max-w-full h-auto"
                src="/images/demo-digital-agency-01.jpg"
                alt=""
              />
              <figcaption className="left-0 bottom-0 px-[15px] py-[35px] bg-white text-center absolute">
                <span className="font-bold mb-[5px] tracking-[-2px] text-[--dark-gray2] leading-[5.313rem] text-[5.625rem] font-spaceGrotesk relative block">
                  16
                  <sub className="top-[-40px] text-[--dark-gray2] leading-[2.5rem] text-[2.5rem] relative bottom-[-.25em]">
                    +
                  </sub>
                </span>
                <span className="font-semibold w-[200px] text-[--dark-gray2] leading-[20px] text-14 uppercase text-center mx-auto block">
                  YILI AŞKIN TECRÜBE
                </span>
              </figcaption>
            </figure>
          </div>
          <div
            ref={contentRef}
            className="px-[15px] text-center w-full max-w-full md:text-left lgx:ml-[8.33333333%] lgx:w-[41.66666667%] lgx:flex-[0_0_auto] mdx:w-1/2"
          >
            <motion.h2
              initial={shouldAnimate && { translateY: 30, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: contentViewArea ? 0 : 30,
                  opacity: contentViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0 }}
              className="font-semibold tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-[30px] max-md:mb-[25px]"
            >
              Grande Digital
            </motion.h2>
            <motion.p
              initial={shouldAnimate && { translateY: 30, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: contentViewArea ? 0 : 30,
                  opacity: contentViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-[85%] mb-[25px] mt-0 max-md:w-full"
            >
              Firmamız, 2012 yılından bu yana web tasarım ve sürdürülebilir
              yazılım anlayışıyla faaliyet göstermekte olup, güncel
              teknolojileri yakından takip eder ve projelerinizin tüm yaşam
              döngüsünü titizlikle yönetir.
            </motion.p>
            <motion.p
              initial={shouldAnimate && { translateY: 30, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: contentViewArea ? 0 : 30,
                  opacity: contentViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-[85%] mb-[25px] mt-0 max-md:w-full"
            >
              Grande Digital ile sahip olacağınız SEO altyapısı güçlü ve
              kaliteli web sitesi tasarımıyla imaj ve prestijinizi güçlendirin!
            </motion.p>
            <motion.div
              initial={shouldAnimate && { translateY: 30, opacity: 0 }}
              animate={
                shouldAnimate && {
                  translateY: contentViewArea ? 0 : 30,
                  opacity: contentViewArea ? 1 : 0,
                }
              }
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-[15px] w-full inline-block max-md:mt-0"
            >
              <Link
                href={"#"}
                className="bg-[--dark-gray2] text-white text-14 py-[18px] px-[34px] border-2 border-transparent rounded-none uppercase tracking-[.5px] w-auto font-spaceGrotesk transition-all duration-300 ease-in-out [box-shadow:_0_5px_20px_rgba(0,0,0,.1);] font-medium mr-[20px] inline-block align-middle leading-[--bs-btn-line-height] text-center cursor-pointer select-none max-md:text-13 max-md:py-[16px] max-md:px-[36px] max-md:mr-0 max-md:mb-[30px] hover:[transform:translate3d(0,-2px,0)]"
              >
                Şimdi Başla..
                {/* <HiOutlineMail
                  size={16}
                  className="relative ml-[6px] inline-block"
                /> */}
              </Link>
              <Link
                href={"tel:+905382403883"}
                className="font-semibold text-[--dark-gray2] text-18 block align-middle md:inline-block"
              >
                <PiPhoneCall size={24} className="mr-[10px] inline-block" />
                {"+90 538 240 38 83"}
              </Link>
            </motion.div>
          </div>
        </div>
        <Brands toPage="about" />
      </div>
    </section>
  );
}
