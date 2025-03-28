export default function DetailGallery({ data }: { data?: any }) {
  return (
    <section className="px-[8%] py-0 max-2xl:px-[4%] max-xxl:px-[2%] max-md:px-0">
      <div className="px-[15px] w-full mx-auto">
        <div className="row mb-[30px]">
          {
            data?.galleryPhoto1 &&
            <div className="px-[15px] w-full max-w-full xsm:w-1/2 xsm:flex-[0_0_auto] max-xsm:mb-[30px]">
              <img
                className="w-full rounded-[8px] max-w-full h-auto"
                src={`/images/${data?.galleryPhoto1}`}
                alt=""
              />
            </div>
          }
          {
            data?.galleryPhoto2 &&
            <div className="px-[15px] w-full max-w-full xsm:w-1/2 xsm:flex-[0_0_auto]">
              <img
                className="w-full rounded-[8px] max-w-full h-auto"
                src={`/images/${data?.galleryPhoto2}`}
                alt=""
              />
            </div>
          }
        </div>
        {
          data?.galleryPhoto3 &&
          <div className="row mb-[30px]">
            <div className="px-[15px] flex-[0_0_auto] w-full max-w-full">
              <img
                className="w-full rounded-[8px] max-w-full h-auto"
                src={`/images/${data?.galleryPhoto3}`}
                alt=""
              />
            </div>
          </div>
        }
        <div className="row mb-[30px]">
          {
            data?.galleryPhoto4 &&
            <div className="px-[15px] w-full max-w-full xsm:w-1/2 xsm:flex-[0_0_auto] max-xsm:mb-[30px]">
              <img
                className="w-full rounded-[8px] max-w-full h-auto"
                src={`/images/${data?.galleryPhoto4}`}
                alt=""
              />
            </div>
          }
          {
            data?.galleryPhoto5 &&
            <div className="px-[15px] w-full max-w-full xsm:w-1/2 xsm:flex-[0_0_auto]">
              <img
                className="w-full rounded-[8px] max-w-full h-auto"
                src={`/images/${data?.galleryPhoto5}`}
                alt=""
              />
            </div>
          }
        </div>
        {/* <div className="row">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full">
            <img
              className="w-full rounded-[8px] max-w-full h-auto"
              src="/images/portfolio-single-minimal-09.jpg"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
