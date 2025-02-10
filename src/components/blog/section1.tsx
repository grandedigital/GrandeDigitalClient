import Link from "next/link";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

export default function Section1() {
  return (
    <section className="pb-[70px] pt-0">
      <div className="custom-container">
        <div className="row justify-center">
          <div className="px-[15px] w-full max-w-full mdx:w-[83.33333333%] mdx:flex-[0_0_auto]">
            <div className="row mb-[30px]">
              <div className="px-[15px] text-center w-full max-w-full md:w-[75%] md:flex-[0_0_auto] md:text-left max-md:mb-[15px]">
                <Link href={"#"} className="blog-tab-button">
                  Development
                </Link>
                <Link href={"#"} className="blog-tab-button">
                  Event
                </Link>
                <Link href={"#"} className="blog-tab-button">
                  Multimedia
                </Link>
                <Link href={"#"} className="blog-tab-button">
                  Fashion
                </Link>
              </div>
              <div className="px-[15px] text-center w-full max-w-full md:text-right md:flex-[0_0_auto] md:w-1/4">
                <Link
                  href={"#"}
                  className="text-center text-14 leading-[20px] m-[0_6px_10px_0] py-[7px] px-[18px] rounded-[4px] border border-solid border-[--extra-medium-gray] inline-block font-medium mx-0 text-[--medium-gray]"
                >
                  <FaRegHeart
                    size={14}
                    className="mr-[10px] inline-block"
                    color="#dc3131"
                  />
                  <span className="text-[--dark-gray2]">05 LIKES</span>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="mb-[6%] px-[15px] flex-[0_0_auto] w-full max-w-full">
                <div className="p-[7%] w-full rounded-[4px] shadow-[0_0_30px_rgba(0,0,0,.08)] transition-all duration-350 ease-[cubic-bezier(.37,0,.63,1)] items-center block md:flex max-md:p-[35px]">
                  <div className="mr-[50px] w-[140px] text-center max-md:mx-auto">
                    <img
                      src="/images/avtar-07.jpg"
                      alt=""
                      className="w-[120px] rounded-[50%] max-w-full h-auto"
                    />
                    <Link
                      href={"#"}
                      className="font-medium mt-[20px] text-[--dark-gray2] leading-[20px] inline-block duration-300 hover:text-[--base-color]"
                    >
                      Colene Landin
                    </Link>
                    <span className="leading-[20px] text-15 block">
                      Co-founder
                    </span>
                  </div>
                  <div className="w-[75%] text-center md:text-left max-md:w-full">
                    <p className="mb-0 mt-0">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem ipsum has been the industry's
                      standard dummy text ever since the 1500s when an unknown
                      printer took a galley of type.
                    </p>
                    <Link
                      href={"#"}
                      className="p-[0_0_2px] relative border-0 border-b-[2px] border-[--dark-gray2] border-solid tracking-[0] bg-transparent text-14 text-[--dark-gray2] rounded-none w-auto font-spaceGrotesk transition-all duration-300 ease-in-out font-medium inline-block mt-[15px] leading-[1.5] text-center cursor-pointer select-none hover:opacity-70"
                    >
                      ALL AUTHOR POSTS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-center">
              <div className="px-[15px] text-center flex-[0_0_auto] w-full max-w-full">
                <ul className="list-none mb-0 p-0 mt-0">
                  <li className="ml-0 inline-block my-0 mx-[10px] list-none">
                    <Link
                      href={"#"}
                      className="text-[--dark-gray2] z-9 relative text-center flex items-center justify-center duration-300 ease-[cubic-bezier(.12,0,.39,0)] text-24 w-[60px] h-[60px] group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="24"
                        viewBox="0 0 12 22"
                        className="z-9"
                      >
                        <path
                          d="M7.2356 21H3.24211V12.6515H1V8.85502H3.24212V7.00415C3.60779 2.68418 4.62181 1.09657 7.9 1H9C9.81415 1.02296 10.2499 1.08512 11 1.27821V4.72672C8.27884 4.43103 7.50136 4.97358 7.2378 7.00415V8.84975H10.8594L10.2296 12.6585H7.2356V21Z"
                          fill="#2D2C2B"
                          stroke="#2D2C2B"
                          strokeWidth="0.1"
                          className="group-hover:fill-white duration-400"
                        />
                      </svg>
                      <span className="bg-[#3b5998] rounded-none block h-0 w-0 left-[50%] m-0 absolute top-[50%] transition-all duration-400 ease-[cubic-bezier(.12,0,.39,0)] group-hover:w-full group-hover:h-full group-hover:rounded-full group-hover:top-0 group-hover:left-0"></span>
                    </Link>
                  </li>
                  <li className="inline-block my-0 mx-[10px] list-none">
                    <Link
                      href={"#"}
                      className="text-[--dark-gray2] z-9 relative text-center flex items-center justify-center duration-300 ease-[cubic-bezier(.12,0,.39,0)] text-24 w-[60px] h-[60px] group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        className="z-9"
                      >
                        <path
                          className="group-hover:fill-white duration-400"
                          fill="#2D2C2B"
                          d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
                        />
                      </svg>
                      <span className="bg-[#00aced] rounded-none block h-0 w-0 left-[50%] m-0 absolute top-[50%] transition-all duration-400 ease-[cubic-bezier(.12,0,.39,0)] group-hover:w-full group-hover:h-full group-hover:rounded-full group-hover:top-0 group-hover:left-0"></span>
                    </Link>
                  </li>
                  <li className="inline-block my-0 mx-[10px] list-none">
                    <Link
                      href={"#"}
                      className="text-[--dark-gray2] z-9 relative text-center flex items-center justify-center duration-300 ease-[cubic-bezier(.12,0,.39,0)] text-24 w-[60px] h-[60px] group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        className="z-9"
                      >
                        <path
                          className="group-hover:fill-white duration-400"
                          fill="#2D2C2B"
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                        />
                      </svg>
                      <span className="bg-[#FE1F49] rounded-none block h-0 w-0 left-[50%] m-0 absolute top-[50%] transition-all duration-400 ease-[cubic-bezier(.12,0,.39,0)] group-hover:w-full group-hover:h-full group-hover:rounded-full group-hover:top-0 group-hover:left-0"></span>
                    </Link>
                  </li>
                  <li className="inline-block my-0 mx-[10px] list-none">
                    <Link
                      href={"#"}
                      className="text-[--dark-gray2] z-9 relative text-center flex items-center justify-center duration-300 ease-[cubic-bezier(.12,0,.39,0)] text-24 w-[60px] h-[60px] group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="24"
                        viewBox="0 0 14 14"
                        className="z-9"
                      >
                        <circle
                          cx="1.54379"
                          cy="1.54379"
                          r="1.54379"
                          fill="#2D2C2B"
                          className="group-hover:fill-white duration-400"
                        />
                        <rect
                          x="0.196503"
                          y="4.37875"
                          width="2.69462"
                          height="8.6733"
                          rx="0.3"
                          fill="#2D2C2B"
                          className="group-hover:fill-white duration-400"
                        />
                        <rect
                          x="4.57526"
                          y="4.37875"
                          width="2.69462"
                          height="8.6733"
                          rx="0.3"
                          fill="#2D2C2B"
                          className="group-hover:fill-white duration-400"
                        />
                        <path
                          d="M9.23469 4.15419C8.17159 4.43238 7.77591 4.74151 7.26987 5.44536V7.97158C7.42958 7.05026 7.84113 6.52652 8.67331 6.512H9.23469C9.85468 6.55344 10.278 6.95452 10.3574 7.97158V12.7547C10.3574 12.9204 10.4918 13.0547 10.6574 13.0547H12.6959C12.8616 13.0547 12.9959 12.9204 12.9959 12.7547V7.97158C13.039 6.57669 12.6475 4.78742 11.1995 4.3226C10.4938 4.08848 10.061 4.0587 9.23469 4.15419Z"
                          fill="#2D2C2B"
                          stroke="#2D2C2B"
                          strokeWidth="0.1"
                          className="group-hover:fill-white duration-400"
                        />
                      </svg>
                      <span className="bg-[#0077b5] rounded-none block h-0 w-0 left-[50%] m-0 absolute top-[50%] transition-all duration-400 ease-[cubic-bezier(.12,0,.39,0)] group-hover:w-full group-hover:h-full group-hover:rounded-full group-hover:top-0 group-hover:left-0"></span>
                    </Link>
                  </li>
                  <li className="inline-block my-0 mx-[10px] list-none mr-0">
                    <Link
                      href={"#"}
                      className="text-[--dark-gray2] z-9 relative text-center flex items-center justify-center duration-300 ease-[cubic-bezier(.12,0,.39,0)] text-24 w-[60px] h-[60px] group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="z-9"
                      >
                        <path
                          className="group-hover:fill-white duration-400"
                          fill="#2D2C2B"
                          d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"
                        />
                      </svg>
                      <span className="bg-[#1769ff] rounded-none block h-0 w-0 left-[50%] m-0 absolute top-[50%] transition-all duration-400 ease-[cubic-bezier(.12,0,.39,0)] group-hover:w-full group-hover:h-full group-hover:rounded-full group-hover:top-0 group-hover:left-0"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
