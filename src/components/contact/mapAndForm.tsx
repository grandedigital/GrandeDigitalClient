"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState, useRef } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { mapValue } from "@/utils/global";

export default function MapAndForm({
  helloTexts = ["hello!", "halla!", "salve!"],
}) {
  const [activeHelloMessageIndex, setActiveHelloMessageIndex] = useState(0);
  const [isStartedHelloTextAnimation, setStartedHelloTextAnimation] =
    useState(false);
  const [isAnimationsPassive, setIsAnimationsPassive] = useState(false);
  const [imageTranslateYValue, setTranslateYValue] = useState(80);
  const mapAndFormRef = useRef(null);
  const contactImg = useRef<HTMLImageElement | null>(null);
  const mapAndFormViewArea = useInView(mapAndFormRef, {
    once: true,
    amount: 0.01,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);

  const [isFirstFocusedNameInput, setFirstFocusedNameInput] = useState(false);
  const [isFirstFocusedEmailInput, setFirstFocusedEmailInput] = useState(false);

  const [isSuccesMessageActive, setIsSuccesMessageActive] = useState(false);
  const [isFormSent, setFormSent] = useState(false);

  // Email formatını kontrol etmek için basit bir regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const calculateinValitedInputs = () => {
    if (name.length == 0) {
      setFirstFocusedNameInput(true);
    }

    if (!emailRegex.test(email)) {
      setFirstFocusedEmailInput(true);
    }
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault(); // Form gönderildiğinde sayfa yenilenmesin
    if (isNameValid && isEmailValid) {
      console.log("gönder");
      setIsSuccesMessageActive(true);
    } else {
      calculateinValitedInputs();
    }
  };

  const handleBlurNameInput = () => {
    setFirstFocusedNameInput(true);

    if (name.length > 0) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const handleBlurEmailInput = () => {
    setFirstFocusedEmailInput(true);
    setEmailValid(emailRegex.test(email));
  };

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (isSuccesMessageActive) {
      setTimeout(() => {
        setFormSent(true);
      }, 50);
      setTimeout(() => {
        setFormSent(false);
      }, 2000);
      setTimeout(() => {
        setIsSuccesMessageActive(false);
      }, 3000);
    }
  }, [isSuccesMessageActive]);

  useEffect(() => {
    setIsAnimationsPassive(window.innerWidth < 1217);
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      if (contactImg.current) {
        if (
          contactImg.current.getBoundingClientRect().top < windowHeight &&
          contactImg.current.getBoundingClientRect().top >
            0 - contactImg.current.getBoundingClientRect().height
        ) {
          setTranslateYValue(
            mapValue(
              contactImg.current.getBoundingClientRect().top,
              0 - contactImg.current.getBoundingClientRect().height,
              windowHeight,
              200,
              80
            )
          );
        }
        //hesaplanıp set edilcek yapılacak, yapılcak iş
      }
    };
    const intervalId = setInterval(() => {
      setActiveHelloMessageIndex((prevCount) =>
        prevCount + 1 > helloTexts.length - 1 ? 0 : prevCount + 1
      );
      setStartedHelloTextAnimation(true);
      setTimeout(() => {
        setStartedHelloTextAnimation(false);
      }, 2000);
    }, 3000);

    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="p-0">
      <div className="p-0 w-full mx-auto">
        <div ref={mapAndFormRef} className="row mx-0">
          <motion.div
            initial={!isAnimationsPassive && { translateX: -50, opacity: 0 }}
            animate={
              !isAnimationsPassive && {
                translateX: mapAndFormViewArea ? 0 : -50,
                opacity: mapAndFormViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
            onAnimationComplete={() =>
              mapAndFormViewArea && setStartedHelloTextAnimation(true)
            }
            className="px-0 w-full max-w-full lgx:flex-[0_0_auto] lgx:w-1/2 bg-blue-300 bg-[url(/images/map.png)] bg-cover max-lgx:h-[600px] max-md:h-[400px] max-xsm:h-[300px] relative"
          >
            <Link
              className="bg-[--dark-gray2] text-white rounded-[4px] text-13 py-[8px] px-[30px] cursor-pointer border-2 border-transparent uppercase tracking-[.5px] font-spaceGrotesk transition-all duration-300 ease-in-out shadow-[0 5px_20px_rgba(0,0,0,.1)] font-medium inline-block text-center align-middle select-none m-0 leading-[1.5] relative top-[20px] left-[10px] hover:top-[15px]"
              href={"https://maps.app.goo.gl/jrspCJMckSJ18q3w7"}
              target="_blank"
            >
              Map
            </Link>
          </motion.div>
          <motion.div
            initial={!isAnimationsPassive && { translateX: -50, opacity: 0 }}
            animate={
              !isAnimationsPassive && {
                translateX: mapAndFormViewArea ? 0 : -50,
                opacity: mapAndFormViewArea ? 1 : 0,
              }
            }
            transition={{ duration: 0.8, delay: 0.45 }}
            className="px-0 relative w-full max-w-full xxl:flex-[0_0_auto] xxl:w-1/3 lgx:flex-[0_0_auto] lgx:w-1/2"
          >
            <img
              ref={contactImg}
              className="right-[-40%] z-9 transition-all duration-1500 ease-[cubic-bezier(.23,1,.32,1)] absolute hidden max-w-full h-auto xxl:block"
              src="/images/contactImg.webp"
              alt=""
              style={{
                transform: `translate3d(0px,${imageTranslateYValue}px,0px)`,
              }}
            />
            <div className="z-1 p-[14%] bg-[--base-color] shadow-[0_0_45px_rgba(0,0,0,.09)] transition-all duration-350 ease-[cubic-bezier(.37,0,.63,1)] relative overflow-hidden max-lgx:p-[10%] max-md:p-[30px]">
              <h2 className="font-bold mb-[30px] tracking-[-2px] text-[--dark-gray2] text-[4.375rem] leading-[4.375rem] font-spaceGrotesk mt-0 md:mb-[20px]">
                {"Say "}
                {/* <span className="">hello!</span> */}
                {helloTexts[activeHelloMessageIndex]
                  .split("")
                  .map((item, index) => (
                    <motion.span
                      initial={{ opacity: 0, rotateX: 90 }}
                      animate={{
                        opacity: isStartedHelloTextAnimation ? 1 : 0,
                        rotateX: isStartedHelloTextAnimation ? 0 : 90,
                      }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onAnimationComplete={() =>
                        isStartedHelloTextAnimation &&
                        setTimeout(() => {
                          setStartedHelloTextAnimation(false);
                        }, 1700)
                      }
                      className="inline-block"
                      key={index}
                    >
                      {item}
                    </motion.span>
                  ))}
              </h2>
              <form onSubmit={(e) => submitForm(e)}>
                <div className="mb-[20px] relative">
                  <input
                    onChange={handleChangeName}
                    onBlur={handleBlurNameInput}
                    value={name}
                    type="text"
                    placeholder="Enter your name*"
                    autoComplete="off"
                    name="name"
                    className="outline-0 border-solid border-b [background:_0_0] border-[--light-red] rounded-none py-[12px] px-[25px] w-full max-w-full resize-none text-16 text-[--medium-gray] placeholder-[--medium-gray] leading-[inherit] break-normal transition-all duration-300 bg-transparent pl-0 appearance-none block m-0 "
                    style={{
                      borderColor: isNameValid
                        ? "var(--light-red)"
                        : isFirstFocusedNameInput
                        ? "#dc3545"
                        : "var(--light-red)",
                      backgroundImage: isNameValid
                        ? "url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyMxOTg3NTQnIGQ9J00yLjMgNi43My42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPg==)"
                        : isFirstFocusedNameInput
                        ? "url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAxMicgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPSdub25lJyBzdHJva2U9JyNkYzM1NDUnPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI2RjMzU0NScgc3Ryb2tlPSdub25lJy8+PC9zdmc+)"
                        : "none",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 35px center",
                      backgroundSize:
                        "calc(.75em + .375rem) calc(.75em + .375rem)",
                    }}
                  />
                </div>
                <div className="mb-[20px] relative">
                  <input
                    onChange={handleChangeEmail}
                    onBlur={handleBlurEmailInput}
                    value={email}
                    type="text"
                    placeholder="Enter your email*"
                    autoComplete="off"
                    name="email"
                    className="placeholder-[--medium-gray] outline-0 border-solid border-b [background:_0_0] border-[--light-red] rounded-none py-[12px] px-[25px] w-full max-w-full resize-none text-16 text-[--medium-gray] leading-[inherit] break-normal transition-all duration-300 bg-transparent pl-0 appearance-none block m-0"
                    style={{
                      borderColor: isEmailValid
                        ? "var(--light-red)"
                        : isFirstFocusedEmailInput
                        ? "#dc3545"
                        : "var(--light-red)",
                      backgroundImage: isEmailValid
                        ? "url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyMxOTg3NTQnIGQ9J00yLjMgNi43My42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPg==)"
                        : isFirstFocusedEmailInput
                        ? "url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAxMicgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPSdub25lJyBzdHJva2U9JyNkYzM1NDUnPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI2RjMzU0NScgc3Ryb2tlPSdub25lJy8+PC9zdmc+)"
                        : "none",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 35px center",
                      backgroundSize:
                        "calc(.75em + .375rem) calc(.75em + .375rem)",
                    }}
                  />
                </div>
                <div className="z-1 mt-[15px] mb-0 relative">
                  <textarea
                    name="comment"
                    rows={3}
                    placeholder="Enter your message"
                    autoComplete="off"
                    className="placeholder-[--medium-gray] resize-none outline-0 border-b border-solid [background:_0_0] border-[--light-red] rounded-none py-[12px] px-[25px] w-full max-w-full text-16 text-[--medium-gray] leading-[inherit] break-words transition-all duration-300 bg-transparent pl-0 appearance-none block m-0"
                    style={{ backgroundPosition: "right 35px center" }}
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-[--dark-gray2] text-white rounded-[4px] text-13 py-[16px] px-[30px] cursor-pointer border-2 border-transparent uppercase tracking-[.5px] font-spaceGrotesk transition-all duration-300 ease-in-out shadow-[0 5px_20px_rgba(0,0,0,.1)] font-medium inline-block mb-[20px] mt-[25px] w-full text-center align-middle select-none m-0 leading-[1.5] hover:translate-y-[-3px]"
                  >
                    {"Send message"}
                    <HiOutlineMail
                      size={16}
                      className="relative ml-[6px] inline-block"
                    />
                  </button>
                  <p className="mb-0 w-[90%] leading-[22px] text-13 mt-0 max-mdx:w-full">
                    {
                      "I understand that my data will be hold securely in accordance with the "
                    }
                    <Link
                      href={"#"}
                      className="font-medium border-b border-solid text-[--dark-gray2] transition-all duration-300 border-[--dark-gray2]"
                    >
                      privacy policy.
                    </Link>
                  </p>
                  <div
                    className="bg-[#f1fbec] text-[#54b783] border-[#cce8b3] p-[20px_25px_20px_30px] mb-[30px] leading-[22px] relative z-1 rounded-[4px] mt-[20px] border border-solid transition-all duration-600"
                    style={{
                      opacity: isFormSent ? 1 : 0,
                      display: isSuccesMessageActive ? "block" : "none",
                    }}
                  >
                    Your message has been sent successfully!
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
