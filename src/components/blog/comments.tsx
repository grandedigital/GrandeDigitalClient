import Link from "next/link";

//bu bileşen dataya bağlanınca veriler (li ler map ettirilecek) first ve last itemlerin class ları farklı olacak dikkat edilmesi lazım
export default function Comments() {
  return (
    <section>
      <div className="custom-container">
        <div className="row justify-center">
          <div className="mb-[2%] px-[15px] text-center w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[75%]">
            <h6 className="font-medium text-[--dark-gray2] font-spaceGrotesk">
              4 Comments
            </h6>
          </div>
        </div>
        <div className="row justify-center">
          <div className="px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[75%]">
            <ul className="pl-0 mb-0 mt-0">
              <li className="pb-[65px] relative list-none max-md:pb-[50px]">
                <div className="w-full items-center block md:items-start md:flex">
                  <div className="w-[90px] max-md:mb-[10px] max-md:w-[65px]">
                    <img
                      src="/images/avtar-18.jpg"
                      alt=""
                      className="rounded-[50%] max-w-full h-auto"
                    />
                  </div>
                  <div className="pl-[30px] w-full max-md:pl-0">
                    <Link
                      href={"#"}
                      className="font-medium text-[--dark-gray2] duration-300"
                    >
                      Herman Miller
                    </Link>
                    <Link
                      href={"#"}
                      className="float-right text-11 leading-[initial] p-[7px_20px_6px] rounded-[50px] border border-[rgba(44,44,44,.25)] border-solid duration-300 text-[--medium-gray]"
                    >
                      Reply
                    </Link>
                    <div className="mb-[10px] leading-[24px] text-14">
                      17 July 2020, 6:05 PM
                    </div>
                    <p className="w-[85%] mt-0 mb-0 max-md:w-full">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem ipsum has been the industry's
                      standard dummy text ever since the make book.
                    </p>
                  </div>
                </div>
                <ul className="list-none ml-[70px] mb-0 pl-[2rem] mt-0 max-xsm:ml-[20px] max-xsm:pl-[20px]">
                  <li className="mt-[60px] pb-0 relative list-none max-md:mt-[45px]">
                    <div className="w-full items-center block md:items-start md:flex">
                      <div className="w-[90px] max-md:mb-[10px] max-md:w-[65px]">
                        <img
                          src="/images/avtar-19.jpg"
                          alt=""
                          className="rounded-[50%] max-w-full h-auto"
                        />
                      </div>
                      <div className="pl-[30px] w-full max-md:pl-0">
                        <Link
                          href={"#"}
                          className="font-medium text-[--dark-gray2] duration-300"
                        >
                          Wilbur Haddock
                        </Link>
                        <Link
                          href={"#"}
                          className="float-right text-11 leading-[initial] p-[7px_20px_6px] rounded-[50px] border border-solid border-[rgba(44,44,44,.25)] bg-white duration-300"
                        >
                          Reply
                        </Link>
                        <div className="mb-[10px] leading-[24px] text-14">
                          18 July 2020, 10:19 PM
                        </div>
                        <p className="mb-0 w-[85%] mt-0 max-md:w-full">
                          Lorem ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem ipsum has been the
                          industry's standard dummy text ever since.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-[60px] pb-0 relative list-none max-md:mt-[45px]">
                    <div className="p-[50px] w-full rounded-[5px] bg-[--very-light-gray] items-center block md:items-start md:flex max-mdx:p-[30px] max-md:p-[20px]">
                      <div className="w-[90px] max-md:mb-[10px] max-md:w-[65px]">
                        <img
                          src="/images/avtar-17.jpg"
                          alt=""
                          className="rounded-[50%] max-w-full h-auto"
                        />
                      </div>
                      <div className="pl-[30px] w-full max-md:pl-0">
                        <Link
                          href={"#"}
                          className="font-medium text-[--dark-gray2] duration-300"
                        >
                          Colene Landin
                        </Link>
                        <Link
                          href={"#"}
                          className="float-right text-11 leading-[initial] p-[7px_20px_6px] rounded-[50px] border border-[rgba(44,44,44,.25)] border-solid duration-300 text-[--medium-gray]"
                        >
                          Reply
                        </Link>
                        <div className="mb-[10px] leading-[24px] text-14">
                          18 July 2020, 12:39 PM
                        </div>
                        <p className="mb-0 w-[85%] mt-0 max-md:w-full">
                          Lorem ipsum is simply dummy text of the printing and
                          typesetting industry. Ipsum has been the industry's
                          standard dummy text.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                className={`${
                  true ? "pb-0" : "pb-[65px]"
                } relative list-none max-md:pb-[50px]`} //son eleman ise pb-0 olcak
              >
                <div className="w-full items-center block md:items-start md:flex">
                  <div className="w-[90px] max-md:mb-[10px] max-md:w-[65px]">
                    <img
                      src="/images/avtar-18 (1).jpg"
                      alt=""
                      className="rounded-[50%] max-w-full h-auto"
                    />
                  </div>
                  <div className="pl-[30px] w-full max-md:pl-0">
                    <Link
                      href={"#"}
                      className="font-medium text-[--dark-gray2] duration-300"
                    >
                      Jennifer Freeman
                    </Link>
                    <Link
                      href={"#"}
                      className="float-right text-11 leading-[initial] p-[7px_20px_6px] rounded-[50px] border border-[rgba(44,44,44,.25)] border-solid duration-300 text-[--medium-gray]"
                    >
                      Reply
                    </Link>
                    <div className="mb-[10px] leading-[24px] text-14">
                      19 July 2020, 8:25 PM
                    </div>
                    <p className="mb-0 w-[85%] mt-0 max-md:w-full">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem ipsum has been the industry's
                      standard dummy text ever since the make a type specimen
                      book.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
