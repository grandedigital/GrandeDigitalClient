import Link from "next/link";

export default function Section1() {
  return (
    <section className="pb-[70px] pt-0">
      <div className="custom-container">
        <div className="row justify-center">
          <div className="px-[15px] w-full max-w-full mdx:w-[83.33333333%] mdx:flex-[0_0_auto]">
            <div className="row mb-[30px]">
              <div className="px-[15px] text-center w-full max-w-full md:w-[75%] md:flex-[0_0_auto] md:text-left max-md:mb-[15px]">
                <Link href={"#"} className="blog-tab-button"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
