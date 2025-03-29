"use client";

import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import MenuButton from "./menuButton";
import menu from "../../data/menu.json";
import { useMenu } from "@/context/MenuContext";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { activeMenu, setActiveMenuHandler } = useMenu();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // 50px kayınca
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`${
          scrolled
            ? "[backdrop-filter:_blur(5px)] bg-opacity-85 [box-shadow:_0_10px_35px_0_rgba(0,0,0,.1)]"
            : "backdrop-blur-0 bg-opacity-100 shadow-none"
        } flex items-center left-0 z-99 duration-300 fixed top-0 right-0 p-0 bg-[rgba(255,255,255)] mdx:flex-nowrap mdx:justify-start max-mdx:px-[15px] max-md:px-0`}
      >
        <div
          className="flex items-center justify-between px-[45px] w-full mx-auto max-lgx:px-[35px] max-mdx:px-0"
          style={{ flexWrap: "inherit" }}
        >
          <div className="py-0 px-[15px] flex self-stretch mr-auto mdx:mr-0 flex-[0_0_auto] mdx:w-[16.66666667%] w-auto">
            <Link
              href={"/"}
              className="mr-0 align-middle py-[30px] px-[0] inline-block text-[0] text-[--bs-navbar-brand-color] no-underline whitespace-nowrap max-mdx:py-[22px] max-mdx:px-[0]"
            >
              <img
                src="/images/grandeLogo.png"
                alt="logo"
                className="visible opacity-100 w-auto max-h-[34px] max-w-[100%] h-auto"
              />
            </Link>
          </div>
          <div className="py-0 px-[15px] flex self-stretch ml-auto static flex-[0_0_auto] w-auto max-mdx:order-5 max-mdx:ml-0">
            <MenuButton />
            <div
              className="mdx:flex mdx:basis-auto justify-center grow items-center max-mdx:hidden max-mdx:absolute max-mdx:top-[100%] max-mdx:left-0 max-mdx:w-full max-mdx:overflow-hidden max-mdx:shadow-custom max-mdx:bg-white"
              style={{ maxHeight: 845 }}
            >
              <ul className="items-center self-stretch mdx:flex-row font-spaceGrotesk flex flex-col pl-0 mb-0 list-none max-mdx:px-[15px] max-mdx:pt-[15px] max-mdx:pb-[28px] max-md:py-[15px] max-md:px-[0]">
                {menu.map((item, index) => (
                  <li key={index} className="nav-item">
                    <Link
                      href={item.href}
                      onClick={() => setActiveMenuHandler(item.id)}
                      className={`nav-link ${
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
          <div className="justify-end py-0 px-[15px] hidden self-stretch xsm:flex text-right flex-[0_0_auto] w-auto">
            <div className="flex items-center">
              <div>
                <Link
                  href={"/iletisim"}
                  className="p-0 bg-transparent border-[--extra-medium-gray] text-[--dark-gray] text-[13px] normal-case tracking-[0] font-semibold rounded-none w-auto font-spaceGrotesk transition-all duration-300 ease-in-out inline-block border-[1px] items-center no-underline leading-[--bs-btn-line-height] align-middle cursor-pointer select-none max-md:p-0 hover:bg-black hover:border-black group hover:text-white"
                >
                  <span className="py-[12px] px-[22px] inline-flex items-center relative overflow-hidden">
                    <HiOutlineMail size={14} className="mr-[6px]" />
                    <span className="text-[--dark-gray] before:content-['Send_a_message'] transition-all duration-700 ease-[cubic-bezier(.15,.85,.31,1)] before:inline-block before:absolute before:whitespace-nowrap before:top-[50%] before:opacity-0 group-hover:before:opacity-100 before:left-[50%] before:translate-x-[-50%] before:translate-y-[100%] group-hover:text-white group-hover:translate-y-[-200%] group-hover:before:translate-x-[-50%] group-hover:before:translate-y-[150%]">
                      Mesaj gönder
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
