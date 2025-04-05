import Link from "next/link";

export default function Section1({ data }: { data?: any }) {
  return (
    <section className="bg-[url('/images/portfolio-single-minimal-10.jpg')] mt-[inherit] pt-[11%] bg-cover bg-center relative bg-no-repeat overflow-hidden max-2xl:pb-[90px] max-lgx:pt-[15%] max-mdx:pb-[75px] max-md:pb-[50px]">
      <div className="custom-container">
        <div className="row items-center justify-between">
          <div className="px-[15px] text-center flex-[0_0_auto] w-full max-w-full md:text-left md:w-1/2 mdx:w-[41.66666667%] max-md:mb-[40px] max-md:mt-[30px]">
            <span className={`font-bold mb-[15px] w-[80%] tracking-[-3px] text-[--dark-gray2] leading-[5rem] ${data?.fontSize ? 'text-[5rem]' : 'text-[5.625rem]'} font-spaceGrotesk block max-lgx:w-full`}>
              {data?.title}
            </span>
            <p className="w-[75%] mb-[25px] mt-0 max-lgx:w-full">
              {data?.shortDesc}
            </p>
            {
              data?.url &&
              <Link
                target="_blank"
                rel="nofollow"
                href={`https://${data?.url}`}
                className="group hover:translate-y-[-2px] hover:shadow-[0_8px_30px_0_rgba(0,0,0,.15)] p-0 bg-[--dark-gray2] text-white text-14 border-2 border-transparent border-solid rounded-none uppercase tracking-[.5px] w-auto font-spaceGrotesk transition-all duration-300 ease-in-out shadow-[0_5px_20px_rgba(0,0,0,.1)] font-medium inline-block leading-[--bs-btn-line-height] text-center align-middle cursor-pointer select-none max-md:text-13"
              >
                <span className="py-[18px] px-[34px] inline-flex items-center relative overflow-hidden">
                  <span>
                    {data?.url}
                  </span>
                </span>
              </Link>
            }
          </div>
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full mdx:w-[58.33333333%] md:w-1/2">
            <img
              className="rounded-[8px] max-w-full h-auto"
              src={`/images/${data?.mainPhoto}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
