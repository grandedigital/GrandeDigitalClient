"use client";

import { useEffect, useRef, useState } from "react";
import { mapValue } from "@/utils/global";
import Link from "next/link";

export default function GalleryItem({ data }: { data: any }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const [ItemRects, setItemRects] = useState<DOMRect | null>(null);
  const galleryItemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: any) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    if (ItemRects) {
      setRotateX(
        mapValue(
          Math.abs(Math.floor(mouseY)),
          0,
          Math.abs(Math.floor(ItemRects?.height)),
          15,
          -15
        ) || 0
      );
      setTranslateY(
        mapValue(
          Math.abs(Math.floor(mouseY)),
          0,
          Math.abs(Math.floor(ItemRects?.height)),
          -3,
          3
        ) || 0
      );
      setTranslateX(
        mapValue(
          Math.abs(Math.floor(mouseX)),
          0,
          Math.abs(Math.floor(ItemRects?.width)),
          -3,
          3
        ) || 0
      );
      setRotateY(
        mapValue(
          Math.abs(Math.floor(mouseX)),
          0,
          Math.abs(Math.floor(ItemRects?.width)),
          -15,
          15
        ) || 0
      );
    }
  };

  const handleLeaveMouse = () => {
    setRotateX(0);
    setRotateY(0);
    setTranslateY(0);
    setTranslateX(0);
  };

  useEffect(() => {
    if (galleryItemRef.current) {
      setItemRects(galleryItemRef.current.getBoundingClientRect());
    }
  }, []);

  return (
    <div
      ref={galleryItemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeaveMouse}
      className="w-full relative ease-out duration-600"
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}%,${translateY}%,0)`,
      }}
    >
      <Link
        href={`/projelerimiz/${data?.slug}`}
        className="absolute left-0 top-0 w-full h-full py-[40px] z-[3]"
      >
        <div className="absolute w-full h-full left-0 top-0 py-[40px] opacity-100 items-center justify-end flex flex-col max-md:py-[30px]">
          <span className="mt-0 z-1 mr-[30px] ml-auto mb-auto opacity-0 group-hover:opacity-100 ease-[cubic-bezier(.37,0,.63,1)] duration-400 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              viewBox="0 0 16 16"
              className="translate-y-[30%] group-hover:translate-y-0 duration-400 transition-all ease-[cubic-bezier(.37,0,.63,1)]"
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </span>
          <div className="overflow-hidden text-[22px] text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)]">
            <span className="opacity-100 block translate-y-[-50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
              {data?.title}
            </span>
          </div>
          <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.37,.31,.2,.85)] leading-[28px] text-[15px] text-white opacity-0 group-hover:opacity-60">
            <span className="opacity-100 block translate-y-[50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
              {data?.subTitle}
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"></div>
      <img src={`/images/${data?.img}`} alt="" />
    </div>
  );
}
