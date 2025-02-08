"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { mapValue } from "@/utils/global";

export default function Section1() {
  const strongTextImgRef = useRef(null);
  const circleRef = useRef(null);
  const bottomPropRef = useRef(null);
  const onlyNumberAndPlusContainerRef = useRef<HTMLDivElement | null>(null);

  const [numberAndPlusBoundingClientRect, setNumberAndPlusBoundingClientRect] =
    useState({ width: 0, height: 0 });

  const [numberAndPlusTranslateXValue, setNumberAndPlusTranslateXValue] =
    useState(0);
  const [numberAndPlusTranslateYValue, setNumberAndPlusTranslateYValue] =
    useState(0);
  const [numberAndPlusRotateXValue, setNumberAndPlusRotateXValue] = useState(0);
  const [numberAndPlusRotateYValue, setNumberAndPlusRotateYValue] = useState(0);

  const [numberAndPlusAnimationCompleted, setNumberAndPlusAnimationCompleted] =
    useState(false);

  const [isAnimationsPassive, setIsAnimationsPassive] = useState(false);

  const strongTextImgViewArea = useInView(strongTextImgRef, {
    once: true,
    amount: 1,
  });

  const circleViewArea = useInView(circleRef, {
    once: true,
    amount: 0.2,
  });

  const bottomPropsViewArea = useInView(bottomPropRef, {
    once: true,
    amount: 0.2,
  });

  const handleMouseMove = (event: any) => {
    if (!numberAndPlusAnimationCompleted) {
      return;
    }
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    setNumberAndPlusTranslateXValue(
      mapValue(
        Math.abs(mouseX),
        0,
        numberAndPlusBoundingClientRect.width,
        25,
        -25
      )
    );
    setNumberAndPlusTranslateYValue(
      mapValue(
        Math.abs(mouseY),
        0,
        numberAndPlusBoundingClientRect.height,
        25,
        -25
      )
    );

    setNumberAndPlusRotateXValue(
      mapValue(
        Math.abs(mouseY),
        0,
        numberAndPlusBoundingClientRect.height,
        15,
        -15
      )
    );
    setNumberAndPlusRotateYValue(
      mapValue(
        Math.abs(mouseX),
        0,
        numberAndPlusBoundingClientRect.width,
        -15,
        15
      )
    );
  };

  const handleMouseLeave = () => {
    setNumberAndPlusTranslateXValue(0);
    setNumberAndPlusTranslateYValue(0);
    setNumberAndPlusRotateXValue(0);
    setNumberAndPlusRotateYValue(0);
  };

  const handleCompletedCircleAnimation = () => {
    if (!numberAndPlusAnimationCompleted) {
      setNumberAndPlusAnimationCompleted(true);
    }
  };

  useEffect(() => {
    setIsAnimationsPassive(window.innerWidth < 1217);

    if (onlyNumberAndPlusContainerRef.current) {
      setNumberAndPlusBoundingClientRect(
        onlyNumberAndPlusContainerRef.current.getBoundingClientRect()
      );
    }
  }, []);

  return (
    <section className="overflow-hidden max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row mb-[6%] items-center max-md:mb-[50px]">
          <div className="px-[15px] text-center max-w-full md:text-left lgx:flex-[0_0_auto] lgx:w-[41.66666667%] mdx:flex-[0_0_auto] mdx:w-[41.66666667%] max-mdx:mb-[50px] max-md:mb-[30px]">
            <h2 className="font-semibold tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-0">
              <span
                ref={strongTextImgRef}
                className="shadow-none inline-block relative pb-0 mb-0"
              >
                İstanbul
                <span className="h-[45px] bottom-[-10px] -z-1 float-left w-full absolute left-0">
                  <motion.img
                    initial={!isAnimationsPassive && { width: "0%" }}
                    animate={
                      !isAnimationsPassive && {
                        width: strongTextImgViewArea ? "100%" : "0%",
                      }
                    }
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="h-[45px] w-full absolute left-0 bottom-0 transition-none max-w-full"
                    src="/images/demo-digital-agency-highlight-separator.webp"
                    alt=""
                  />
                </span>
              </span>
              {
                " ve Fethiye ofislerimizle, yaratıcı ve güçlü çözümler sunuyoruz."
              }
            </h2>
          </div>
          <div
            ref={circleRef}
            className="px-[15px] max-w-full lgx:ml-[8.33333333%] lgx:flex-[0_0_auto] lgx:w-1/2 mdx:flex-[0_0_auto] mdx:w-[58.33333333%] w-full"
          >
            <div className="row items-center max-md:flex-col">
              <div
                ref={onlyNumberAndPlusContainerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="px-[15px] block text-center relative max-w-full mdx:text-center md:text-left lgx:flex-[0_0_auto] lgx:w-1/2 mdx:flex-[0_0_auto] mdx:w-1/2 md:flex-[0_0_auto] md:w-[41.66666667%] max-md:mb-[30px]"
              >
                <motion.span
                  initial={!isAnimationsPassive && { scale: 1.1, opacity: 0 }}
                  animate={
                    !isAnimationsPassive && {
                      scale: circleViewArea ? 1 : 1.1,
                      opacity: circleViewArea ? 1 : 0,
                      translateX: numberAndPlusAnimationCompleted
                        ? numberAndPlusTranslateXValue
                        : 0,
                      translateY: numberAndPlusAnimationCompleted
                        ? numberAndPlusTranslateYValue
                        : 0,
                      rotateX: numberAndPlusAnimationCompleted
                        ? numberAndPlusRotateXValue
                        : 0,
                      rotateY: numberAndPlusAnimationCompleted
                        ? numberAndPlusRotateYValue
                        : 0,
                    }
                  }
                  onAnimationComplete={() => {
                    circleViewArea && handleCompletedCircleAnimation();
                  }}
                  transition={{
                    duration: numberAndPlusAnimationCompleted ? 0.3 : 0.5,
                    delay: numberAndPlusAnimationCompleted ? 0 : 0.2,
                  }}
                  className="[background-image:linear-gradient(135deg,transparent_45%,#464646_45%,#464646_55%,transparent_0)] [background-size:_5px_5px] w-[250px] h-[250px] bg-[--dark-gray2] rounded-[50%] items-center justify-center flex"
                >
                  <span className="font-bold w-full tracking-[-4px] text-[6.875rem] leading-[6.875rem] font-spaceGrotesk text-white justify-center flex">
                    {"16 "}
                    <sub className="font-medium top-0 text-[2.5rem] leading-[2.5rem] relative align-top bottom-[-0.25em]">
                      +
                    </sub>
                  </span>
                </motion.span>
              </div>
              <div className="px-[15px] text-center max-w-full md:text-left md:flex-[0_0_auto] md:w-[58.33333333%] mdx:flex-[0_0_auto] mdx:w-1/2 lgx:flex-[0_0_auto] lgx:w-1/2">
                <motion.span
                  transition={{ duration: 0.8, delay: 0.2 }}
                  initial={
                    !isAnimationsPassive && { translateY: -15, opacity: 0 }
                  }
                  animate={
                    !isAnimationsPassive && {
                      translateY: circleViewArea ? 0 : -15,
                      opacity: circleViewArea ? 1 : 0,
                    }
                  }
                  className="font-bold mb-[5px] tracking-[0.5px] text-[--dark-gray2] text-[16px] uppercase block"
                >
                  16+ YILI AŞKIN TECRÜBE
                </motion.span>
                <motion.p
                  transition={{ duration: 0.8, delay: 0.4 }}
                  initial={
                    !isAnimationsPassive && { translateY: -15, opacity: 0 }
                  }
                  animate={
                    !isAnimationsPassive && {
                      translateY: circleViewArea ? 0 : -15,
                      opacity: circleViewArea ? 1 : 0,
                    }
                  }
                  className="mb-0 leading-[2rem] text-[18px] mt-0"
                >
                  Projelerimizde, her bir yazılım çözümünü işlevsellik ile
                  güçlendirirken, tasarımlarımızda estetiği ön planda tutarak,
                  kullanıcı dostu ve görsel olarak etkileyici dijital deneyimler
                  oluşturuyoruz.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div ref={bottomPropRef} className="row justify-center">
          <motion.div
            initial={
              !isAnimationsPassive && {
                translateY: 30,
                translateX: 30,
                opacity: 0,
              }
            }
            animate={
              !isAnimationsPassive && {
                translateY: bottomPropsViewArea ? 0 : 30,
                translateX: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pr-[5%] pl-[15px] flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[33.33333333%] max-mdx:mb-[30px]"
          >
            <div className="mb-[30px] w-full bg-[--extra-medium-gray] h-[1px] hidden mdx:block"></div>
            <div className="flex flex-row flex-wrap items-stretch justify-start text-left relative z-1">
              <div className="flex-1">
                <span className="w-[80%] text-[18px] block max-md:w-[90%]">
                  <span className="font-bold tracking-[-1px] text-[--dark-gray2]">
                    {"350+ "}
                  </span>
                  very satisfied clients around the worldwide.
                </span>
              </div>
              <div className="mt-[5px] mr-0 max-mdx:mt-0">
                <img
                  src="/images/emoji-smile.svg"
                  width={34}
                  height={34}
                  alt=""
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={
              !isAnimationsPassive && {
                translateY: 30,
                translateX: 30,
                opacity: 0,
              }
            }
            animate={
              !isAnimationsPassive && {
                translateY: bottomPropsViewArea ? 0 : 30,
                translateX: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pr-[5%] pl-[15px] flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[33.33333333%] max-mdx:mb-[30px]"
          >
            <div className="mb-[30px] w-full bg-[--extra-medium-gray] h-[1px] hidden mdx:block"></div>
            <div className="flex flex-row flex-wrap items-stretch justify-start text-left relative z-1">
              <div className="flex-1">
                <span className="w-[80%] text-[18px] block max-md:w-[90%]">
                  <span className="font-bold tracking-[-1px] text-[--dark-gray2]">
                    {"200+ "}
                  </span>
                  good award winning digital media agency.
                </span>
              </div>
              <div className="mt-[5px] mr-0 max-mdx:mt-0">
                <img
                  src="/images/megaphone.svg"
                  width={34}
                  height={34}
                  alt=""
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={
              !isAnimationsPassive && {
                translateY: 30,
                translateX: 30,
                opacity: 0,
              }
            }
            animate={
              !isAnimationsPassive && {
                translateY: bottomPropsViewArea ? 0 : 30,
                translateX: bottomPropsViewArea ? 0 : 30,
                opacity: bottomPropsViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pr-[5%] pl-[15px] flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[33.33333333%] max-mdx:mb-[30px]"
          >
            <div className="mb-[30px] w-full bg-[--extra-medium-gray] h-[1px] hidden mdx:block"></div>
            <div className="flex flex-row flex-wrap items-stretch justify-start text-left relative z-1">
              <div className="flex-1">
                <span className="w-[80%] text-[18px] block max-md:w-[90%]">
                  <span className="font-bold tracking-[-1px] text-[--dark-gray2]">
                    {"750+ "}
                  </span>
                  successfully project completed in one year.
                </span>
              </div>
              <div className="mt-[5px] mr-0 max-mdx:mt-0">
                <img
                  src="/images/briefcase.svg"
                  width={34}
                  height={34}
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
