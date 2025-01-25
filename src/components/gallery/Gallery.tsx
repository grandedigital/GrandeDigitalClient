"use client";

import Link from "next/link";
import { useState } from "react";
import galleryTabs from "../../data/galleryTabs.json";

export default function Gallery({ title }: { title?: string }) {
  const [activeMenuId, setActiveMenuId] = useState(1);

  const handleClickGalleryNavItem = (e: any, selectedNavItemId: number) => {
    e.preventDefault();
    setActiveMenuId(selectedNavItemId);
  };
  return (
    <section className="pb-0 relative overflow-hidden max-2xl:pt-[90px] max-mdx:pt-[75px] max-md:pt-[50px]">
      <div className="custom-container">
        <div className="row mb-[5%] items-center">
          {title && (
            <div className="px-[15px] text-center w-full max-w-full lgx:text-left lgx:flex-[0_0_auto] lgx:w-[41.66666667%] max-lgx:mb-[30px]">
              <h2 className="font-semibold tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-0">
                {title}
              </h2>
            </div>
          )}
          <div
            className={`px-[15px] text-center w-full max-w-full lgx:text-right lgx:flex-[0_0_auto] ${
              title ? "lgx:w-[58.33333333%]" : ""
            }`}
          >
            <ul
              className={`justify-center border-0 flex flex-wrap pl-0 mb-0 list-none mt-0 ${
                title ? "lgx:justify-end" : ""
              } max-md:inline-block max-md:w-full`}
            >
              {galleryTabs.map((item, index) => (
                <li
                  key={index}
                  className={`group gallery-nav-item ${
                    index == 0 ? "pl-0" : ""
                  } ${index == galleryTabs.length - 1 ? "pr-0" : ""}`}
                >
                  <Link
                    onClick={(e) => handleClickGalleryNavItem(e, item.id)}
                    href={item.href}
                    className={`border-b-[2px] border-solid group-hover:text-[--dark-gray2] group-hover:border-[--dark-gray2] ${
                      activeMenuId == item.id
                        ? "border-[--dark-gray2] text-[--dark-gray2]"
                        : "border-transparent"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full mdx:p-0">
            <ul className="list-none p-0 m-0 text-center md:my-0 md:px[-10px] flex flex-wrap transition-all duration-400 ease-ease">
              <li className="w-[33.33%] p-[10px] list-none max-mdx:w-1/2 max-md:w-1/2 max-xsm:w-full group transition-all duration-400 ease-ease">
                <div className="w-full relative">
                  <Link
                    href="/portfolio/detail"
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
                          Tailoring
                        </span>
                      </div>
                      <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.37,.31,.2,.85)] leading-[28px] text-[15px] text-white opacity-0 group-hover:opacity-60">
                        <span className="opacity-100 block translate-y-[50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
                          Brochure
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"></div>
                  <img src="/images/portfolio-249.jpg" alt="" />
                </div>
              </li>
              <li className="w-[33.33%] p-[10px] list-none max-mdx:w-1/2 max-md:w-1/2 max-xsm:w-full group transition-all duration-400 ease-ease">
                <div className="w-full relative">
                  <Link
                    href="/portfolio/detail"
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
                          Tailoring
                        </span>
                      </div>
                      <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.37,.31,.2,.85)] leading-[28px] text-[15px] text-white opacity-0 group-hover:opacity-60">
                        <span className="opacity-100 block translate-y-[50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
                          Brochure
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"></div>
                  <img src="/images/portfolio-250.jpg" alt="" />
                </div>
              </li>
              <li className="w-[33.33%] p-[10px] list-none max-mdx:w-1/2 max-md:w-1/2 max-xsm:w-full group transition-all duration-400 ease-ease">
                <div className="w-full relative">
                  <Link
                    href="/portfolio/detail"
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
                          Tailoring
                        </span>
                      </div>
                      <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.37,.31,.2,.85)] leading-[28px] text-[15px] text-white opacity-0 group-hover:opacity-60">
                        <span className="opacity-100 block translate-y-[50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
                          Brochure
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"></div>
                  <img src="/images/portfolio-251.jpg" alt="" />
                </div>
              </li>
              <li className="w-[33.33%] p-[10px] list-none max-mdx:w-1/2 max-md:w-1/2 max-xsm:w-full group transition-all duration-400 ease-ease">
                <div className="w-full relative">
                  <Link
                    href="/portfolio/detail"
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
                          Tailoring
                        </span>
                      </div>
                      <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.37,.31,.2,.85)] leading-[28px] text-[15px] text-white opacity-0 group-hover:opacity-60">
                        <span className="opacity-100 block translate-y-[50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
                          Brochure
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"></div>
                  <img src="/images/portfolio-252.jpg" alt="" />
                </div>
              </li>
              <li className="w-[33.33%] p-[10px] list-none max-mdx:w-1/2 max-md:w-1/2 max-xsm:w-full group transition-all duration-400 ease-ease">
                <div className="w-full relative">
                  <Link
                    href="/portfolio/detail"
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
                          Tailoring
                        </span>
                      </div>
                      <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.37,.31,.2,.85)] leading-[28px] text-[15px] text-white opacity-0 group-hover:opacity-60">
                        <span className="opacity-100 block translate-y-[50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
                          Brochure
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"></div>
                  <img src="/images/portfolio-253.jpg" alt="" />
                </div>
              </li>
              <li className="w-[33.33%] p-[10px] list-none max-mdx:w-1/2 max-md:w-1/2 max-xsm:w-full group transition-all duration-400 ease-ease">
                <div className="w-full relative">
                  <Link
                    href="/portfolio/detail"
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
                          Tailoring
                        </span>
                      </div>
                      <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.37,.31,.2,.85)] leading-[28px] text-[15px] text-white opacity-0 group-hover:opacity-60">
                        <span className="opacity-100 block translate-y-[50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
                          Brochure
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"></div>
                  <img src="/images/portfolio-254.jpg" alt="" />
                </div>
              </li>
              <li className="w-[33.33%] p-[10px] list-none max-mdx:w-1/2 max-md:w-1/2 max-xsm:w-full group transition-all duration-400 ease-ease">
                <div className="w-full relative">
                  <Link
                    href="/portfolio/detail"
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
                          Tailoring
                        </span>
                      </div>
                      <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.37,.31,.2,.85)] leading-[28px] text-[15px] text-white opacity-0 group-hover:opacity-60">
                        <span className="opacity-100 block translate-y-[50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
                          Brochure
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"></div>
                  <img src="/images/portfolio-264.jpg" alt="" />
                </div>
              </li>
              <li className="w-[33.33%] p-[10px] list-none max-mdx:w-1/2 max-md:w-1/2 max-xsm:w-full group transition-all duration-400 ease-ease">
                <div className="w-full relative">
                  <Link
                    href="/portfolio/detail"
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
                          Tailoring
                        </span>
                      </div>
                      <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.37,.31,.2,.85)] leading-[28px] text-[15px] text-white opacity-0 group-hover:opacity-60">
                        <span className="opacity-100 block translate-y-[50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
                          Brochure
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"></div>
                  <img src="/images/portfolio-265.jpg" alt="" />
                </div>
              </li>
              <li className="w-[33.33%] p-[10px] list-none max-mdx:w-1/2 max-md:w-1/2 max-xsm:w-full group transition-all duration-400 ease-ease">
                <div className="w-full relative">
                  <Link
                    href="/portfolio/detail"
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
                          Tailoring
                        </span>
                      </div>
                      <div className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.37,.31,.2,.85)] leading-[28px] text-[15px] text-white opacity-0 group-hover:opacity-60">
                        <span className="opacity-100 block translate-y-[50%] transition-all duration-500 ease-[cubic-bezier(.37,.31,.2,.85)] group-hover:translate-y-0">
                          Brochure
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-400 ease-[cubic-bezier(.37,0,.63,1)]"></div>
                  <img src="/images/portfolio-266.jpg" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
