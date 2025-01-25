import Brands from "@/components/brands";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneCall } from "react-icons/pi";

export default function Section1() {
  return (
    <section className="max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row mb-[8%] items-center">
          <div className="px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-1/2 max-mdx:mb-[50px] max-md:mb-[30px]">
            <figure className="m-0 relative overflow-hidden">
              <img
                className="w-full max-w-full h-auto"
                src="/images/demo-digital-agency-01.jpg"
                alt=""
              />
              <figcaption className="left-0 bottom-0 px-[15px] py-[35px] bg-white text-center absolute">
                <span className="font-bold mb-[5px] tracking-[-2px] text-[--dark-gray2] leading-[5.313rem] text-[5.625rem] font-spaceGrotesk relative block">
                  28
                  <sub className="top-[-40px] text-[--dark-gray2] leading-[2.5rem] text-[2.5rem] relative bottom-[-.25em]">
                    +
                  </sub>
                </span>
                <span className="font-semibold w-[200px] text-[--dark-gray2] leading-[20px] text-14 uppercase text-center mx-auto block">
                  Years working experience
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="px-[15px] text-center w-full max-w-full md:text-left lgx:ml-[8.33333333%] lgx:w-[41.66666667%] lgx:flex-[0_0_auto] mdx:w-1/2">
            <h2 className="font-semibold tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-[30px] max-md:mb-[25px]">
              We're a creative digital agency.
            </h2>
            <p className="w-[85%] mb-[25px] mt-0 max-md:w-full">
              We are excited for our work and how it positively impacts clients.
              With over 28 years of experience we have been constantly providing
              excellent web solutions is best in-class experience.
            </p>
            <p className="w-[85%] mb-[25px] mt-0 max-md:w-full">
              We are excited for our work and how it positively impacts clients.
              We constantly providing excellent web solutions is best in-class
              experience.
            </p>
            <div className="mt-[15px] w-full inline-block max-md:mt-0">
              <Link
                href={"#"}
                className="bg-[--dark-gray2] text-white text-14 py-[18px] px-[34px] border-2 border-transparent rounded-none uppercase tracking-[.5px] w-auto font-spaceGrotesk transition-all duration-300 ease-in-out [box-shadow:_0_5px_20px_rgba(0,0,0,.1);] font-medium mr-[20px] inline-block align-middle leading-[--bs-btn-line-height] text-center cursor-pointer select-none max-md:text-13 max-md:py-[16px] max-md:px-[36px] max-md:mr-0 max-md:mb-[30px] hover:[transform:translate3d(0,-2px,0)]"
              >
                Let's talk now
                <HiOutlineMail
                  size={16}
                  className="relative ml-[6px] inline-block"
                />
              </Link>
              <Link
                href={"#"}
                className="font-semibold text-[--dark-gray2] text-18 block align-middle md:inline-block"
              >
                <PiPhoneCall size={24} className="mr-[10px] inline-block" />
                {"1 800 222 000"}
              </Link>
            </div>
          </div>
        </div>
        <Brands toPage="about" />
      </div>
    </section>
  );
}
