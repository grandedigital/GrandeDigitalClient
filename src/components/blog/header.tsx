import Link from "next/link";

export default function Header() {
  return (
    <section className="mt-[109px] max-2xl:py-[90px] max-mdx:py-[75px] max-md:py-[50px]">
      <div className="custom-container">
        <div className="row justify-center">
          <div className="px-[15px] text-center w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[83.33333333%]">
            <span className="mb-[30px] text-18 inline-block max-md:mb-[20px]">
              {"By "}
              <Link
                href={"#"}
                className="border-b border-solid text-[--dark-gray2] duration-300 border-[--dark-gray2]"
              >
                Jackson
              </Link>
              {" In "}
              <Link
                href={"#"}
                className="border-b border-solid text-[--dark-gray2] duration-300 border-[--dark-gray2]"
              >
                Marketing
              </Link>
              {" on 26 November 2021"}
            </span>
            <h1 className="font-semibold tracking-[-2px] text-[--dark-gray2] font-spaceGrotesk mb-0 mt-0">
              Marketing tips and tricks for your creative website.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
