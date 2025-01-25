import Link from "next/link";

export default function Brands({ toPage = "homepage" }) {
  if (toPage == "homepage") {
    return (
      <section className="pb-0 pt-[110px] max-2xl:pt-[90px] max-mdx:pt-[75px] max-md:pt-[50px]">
        <div className="custom-container">
          <div className="row justify-center">
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
              <Link href={"#"} className="">
                <img
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
                  src="/images/logo-walmart-dark-gray.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
              <Link href={"#"} className="">
                <img
                  className="max-w-[inherit] h-[40px] max-xsm:inline-flex w-full"
                  src="/images/logo-invision-dark-gray.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
              <Link href={"#"} className="">
                <img
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
                  src="/images/logo-netflix-dark-gray.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-0 max-md:mb-[40px]">
              <Link href={"#"} className="">
                <img
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
                  src="/images/logo-logitech-dark-gray.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[0px]">
              <Link href={"#"} className="">
                <img
                  className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
                  src="/images/logo-amazon-dark-gray.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (toPage == "about") {
    return (
      <div className="row justify-center">
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
          <Link href={"#"} className="">
            <img
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
              src="/images/logo-walmart-dark-gray.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
          <Link href={"#"} className="">
            <img
              className="max-w-[inherit] h-[40px] max-xsm:inline-flex w-full"
              src="/images/logo-invision-dark-gray.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[40px]">
          <Link href={"#"} className="">
            <img
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
              src="/images/logo-netflix-dark-gray.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-0 max-md:mb-[40px]">
          <Link href={"#"} className="">
            <img
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
              src="/images/logo-logitech-dark-gray.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="ease-[cubic-bezier(.12,0,.39,0)] duration-300 transition-all px-[15px] text-center flex-[0_0_auto] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[20%] md:flex-[0_0_auto] md:w-[33.33333333%] xsm:flex-[0_0_auto] xsm:w-[50%] max-mdx:mb-[0px]">
          <Link href={"#"} className="">
            <img
              className="max-w-[inherit] h-[35px] max-xsm:inline-flex w-full"
              src="/images/logo-amazon-dark-gray.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
    );
  }
}
