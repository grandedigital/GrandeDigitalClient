"use client";
import { useState, useEffect } from "react";
import { useMenu } from "@/context/MenuContext";

export default function MenuButton() {
  const { isMenuOpen, toggleMenu } = useMenu();

  const handleButtonClick = () => {
    toggleMenu();
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("max-mdx:overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("max-mdx:overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <button
      onClick={handleButtonClick}
      className="mdx:hidden text-[24px] w-[22px] h-[14px] inline-block relative p-0 m-0 border-none align-middle rounded-none duration-300 float-left leading-none text-[--bs-navbar-color] bg-transparent max-mdx:flex max-mdx:self-center"
    >
      <span className="navbar-toggler-line top-0 w-[14px]"></span>
      <span className="navbar-toggler-line top-[6px]"></span>
      <span className="navbar-toggler-line top-[6px]"></span>
      <span className="navbar-toggler-line top-[12px] w-[14px]"></span>
    </button>
  );
}
