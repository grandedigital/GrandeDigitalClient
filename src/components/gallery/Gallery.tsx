"use client";

import Link from "next/link";
import { useState } from "react";
import galleryTabs from "../../data/galleryTabs.json";
import GalleryItem from "./galleryItem";
import galleryItems from "../../data/galleryItems.json";

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
          {/* <div
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
          </div> */}
        </div>
        <div className="row">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full mdx:p-0">
            <ul className="list-none p-0 m-0 text-center md:my-0 md:px[-10px] flex flex-wrap transition-all duration-400 ease-ease">
              {galleryItems?.map((item, index) => (
                <li
                  key={index}
                  className="w-[33.33%] p-[10px] list-none max-mdx:w-1/2 max-md:w-1/2 max-xsm:w-full group transition-all duration-400 ease-ease"
                >
                  <GalleryItem data={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
