export default function Section5({ data }: { data?: any }) {
  return (
    <section className="max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row text-center md:text-left">
          <div className={`px-[15px] flex-[0_0_auto] w-full max-w-full ${data?.detailPhoto2Desc2 === null ? 'md:w-[100%] flex justify-center' : 'md:w-1/2'} max-md:mb-[30px]`}>
            <span className="w-[80%] text-[--dark-gray2] text-[24px] leading-[32px] font-spaceGrotesk inline-block max-lgx:w-[90%] max-mdx:w-full">
              <span className="font-semibold border-b border-solid border-[--dark-gray2]">
                {data?.detailPhoto2Desc1PrivateText}
              </span>
              {" "}
              {
                data?.detailPhoto2Desc1
              }
            </span>
          </div>
          {
            data?.detailPhoto2Desc2 !== null &&
            <div className="px-[15px] flex-[0_0_auto] w-full max-w-full md:w-1/2 flex items-center">
              <p className="w-[80%] mb-0 mt-0 max-lgx:w-[90%] max-mdx:w-full">
                {data?.detailPhoto2Desc2}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  );
}
