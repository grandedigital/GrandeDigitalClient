import Link from "next/link";
import EmailForm from "./emailForm";
import { FaRegHandshake } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="pb-0 max-2xl:pt-[90px] max-mdx:pt-[75px] max-md:pt-[50px]">
      <div className="custom-container">
        <div className="row">
          <div className="px-[15px] flex flex-col flex-[0_0_auto] w-full max-w-full md:order-1 md:w-1/2 lgx:w-1/4 max-lgx:mb-[30px] mdx:w-full max-md:mb-[20px]">
            <Link href={"#"} className="inline-block max-lgx:mb-[30px]">
              <img
                className="max-h-[48px] max-w-full h-auto"
                src="/images/demo-branding-agency-logo-black.webp"
                alt=""
              />
            </Link>
            <div className="mt-auto">
              <ul className="m-0 list-none p-0 font-semibold">
                <li className="ml-0 mr-[5px] inline-block list-none max-md:mb-0">
                  <Link
                    target="_blank"
                    href={"#"}
                    className="text-[--dark-gray2] w-auto h-auto leading-normal text-center flex items-center justify-center duration-300 ease-[cubic-bezier(.12,0,.39,0)] text-18"
                  >
                    Fb.
                  </Link>
                </li>
                <li className="ml-[5px] mr-[5px] inline-block list-none max-md:mb-0">
                  <Link
                    target="_blank"
                    href={"#"}
                    className="text-[--dark-gray2] w-auto h-auto leading-normal text-center flex items-center justify-center duration-300 ease-[cubic-bezier(.12,0,.39,0)] text-18"
                  >
                    Ig.
                  </Link>
                </li>
                <li className="ml-[5px] mr-[5px] inline-block list-none max-md:mb-0">
                  <Link
                    target="_blank"
                    href={"#"}
                    className="text-[--dark-gray2] w-auto h-auto leading-normal text-center flex items-center justify-center duration-300 ease-[cubic-bezier(.12,0,.39,0)] text-18"
                  >
                    Tw.
                  </Link>
                </li>
                <li className="ml-[5px] mr-0 inline-block list-none max-md:mb-0">
                  <Link
                    target="_blank"
                    href={"#"}
                    className="text-[--dark-gray2] w-auto h-auto leading-normal text-center flex items-center justify-center duration-300 ease-[cubic-bezier(.12,0,.39,0)] text-18"
                  >
                    Be.
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-[15px] w-full flex-[0_0_auto] max-w-full md:order-4 lgx:w-1/4 mdx:w-1/3 md:w-1/2 max-md:mb-[30px]">
            <span className="font-semibold text-[--dark-gray2] text-14 uppercase block">
            İstanbul
            </span>
            <p className="mb-[25px] mt-0">
              <strong className="font-semibold text-[--dark-gray2]">
                Project Office
              </strong>
              <br />
              Taşdelen Mah. <br/> Çekmeköy / İstanbul
            </p>
          </div>
          <div className="px-[15px] w-full flex-[0_0_auto] max-w-full md:order-4 lgx:w-1/4 mdx:w-1/3 md:w-1/2 max-md:mb-[30px]">
          <span className="font-semibold text-[--dark-gray2] text-14 uppercase block">
              Fethiye
            </span>
            <p className="mb-0 mt-0">
              <strong className="font-semibold text-[--dark-gray2]">
              Project & Planning Office
              </strong>
              <br />
              Ovacık Mah. <br /> Fethiye / Muğla
            </p>
          </div>

          {/* <div className="px-[15px] w-full flex-[0_0_auto] max-w-full mdx:order-2 md:order-3 mdx:w-1/3 lgx:w-1/4 md:w-1/2 max-md:mb-[20px]">
            <span className="font-semibold text-[--dark-gray2] text-14 uppercase block">
              İstanbul
            </span>
            <p className="mb-[25px] mt-0">
              <strong className="font-semibold text-[--dark-gray2]">
                Project Office
              </strong>
              <br />
              Taşdelen Mah. <br/> Çekmeköy / İstanbul
            </p>
            <span className="font-semibold text-[--dark-gray2] text-14 uppercase block">
              Fethiye
            </span>
            <p className="mb-0 mt-0">
              <strong className="font-semibold text-[--dark-gray2]">
              Project & Planning Office
              </strong>
              <br />
              Ovacık Mah. <br /> Fethiye / Muğla
            </p>
          </div> */}
          <div className="px-[15px] w-full flex-[0_0_auto] max-w-full md:order-4 lgx:w-1/4 mdx:w-1/3 md:w-1/2 max-md:mb-[30px]">
            <span className="font-semibold text-[--dark-gray2] text-14 uppercase block">
              Projeleriniz için
            </span>
            <p className="mb-0 mt-0">Bizimle çalışmak istermisiniz?</p>
            <Link
              href={"#"}
              className="font-semibold mb-[50px] border-b text-[--dark-gray2] inline-block max-md:mb-[30px]"
            >
              info@grandedigital.com
            </Link>
          
          </div>
          {/* <div className="px-[15px] w-full flex-[0_0_auto] max-w-full mdx:order-4 md:order-2 lgx:w-1/4 mdx:w-1/3 md:1/2 max-mdx:mb-[30px] max-md:mb-0">
            <span className="font-semibold mb-[15px] text-[--dark-gray2] text-14 uppercase block">
              Sign up for the newsletter
            </span>
            <div className="mb-[10px] w-full relative inline-block">
              <EmailForm />
            </div>
            <div className="items-center flex">
              <div className="text-15 inline-block">
                <FaRegHandshake
                  className="mr-[10px] text-[24px] inline-block"
                  size={24}
                />
                Protecting your privacy
              </div>
            </div>
          </div> */}
        </div>
        <div className="row pt-[5%] items-center justify-center max-md:pt-[35px]">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full">
            <div className="border-t w-full border-[--extra-medium-gray]"></div>
          </div>
          <div className="py-[15px] text-15 px-[15px] text-center order-2 w-full max-w-full mdx:text-left mdx:order-1 mdx:flex-[0_0_auto] mdx:w-[41.66666667%] max-mdx:pt-0">
            <p className="mb-0 mt-0">
              {"2025 Grande Digital © "}
              {/* <Link
                href={"#"}
                className="font-semibold border-b text-[--dark-gray2] border-[initial]"
              >
                GrandeDigital
              </Link> */}
            </p>
          </div>
          <div className="py-[15px] text-15 px-[15px] text-center order-1 w-full max-w-full mdx:text-right mdx:order-2 mdx:flex-[0_0_auto] mdx:w-[58.33333333%] max-mdx:pb-[5px]">
            <ul className="p-0 list-none m-0 max-md:leading-[normal]">
              <li className="mb-0 inline-block list-none">
                <Link
                  href={"#"}
                  className="pl-0 text-[--medium-gray] py-[.5rem] px-[1rem] block transition-all duration-200 ease-in-out max-md:pr-[.8rem] hover:text-[--dark-gray2]"
                >
                  Gizlilik Politikamız
                </Link>
              </li>
              <li className="mb-0 inline-block list-none">
                <Link
                  href={"/contact"}
                  className="pr-0 text-[--medium-gray] py-[.5rem] px-[1rem] block transition-all duration-200 ease-in-out max-md:pr-[.8rem] hover:text-[--dark-gray2]"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
