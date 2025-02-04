"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function OurTeam() {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef(null);

  const [sidePhotosScale, setSidePhotesScale] = useState(1);
  const [centerPhotoScale, setCenterPhotoScale] = useState(1);
  const [sidePhotosTranslateY, setSidePhotosTranslateY] = useState(-30);

  //normalize fonksiyonu
  function mapValue(value, min, max, rangeMin, rangeMax) {
    if (value < min || value > max) {
      throw new Error("Değer belirtilen min-max aralığında olmalıdır.");
    }

    return rangeMin + ((value - min) / (max - min)) * (rangeMax - rangeMin);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const elementPos = elementRef.current.getBoundingClientRect();
      //animasyonu başla ve hesaplayıp güncelle
      if (
        elementPos.top - window.innerHeight < 0 &&
        elementPos.top > -elementPos.height
      ) {
        setCenterPhotoScale(
          mapValue(
            window.innerHeight - elementPos.top,
            0,
            window.innerHeight + elementPos.height,
            1,
            1.2
          )
        );
        setSidePhotosTranslateY(
          mapValue(
            window.innerHeight - elementPos.top,
            0,
            window.innerHeight + elementPos.height,
            -30,
            30
          )
        );
        setSidePhotesScale(
          mapValue(
            window.innerHeight - elementPos.top,
            0,
            window.innerHeight + elementPos.height,
            1,
            0.7
          )
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="pb-0 max-2xl:pt-[90px] mdx:pt-[75px] max-md:pt-[50px]">
      <div className="custom-container">
        <div ref={elementRef} className="row">
          <div
            className="transform px-[15px] w-full flex-[0_0_auto] max-w-full mdx:w-1/3 max-mdx:mb-[30px] xsm:w-1/2 group transition-all ease-out duration-1500"
            style={{
              transform: `translateY(${sidePhotosTranslateY}px) scale(${sidePhotosScale})`,
            }}
          >
            <figure className="group-hover:translate-y-[-8px] [transform:translate3d(0,0,0)] transition-all duration-500 ease-[cubic-bezier(.2,0,.3,1)] mb-0 relative overflow-hidden">
              <img
                className="transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)] max-w-full h-auto"
                src="/images/team-58.jpg"
                alt=""
              />
              <figcaption className="group-hover:opacity-100 absolute opacity-0 bottom-0 transition-all duration-500 p-[13%] w-full items-end h-full flex max-lgx:p-[8%] max-mdx:p-[13%] max-md:p-[9%] bg-[linear-gradient(to_top,rgba(32,35,41,.8)_0,transparent_100%)]">
                <div className="w-full transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]">
                  <span className="group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-[15px] transition-all duration-500 ease-[cubic-bezier(.2,0,.3,1)] font-medium text-[19px] text-white block">
                    Jessica dover
                  </span>
                  <span className="opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(.2,0,.3,1)] leading-[26px] text-16 text-white block">
                    Designer
                  </span>
                </div>
                <div className="transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)] shrink flex flex-col">
                  <Link
                    href={"#"}
                    className="m-0 bg-[--base-color] opacity-0 group-hover:opacity-100 rounded-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(.2,0,.3,1)] [transform:scale(1)] w-[55px] h-[55px] text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="currentColor"
                      className="transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg>
                  </Link>
                </div>
              </figcaption>
            </figure>
          </div>
          <div
            className="transform translate-y-0 px-[15px] w-full flex-[0_0_auto] max-w-full mdx:w-1/3 max-mdx:mb-[30px] xsm:w-1/2 mt-[2%] max-mdx:mt-0 group transition-all ease-out duration-1500"
            style={{ transform: `scale(${centerPhotoScale})` }}
          >
            <figure className="group-hover:translate-y-[-8px] [transform:translate3d(0,0,0)] transition-all duration-500 ease-[cubic-bezier(.2,0,.3,1)] mb-0 relative overflow-hidden">
              <img
                className="transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)] max-w-full h-auto"
                src="/images/team-57.jpg"
                alt=""
              />
              <figcaption className="group-hover:opacity-100 absolute opacity-0 bottom-0 transition-all duration-500 p-[13%] w-full items-end h-full flex max-lgx:p-[8%] max-mdx:p-[13%] max-md:p-[9%] bg-[linear-gradient(to_top,rgba(32,35,41,.8)_0,transparent_100%)]">
                <div className="w-full transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]">
                  <span className="group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-[15px] transition-all duration-500 ease-[cubic-bezier(.2,0,.3,1)] font-medium text-[19px] text-white block">
                    Jeremy dupont
                  </span>
                  <span className="opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(.2,0,.3,1)] leading-[26px] text-16 text-white block">
                    Director
                  </span>
                </div>
                <div className="transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)] shrink flex flex-col">
                  <Link
                    href={"#"}
                    className="m-0 bg-[--base-color] opacity-0 group-hover:opacity-100 rounded-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(.2,0,.3,1)] [transform:scale(1)] w-[55px] h-[55px] text-black"
                  >
                    <FaLinkedinIn
                      size={18}
                      className="transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"
                    />
                  </Link>
                </div>
              </figcaption>
            </figure>
          </div>
          <div
            className="transform px-[15px] w-full flex-[0_0_auto] max-w-full mdx:w-1/3 max-mdx:mb-[30px] xsm:w-1/2 group transition-all ease-out duration-1500"
            style={{
              transform: `translateY(${sidePhotosTranslateY}px) scale(${sidePhotosScale})`,
            }}
          >
            <figure className="group-hover:translate-y-[-8px] [transform:translate3d(0,0,0)] transition-all duration-500 ease-[cubic-bezier(.2,0,.3,1)] mb-0 relative overflow-hidden">
              <img
                className="transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)] max-w-full h-auto"
                src="/images/team-59.jpg"
                alt=""
              />
              <figcaption className="group-hover:opacity-100 absolute opacity-0 bottom-0 transition-all duration-500 p-[13%] w-full items-end h-full flex max-lgx:p-[8%] max-mdx:p-[13%] max-md:p-[9%] bg-[linear-gradient(to_top,rgba(32,35,41,.8)_0,transparent_100%)]">
                <div className="w-full transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]">
                  <span className="group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-[15px] transition-all duration-500 ease-[cubic-bezier(.2,0,.3,1)] font-medium text-[19px] text-white block">
                    Matthew taylor
                  </span>
                  <span className="opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(.2,0,.3,1)] leading-[26px] text-16 text-white block">
                    Manager
                  </span>
                </div>
                <div className="transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)] shrink flex flex-col">
                  <Link
                    href={"#"}
                    className="m-0 bg-[--base-color] opacity-0 group-hover:opacity-100 rounded-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(.2,0,.3,1)] [transform:scale(1)] w-[55px] h-[55px] text-black"
                  >
                    <FaFacebookF
                      size={18}
                      className="transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"
                    />
                  </Link>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
