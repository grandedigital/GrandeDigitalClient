"use client";

import { useMenu } from "@/context/MenuContext";
import Link from "next/link";
import menu from "../../data/menu.json";

export default function MobilMenu() {
  const { isMenuOpen, toggleMenu, activeMenu } = useMenu();
  return (
    <div
      className={`bg-[#2d2c2b] hidden max-mdx:overflow-hidden max-mdx:w-[100vw] max-mdx:h-[100vh] max-mdx:fixed max-mdx:left-0 max-mdx:z-9999 max-mdx:flex ${
        isMenuOpen
          ? "max-mdx:top-0 max-mdx:visible max-mdx:transition-all max-mdx:duration-200 max-mdx:ease-in max-mdx:delay-200"
          : "max-mdx:top-[-100vh] max-mdx:invisible max-mdx:transition-all max-mdx:duration-400 max-mdx:ease-out max-mdx:delay-600"
      }`}
    >
      <div className="max-h-[919px] touch-auto max-mdx:touch-pinch-zoom max-[560px]:touch-auto max-mdx:fixed max-mdx:left-0 max-mdx:top-0 max-mdx:w-full max-mdx:h-full max-mdx:py-[100px] max-mdx:px-[0] max-mdx:shadow-none max-mdx:flex max-mdx:justify-center max-mdx:overflow-hidden max-mdx:basis-[100%] max-mdx:grow max-mdx:items-center max-md:py-[60px] max-md:px-0">
        <div className="max-h-none relative overflow-hidden h-full max-w-full outline-0 max-mdx:max-h-[719px] max-mdx:h-auto max-mdx:w-[85%] max-mdx:my-0 max-mdx:mx-auto max-md:w-full max-md:max-h-[799px]">
          <div className="relative top-0 left-0 mr-0 overflow-hidden w-auto h-auto max-mdx:py-0 max-mdx:px-5">
            <ul className="font-spaceGrotesk flex flex-col pl-0 mb-0 list-none max-mdx:pt-[15px] max-mdx:px-[15px] max-mdx:pb-[28px]">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className={`mobile-nav-item ${
                    isMenuOpen
                      ? `max-mdx:opacity-100 max-mdx:scale-100 max-mdx:translate-y-0`
                      : `max-mdx:opacity-0 max-mdx:scale-[1.15] max-mdx:translate-y-[-30px]`
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${item.activeDelay}ms`
                      : `${item.normalDelay}ms`,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`mobile-nav-link ${
                      activeMenu == item.id ? "opacity-60" : "opacity-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={toggleMenu}
        className={`text-[24px] w-[22px] h-[14px] inline-block relative p-0 m-0 border-none align-middle rounded-none float-left leading-[1] bg-transparent max-mdx:transition-all max-mdx:absolute max-mdx:right-[30px] max-mdx:top-[35px] max-mdx:m-0 ${
          isMenuOpen
            ? "max-mdx:duration-500 max-mdx:ease-in max-mdx:delay-800"
            : "duration-300 ease-ease delay-0"
        }`}
      >
        <span
          className={`mobile-close-button rotate-0 ${
            isMenuOpen ? "w-0 top-[7px]" : "w-[14px] top-0"
          }`}
        ></span>
        <span
          className={`mobile-close-button top-[6px] ${
            isMenuOpen ? "rotate-45" : "rotate-0"
          }`}
        ></span>
        <span
          className={`mobile-close-button top-[6px] ${
            isMenuOpen ? "-rotate-45" : "rotate-0"
          }`}
        ></span>
        <span
          className={`mobile-close-button rotate-0 ${
            isMenuOpen ? "top-[7px] w-0" : "top-3 w-[14px]"
          }`}
        ></span>
      </button>
    </div>
  );
}
