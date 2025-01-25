import Link from "next/link";

export default function Section4() {
  return (
    <section className="py-[130px] bg-[url('/images/demo-digital-agency-bg-01.jpg')] relative overflow-hidden bg-fixed bg-cover max-2xl:py-[120px] max-lgx:bg-inherit max-lgx:bg-center max-mdx:py-[95px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row mb-[15%]">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full xxl:w-[58.33333333%] lgx:w-[66.66666667%]">
            <h2 className="font-medium w-[95%] tracking-[-2px] font-spaceGrotesk text-white mb-[30px] max-mdx:w-full max-md:mb-[25px]">
              <span>
                Forward thinking team of designers, copywriters and developers.
              </span>
            </h2>
          </div>
        </div>
        <div className="mx-[-15px] flex flex-wrap">
          <div className="px-[15px] w-1/2 flex-[0_0_auto] max-w-full mdx:w-1/4 md:w-1/3">
            <Link href={"#"}>
              <img
                className="max-w-full h-auto"
                src="/images/demo-digital-agency-envato.svg"
                alt=""
              />
            </Link>
            <div className="font-medium mt-[30px] pt-[15px] border-[--dark-gray2] text-14 text-white uppercase border-t border-solid">
              3x site of the day
            </div>
          </div>
          <div className="px-[15px] w-1/2 flex-[0_0_auto] max-w-full mdx:w-1/4 md:w-1/3">
            <Link href={"#"}>
              <img
                className="max-w-full h-auto"
                src="/images/demo-digital-agency-awwards.svg"
                alt=""
              />
            </Link>
            <div className="font-medium mt-[30px] pt-[15px] border-[--dark-gray2] text-14 text-white uppercase border-t border-solid">
              2x developer award
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
