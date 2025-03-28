export default function Section3({ data }: { data?: any }) {
  return (
    <section className="max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row items-center">
          <div className="px-[15px] text-center w-full max-w-full md:text-left flex-[0_0_auto] max-md:mb-[30px]">
            <h5 className="font-semibold mb-[15px] tracking-[-1px] text-[--dark-gray2] font-spaceGrotesk text-[2rem] leading-[2.2rem] mt-0">
              Proje Açıklaması
            </h5>
            <p className="mb-0 mt-0">
              {data?.longDesc}
            </p>
          </div>
          {/* <div className="px-[15px] w-full max-w-full mdx:ml-[8.33333333%] flex-[0_0_auto] mdx:w-[41.66666667%] md:w-1/2">
            <div className="row text-center items-center md:text-left">
              <div className="px-[15px] flex-[0_0_auto] w-1/2 max-w-full mb-[30px]">
                <span className="leading-[20px] block">Published</span>
                <span className="font-medium text-[--dark-gray2] font-spaceGrotesk">
                  20 January 2023
                </span>
              </div>
              <div className="px-[15px] flex-[0_0_auto] w-1/2 max-w-full mb-[30px]">
                <span className="leading-[20px] block">Services</span>
                <span className="font-medium text-[--dark-gray2] font-spaceGrotesk">
                  Branding, Product
                </span>
              </div>
              <div className="px-[15px] flex-[0_0_auto] w-1/2 max-w-full">
                <span className="leading-[20px] block">Industry</span>
                <span className="font-medium text-[--dark-gray2] font-spaceGrotesk">
                  Lifestyle, Music
                </span>
              </div>
              <div className="px-[15px] flex-[0_0_auto] w-1/2 max-w-full">
                <span className="leading-[20px] block">Client</span>
                <span className="font-medium text-[--dark-gray2] font-spaceGrotesk">
                  ThemeZaa, UK
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
