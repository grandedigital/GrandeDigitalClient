import Link from "next/link";

export default function Section1() {
  return (
    <section className="max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row mb-[6%] max-mdx:mb-[30px]">
          <div className="px-[15px] w-full flex-[0_0_auto] max-w-full xxl:w-[75%] lgx:w-[83.33333333%]">
            <h2 className="font-semibold w-[95%] tracking-[-3px] text-[--dark-gray2] font-spaceGrotesk text-center mb-0 mdx:text-left max-mdx:w-full">
              We're here to help you and answer any questions you might have.
            </h2>
          </div>
        </div>
        <div className="row justify-center">
          <div className="px-[15px] w-full flex-[0_0_auto] max-w-full xsm:w-1/2 mdx:w-1/4 max-mdx:mb-[50px] max-md:mb-[30px]">
            <div className="feaure-box">
              <div>
                <img
                  className="mb-[20px] max-w-full h-auto"
                  src="/images/location.webp"
                  alt=""
                />
              </div>
              <div>
                <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                  Office location
                </span>
                <p className="mb-0 w-[80%] mx-auto mt-0 max-xxl:w-full max-mdx:w-[75%]">
                  27 Eden walk eden center, Orchard view, Paris, France
                </p>
              </div>
            </div>
          </div>
          <div className="px-[15px] w-full flex-[0_0_auto] max-w-full xsm:w-1/2 mdx:w-1/4 max-mdx:mb-[50px] max-md:mb-[30px]">
            <div className="feaure-box">
              <div>
                <img
                  className="mb-[20px] max-w-full h-auto"
                  src="/images/sendMessage.webp"
                  alt=""
                />
              </div>
              <div>
                <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                  Send a message
                </span>
                <div className="w-full block">
                  <Link
                    href={"mailto:info@yourdomain.com"}
                    className="transition-all duration-300 text-[--medium-gray] hover:text-[--dark-gray2]"
                  >
                    info@yourdomain.com
                  </Link>
                  <br />
                  <Link
                    href={"mailto:hr@yourdomain.com"}
                    className="transition-all duration-300 text-[--medium-gray] hover:text-[--dark-gray2]"
                  >
                    hr@yourdomain.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="px-[15px] w-full flex-[0_0_auto] max-w-full mdx:w-1/4 xsm:w-1/2 max-xsm:mb-[30px]">
            <div className="feaure-box">
              <div>
                <img
                  className="mb-[20px] max-w-full h-auto"
                  src="/images/makeCall.webp"
                  alt=""
                />
              </div>
              <div>
                <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                  Let's talk with us
                </span>
                <div className="w-full block">
                  <span className="block">
                    {"Phone: "}
                    <Link
                      href={"tel:1800222000"}
                      className="transition-all duration-300 text-[--medium-gray] hover:text-[--dark-gray2]"
                    >
                      1-800-222-000
                    </Link>
                  </span>
                  <span className="block">Fax: 1-800-222-002</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-[15px] w-full flex-[0_0_auto] max-w-full mdx:w-1/4 xsm:w-1/2">
            <div className="feaure-box">
              <div>
                <img
                  className="mb-[20px] max-w-full h-auto"
                  src="/images/people.webp"
                  alt=""
                />
              </div>
              <div>
                <span className="font-semibold mb-[5px] text-[--dark-gray2] text-19 block">
                  Join our team
                </span>
                <p className="mb-0 w-[80%] mx-auto mt-0 max-xxl:w-full max-mdx:w-[75%]">
                  Lorem ipsum is simply the printing typesetting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
