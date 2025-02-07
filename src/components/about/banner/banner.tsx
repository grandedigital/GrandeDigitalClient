"use client";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function Banner({
  title,
  title2,
  text,
}: {
  title: string;
  title2?: string;
  text: string;
}) {
  const [isAnimationsPassive, setIsAnimationsPassive] = useState(false);

  const titleAndTextRef = useRef(null);

  const titleAndTextViewArea = useInView(titleAndTextRef, {
    once: true,
    amount: 0.2,
  });

  useEffect(() => {
    setIsAnimationsPassive(window.innerWidth < 1217);
  }, []);

  return (
    <section className="[background-image:_linear-gradient(135deg,transparent_45%,#d1b9b2_45%,#d1b9b2_55%,transparent_0)] [background-size:_5px_5px] bg-[--base-color] max-2xl:py-[90px] mt-[83px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container relative">
        <div
          ref={titleAndTextRef}
          className="row h-[180px] justify-center mdx:items-end"
        >
          <motion.div
            initial={!isAnimationsPassive && { translateY: 30, opacity: 0 }}
            animate={
              !isAnimationsPassive && {
                translateY: titleAndTextViewArea ? 0 : 30,
                opacity: titleAndTextViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0 }}
            className="z-9 px-[15px] relative w-full max-w-full mdx:flex-[0_0_auto] mdx:w-1/2 max-mdx:mb-[30px] max-md:mb-[20px]"
          >
            <h1 className="text-[4.8rem] leading-[4.8rem] font-semibold tracking-[-4px] text-[--dark-gray2] font-spaceGrotesk mb-0 mt-0">
              <span className="shadow-none inline-block transition-shadow duration-500 ease-[cubic-bezier(.7,0,.3,1)] relative pb-0 mb-0">
                {title}
                <span className="h-[45px] bottom-[-10px] -z-1 float-left w-full absolute left-0">
                  <img
                    src="/images/demo-digital-agency-highlight-separator.webp"
                    className="h-[45px] w-full absolute left-0 bottom-0 transition-none max-w-full"
                    alt=""
                  />
                </span>
              </span>
              {title2 && title2}
            </h1>
          </motion.div>
          <motion.div
            initial={!isAnimationsPassive && { translateY: 30, opacity: 0 }}
            animate={
              !isAnimationsPassive && {
                translateY: titleAndTextViewArea ? 0 : 30,
                opacity: titleAndTextViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-1/2"
          >
            <p className="opacity-70 w-[90%] text-[--dark-gray2] leading-[2rem] text-20 mb-0 mt-0 max-lgx:w-full max-mdx:w-[80%]">
              {text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
