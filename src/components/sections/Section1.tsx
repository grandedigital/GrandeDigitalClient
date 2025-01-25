export default function Section1() {
  return (
    <section className="overflow-hidden max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row mb-[6%] items-center max-md:mb-[50px]">
          <div className="px-[15px] text-center max-w-full md:text-left lgx:flex-[0_0_auto] lgx:w-[41.66666667%] mdx:flex-[0_0_auto] mdx:w-[41.66666667%] max-mdx:mb-[50px] max-md:mb-[30px]">
            <h2 className="font-semibold tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk mb-0">
              {"We are a creative bold digital agency based in "}
              <span className="shadow-none inline-block relative pb-0 mb-0">
                london.
                <span className="h-[45px] bottom-[-10px] -z-1 float-left w-full absolute left-0">
                  <img
                    className="h-[45px] w-full absolute left-0 bottom-0 transition-none max-w-full"
                    src="/images/demo-digital-agency-highlight-separator.webp"
                    alt=""
                  />
                </span>
              </span>
            </h2>
          </div>
          <div className="px-[15px] max-w-full lgx:ml-[8.33333333%] lgx:flex-[0_0_auto] lgx:w-1/2 mdx:flex-[0_0_auto] mdx:w-[58.33333333%] w-full">
            <div className="row items-center max-md:flex-col">
              <div className="px-[15px] block text-center relative max-w-full mdx:text-center md:text-left lgx:flex-[0_0_auto] lgx:w-1/2 mdx:flex-[0_0_auto] mdx:w-1/2 md:flex-[0_0_auto] md:w-[41.66666667%] max-md:mb-[30px]">
                <span className="[background-image:linear-gradient(135deg,transparent_45%,#464646_45%,#464646_55%,transparent_0)] [background-size:_5px_5px] w-[250px] h-[250px] bg-[--dark-gray2] rounded-[50%] items-center justify-center flex">
                  <span className="font-bold w-full tracking-[-4px] text-[6.875rem] leading-[6.875rem] font-spaceGrotesk text-white justify-center flex">
                    {"20 "}
                    <sub className="font-medium top-0 text-[2.5rem] leading-[2.5rem] relative align-top bottom-[-0.25em]">
                      +
                    </sub>
                  </span>
                </span>
              </div>
              <div className="px-[15px] text-center max-w-full md:text-left md:flex-[0_0_auto] md:w-[58.33333333%] mdx:flex-[0_0_auto] mdx:w-1/2 lgx:flex-[0_0_auto] lgx:w-1/2">
                <span className="font-bold mb-[5px] tracking-[0.5px] text-[--dark-gray2] text-[16px] uppercase block">
                  20+ years of experience
                </span>
                <p className="mb-0 leading-[2rem] text-[18px] mt-0">
                  We are dedicated to providing outstanding digital and design
                  services meet the functional and aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-center">
          <div className="pr-[5%] pl-[15px] flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[33.33333333%] max-mdx:mb-[30px]">
            <div className="mb-[30px] w-full bg-[--extra-medium-gray] h-[1px] hidden mdx:block"></div>
            <div className="flex flex-row flex-wrap items-stretch justify-start text-left relative z-1">
              <div className="flex-1">
                <span className="w-[80%] text-[18px] block max-md:w-[90%]">
                  <span className="font-bold tracking-[-1px] text-[--dark-gray2]">
                    {"350+ "}
                  </span>
                  very satisfied clients around the worldwide.
                </span>
              </div>
              <div className="mt-[5px] mr-0 max-mdx:mt-0">
                <img
                  src="/images/emoji-smile.svg"
                  width={34}
                  height={34}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pr-[5%] pl-[15px] flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[33.33333333%] max-mdx:mb-[30px]">
            <div className="mb-[30px] w-full bg-[--extra-medium-gray] h-[1px] hidden mdx:block"></div>
            <div className="flex flex-row flex-wrap items-stretch justify-start text-left relative z-1">
              <div className="flex-1">
                <span className="w-[80%] text-[18px] block max-md:w-[90%]">
                  <span className="font-bold tracking-[-1px] text-[--dark-gray2]">
                    {"200+ "}
                  </span>
                  good award winning digital media agency.
                </span>
              </div>
              <div className="mt-[5px] mr-0 max-mdx:mt-0">
                <img
                  src="/images/megaphone.svg"
                  width={34}
                  height={34}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pr-[5%] pl-[15px] flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[33.33333333%] max-mdx:mb-[30px]">
            <div className="mb-[30px] w-full bg-[--extra-medium-gray] h-[1px] hidden mdx:block"></div>
            <div className="flex flex-row flex-wrap items-stretch justify-start text-left relative z-1">
              <div className="flex-1">
                <span className="w-[80%] text-[18px] block max-md:w-[90%]">
                  <span className="font-bold tracking-[-1px] text-[--dark-gray2]">
                    {"750+ "}
                  </span>
                  successfully project completed in one year.
                </span>
              </div>
              <div className="mt-[5px] mr-0 max-mdx:mt-0">
                <img
                  src="/images/briefcase.svg"
                  width={34}
                  height={34}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
