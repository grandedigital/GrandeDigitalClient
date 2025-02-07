"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Posts() {
  const [isAnimationsPassive, setIsAnimationsPassive] = useState(false);

  const titleAndLinkRef = useRef(null);
  const postsRef = useRef(null);

  const longTextViewArea = useInView(titleAndLinkRef, {
    once: true,
    amount: 0.2,
  });

  const postsViewArea = useInView(postsRef, {
    once: true,
    amount: 0.2,
  });

  useEffect(() => {
    setIsAnimationsPassive(window.innerWidth < 1217);
  }, []);

  return (
    <section className="pb-0 max-2xl:pt-[90px] max-mdx:pt-[75px] max-md:pt-[50px]">
      <div className="custom-container">
        <div ref={titleAndLinkRef} className="row mb-[4%]">
          <motion.div
            initial={!isAnimationsPassive && { translateY: 30, opacity: 0 }}
            animate={
              !isAnimationsPassive && {
                translateY: longTextViewArea ? 0 : 30,
                opacity: longTextViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0 }}
            className="px-[15px] text-center w-full max-w-full md:text-left md:flex-[0_0_auto] md:w-1/2 max-md:mb-[20px]"
          >
            <h2 className="font-semibold tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-0">
              Bloglarımız
            </h2>
          </motion.div>
          <motion.div
            initial={!isAnimationsPassive && { translateY: 30, opacity: 0 }}
            animate={
              !isAnimationsPassive && {
                translateY: longTextViewArea ? 0 : 30,
                opacity: longTextViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-[15px] text-center w-full max-w-full md:text-right md:flex-[0_0_auto] md:w-1/2"
          >
            <Link
              href={"#"}
              className="group border-b-0 p-0 normal-case relative border-0 tracking-[0] bg-transparent text-[--dark-gray2] rounded-none w-auto transition-all duration-300 ease-in-out font-medium inline-block text-18 leading-[--bs-btn-line-height] text-center align-middle cursor-pointer select-none"
            >
              <span className="inline-flex items-center">
                <span className="ml-[-13px] relative z-3 transition-transform duration-600 delay-100 ease-[cubic-bezier(.1,.75,.25,1)] group-hover:translate-x-[20px] group-hover:delay-200">
                  Read all posts
                </span>
                <span className="ml-[6px] relative post-arrow-icon delay-200 leading-[0] z-3 opacity-100 group-hover:translate-x-[20px] group-hover:opacity-0 group-hover:delay-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="m-0 leading-[0] relative inline-block"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </span>
                <span className="-order-2 opacity-0 ml-0 translate-x-[-10px] relative post-arrow-icon delay-0 leading-[0] z-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-350">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="m-0 leading-[0] relative inline-block"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </motion.div>
        </div>
        <div ref={postsRef} className="row">
          <div className="flex-[0_0_auto] w-full max-w-full flex flex-wrap md:p-0">
            <ul className="p-0 m-0 w-full flex flex-wrap">
              <li
                className="w-1/3 p-[10px] list-none max-mdx:w-1/2 max-md:p-[10px] max-md:w-1/2 max-xsm:w-full"
                style={{ perspective: "1200px" }}
              >
                <motion.div
                  initial={
                    !isAnimationsPassive && {
                      opacity: 0,
                      rotateX: 50,
                      scale: 1.1,
                    }
                  }
                  animate={
                    !isAnimationsPassive && {
                      opacity: postsViewArea ? 1 : 0,
                      rotateX: postsViewArea ? 0 : 50,
                      scale: postsViewArea ? 1 : 1.1,
                    }
                  }
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="rounded-none bg-[--base-color] h-full border-0 overflow-hidden flex min-w-0 flex-col relative text-[--bs-body-color]"
                >
                  <div className="text-inherit relative overflow-hidden p-[15%] z-1 flex-[1_1_auto] max-lgx:p-[10%] group">
                    <img
                      className="absolute left-0 top-0 object-cover w-full h-full opacity-0 invisible transition-all duration-300 ease-[cubic-bezier(.37,0,.63,1)] scale-110 -rotate-3 max-w-full group-hover:opacity-100 group-hover:visible group-hover:transition-all group-hover:duration-400 group-hover:ease-[cubic-bezier(.37,0,.63,1)] group-hover:scale-100 group-hover:rotate-0"
                      src="/images/demo-digital-agency-blog-01.jpg"
                      alt=""
                    />
                    <Link
                      href={"#"}
                      className="will-change-transform py-[4px] px-[12px] rounded-[2px] duration-300 inline-block text-12 leading-[20px] font-semibold mb-[70px] text-[--dark-gray2] bg-white uppercase ml-0"
                    >
                      Branding
                    </Link>
                    <Link
                      href={"#"}
                      className="will-change-transform font-medium mt-[60px] mb-[5px] transition-all duration-500 ease-[cubic-bezier(.5,1,.89,1)] text-[--dark-gray2] text-13 uppercase block group-hover:text-white"
                    >
                      Jonse robbert
                    </Link>
                    <Link
                      href={"#"}
                      className="will-change-transform font-medium w-[90%] transition-all duration-500 ease-[cubic-bezier(.5,1,.89,1)] tracking-[-0.5px] text-[--dark-gray2] text-22 mb-0 block max-lgx:w-full max-md:text-20 group-hover:text-white"
                    >
                      Design can speak the in tongue of art force of commerce.
                    </Link>
                  </div>
                </motion.div>
              </li>
              <li
                className="w-1/3 p-[10px] list-none max-mdx:w-1/2 max-md:p-[10px] max-md:w-1/2 max-xsm:w-full"
                style={{ perspective: "1200px" }}
              >
                <motion.div
                  initial={
                    !isAnimationsPassive && {
                      opacity: 0,
                      rotateX: 50,
                      scale: 1.1,
                    }
                  }
                  animate={
                    !isAnimationsPassive && {
                      opacity: postsViewArea ? 1 : 0,
                      rotateX: postsViewArea ? 0 : 50,
                      scale: postsViewArea ? 1 : 1.1,
                    }
                  }
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="rounded-none bg-[--base-color] h-full border-0 overflow-hidden flex min-w-0 flex-col relative text-[--bs-body-color]"
                >
                  <div className="text-inherit relative overflow-hidden p-[15%] z-1 flex-[1_1_auto] max-lgx:p-[10%] group">
                    <img
                      className="absolute left-0 top-0 object-cover w-full h-full opacity-0 invisible transition-all duration-300 ease-[cubic-bezier(.37,0,.63,1)] scale-110 -rotate-3 max-w-full group-hover:opacity-100 group-hover:visible group-hover:transition-all group-hover:duration-400 group-hover:ease-[cubic-bezier(.37,0,.63,1)] group-hover:scale-100 group-hover:rotate-0"
                      src="/images/demo-digital-agency-blog-02.jpg"
                      alt=""
                    />
                    <Link
                      href={"#"}
                      className="will-change-transform py-[4px] px-[12px] rounded-[2px] duration-300 inline-block text-12 leading-[20px] font-semibold mb-[70px] text-[--dark-gray2] bg-white uppercase ml-0"
                    >
                      Design
                    </Link>
                    <Link
                      href={"#"}
                      className="will-change-transform font-medium mt-[60px] mb-[5px] transition-all duration-500 ease-[cubic-bezier(.5,1,.89,1)] text-[--dark-gray2] text-13 uppercase block group-hover:text-white"
                    >
                      Den Viliamson
                    </Link>
                    <Link
                      href={"#"}
                      className="will-change-transform font-medium w-[90%] transition-all duration-500 ease-[cubic-bezier(.5,1,.89,1)] tracking-[-0.5px] text-[--dark-gray2] text-22 mb-0 block max-lgx:w-full max-md:text-20 group-hover:text-white"
                    >
                      Simplicity is process the obvious and adding meaningful.
                    </Link>
                  </div>
                </motion.div>
              </li>
              <li
                className="w-1/3 p-[10px] list-none max-mdx:w-1/2 max-md:p-[10px] max-md:w-1/2 max-xsm:w-full"
                style={{ perspective: "1200px" }}
              >
                <motion.div
                  initial={
                    !isAnimationsPassive && {
                      opacity: 0,
                      rotateX: 50,
                      scale: 1.1,
                    }
                  }
                  animate={
                    !isAnimationsPassive && {
                      opacity: postsViewArea ? 1 : 0,
                      rotateX: postsViewArea ? 0 : 50,
                      scale: postsViewArea ? 1 : 1.1,
                    }
                  }
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="rounded-none bg-[--base-color] h-full border-0 overflow-hidden flex min-w-0 flex-col relative text-[--bs-body-color]"
                >
                  <div className="text-inherit relative overflow-hidden p-[15%] z-1 flex-[1_1_auto] max-lgx:p-[10%] group">
                    <img
                      className="absolute left-0 top-0 object-cover w-full h-full opacity-0 invisible transition-all duration-300 ease-[cubic-bezier(.37,0,.63,1)] scale-110 -rotate-3 max-w-full group-hover:opacity-100 group-hover:visible group-hover:transition-all group-hover:duration-400 group-hover:ease-[cubic-bezier(.37,0,.63,1)] group-hover:scale-100 group-hover:rotate-0"
                      src="/images/demo-digital-agency-blog-03.jpg"
                      alt=""
                    />
                    <Link
                      href={"#"}
                      className="will-change-transform py-[4px] px-[12px] rounded-[2px] duration-300 inline-block text-12 leading-[20px] font-semibold mb-[70px] text-[--dark-gray2] bg-white uppercase ml-0"
                    >
                      Digital
                    </Link>
                    <Link
                      href={"#"}
                      className="will-change-transform font-medium mt-[60px] mb-[5px] transition-all duration-500 ease-[cubic-bezier(.5,1,.89,1)] text-[--dark-gray2] text-13 uppercase block group-hover:text-white"
                    >
                      Rosald smith
                    </Link>
                    <Link
                      href={"#"}
                      className="will-change-transform font-medium w-[90%] transition-all duration-500 ease-[cubic-bezier(.5,1,.89,1)] tracking-[-0.5px] text-[--dark-gray2] text-22 mb-0 block max-lgx:w-full max-md:text-20 group-hover:text-white"
                    >
                      Good design obvious, great design is more transparent.
                    </Link>
                  </div>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
