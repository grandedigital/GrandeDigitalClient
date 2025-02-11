import Link from "next/link";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

export default function Content1() {
  return (
    <section className="max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row justify-center">
          <div className="px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[83.33333333%]">
            <div className="row">
              <div className="px-[15px] text-center w-full max-w-full mdx:w-1/4 md:flex-[0_0_auto] md:w-1/3 max-md:mb-[30px]">
                <div className="pb-[20px] flex flex-col items-center">
                  <img
                    src="/images/profilePhoto.jpg"
                    alt=""
                    className="mb-[20px] w-[130px] rounded-[50%] max-w-full h-auto"
                  />
                  <span className="leading-[22px] block">Words by</span>
                  <Link
                    href={"#"}
                    className="font-medium text-[--dark-gray2] font-spaceGrotesk duration-300 hover:text-[--base-color]"
                  >
                    JACKSON SMITH
                  </Link>
                </div>
                <div className="mb-[20px] h-[3px] w-full bg-[--dark-gray2]"></div>
                <ul className="justify-center flex pl-0 list-none mt-0 mb-[1rem]">
                  <li className="mr-[25px] list-none">
                    <Link
                      href={"#"}
                      className="text-13 font-spaceGrotesk duration-300 text-[--medium-gray] hover:text-[--base-color]"
                    >
                      <FaRegComment
                        size={18}
                        className="mr-[5px] inline-block"
                      />
                      {"COMMENT"}
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href={"#"}
                      className="text-13 font-spaceGrotesk duration-300 text-[--medium-gray] hover:text-[--base-color]"
                    >
                      <FaRegHeart size={18} className="mr-[5px] inline-block" />
                      {"LIKE"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-[15px] text-center w-full max-w-full md:text-left md:flex-[0_0_auto] md:w-[66.66666667%] mdx:ml-[8.33333333%]">
                <h3 className="font-semibold text-[--dark-gray2] font-spaceGrotesk max-md:mb-[25px]">
                  Make performance analysis an ongoing strategy.
                </h3>
                <p className="mb-[25px] mt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur.
                </p>
                <p className="mb-[25px] mt-0">
                  {
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo "
                  }
                  <span className="border-b border-solid border-[--dark-gray2] text-[--dark-gray2]">
                    inventore veritatis et quasi
                  </span>
                  {
                    " architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
