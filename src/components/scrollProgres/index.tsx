"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { scrollToTop } from "@/utils/global";

export default function ScrollProgres() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercentage(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollClick: React.MouseEventHandler<HTMLDivElement> = () => {
    // Scroll işlemini başlat
    scrollToTop(1000);
  };

  return (
    <div
      onClick={scrollClick}
      className={`fixed right-5 z-111 top-1/2 transition-all duration-300 ease-linear translate-y-1/2 mix-blend-difference xxl:block hidden ${
        scrollPosition > 50 ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <Link
        href={"#"}
        onClick={(e) => e.preventDefault()}
        className="flex flex-col justify-center items-center"
      >
        <span className="rotate-180 [writingMode:vertical-lr] mb-[15px] text-white text-[11px] uppercase">
          Scroll
        </span>
        <span className="w-[2px] h-[60px] relative bg-[#ffffff26] text-inherit block">
          <span
            className="inline-block w-[2px] absolute top-0 left-0 bg-white"
            style={{ height: `${scrollPercentage}%` }}
          ></span>
        </span>
      </Link>
    </div>
  );
}
