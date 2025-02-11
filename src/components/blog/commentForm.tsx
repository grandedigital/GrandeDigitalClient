"use client";

import { FormEvent, useEffect, useState } from "react";

export default function CommentForm() {
  const [isSuccesMessageActive, setIsSuccesMessageActive] = useState(false);
  const [isFormSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isFirstFocusedNameInput, setFirstFocusedNameInput] = useState(false);
  const [isFirstFocusedEmailInput, setFirstFocusedEmailInput] = useState(false);

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

  const resetForm = () => {
    setName("");
    setEmail("");
    setNameValid(false);
    setEmailValid(false);
    setFirstFocusedNameInput(false);
    setFirstFocusedEmailInput(false);
    setMessage("");
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault(); // Form gönderildiğinde sayfa yenilenmesin
    if (isNameValid && isEmailValid) {
      console.log("gönder");
      resetForm();
      setIsSuccesMessageActive(true);
    } else {
      console.log("gonderme");
      calculateinValitedInputs();
    }
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

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleBlurNameInput = () => {
    setFirstFocusedNameInput(true);

    if (name.length > 0) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleBlurEmailInput = () => {
    setFirstFocusedEmailInput(true);
    setEmailValid(emailRegex.test(email));
  };

  return (
    <section className="pt-0">
      <div className="custom-container">
        <div className="row justify-center">
          <div className="mb-[3%] px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[75%] max-md:mb-[6%]">
            <h6 className="font-medium mb-[5px] text-[--dark-gray2] font-spaceGrotesk">
              Write a comment
            </h6>
            <div className="mb-[5px]">
              Your email address will not be published. Required fields are
              marked *
            </div>
          </div>
        </div>
        <div className="row justify-center">
          <div className="px-[15px] w-full max-w-full mdx:flex-[0_0_auto] mdx:w-[75%]">
            <form onSubmit={(e) => submitForm(e)} className="row ">
              <div className="mb-[30px] px-[15px] w-full max-w-full md:flex-[0_0_auto] md:w-1/2">
                <input
                  onChange={handleChangeName}
                  onBlur={handleBlurNameInput}
                  autoComplete="off"
                  value={name}
                  type="text"
                  name="name"
                  placeholder="Enter your name*"
                  className="rounded-[4px] py-[12px] px-[25px] w-full max-w-full resize-none outline-0 text-16 border border-solid border-[#e4e4e4] text-[--medium-gray] leading-[inherit] break-normal duration-300 [background-position:_right_20px_center] font-normal appearance-none bg-clip-padding bg-[--bs-body-bg] block m-0 font-[inherit]"
                  style={{
                    borderColor: isNameValid
                      ? "#198754"
                      : isFirstFocusedNameInput
                      ? "#dc3545"
                      : "#e4e4e4",
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
              <div className="mb-[30px] px-[15px] w-full max-w-full md:flex-[0_0_auto] md:w-1/2">
                <input
                  onChange={handleChangeEmail}
                  onBlur={handleBlurEmailInput}
                  value={email}
                  autoComplete="off"
                  type="text"
                  name="email"
                  placeholder="Enter your email address*"
                  className="rounded-[4px] py-[12px] px-[25px] w-full max-w-full resize-none outline-0 text-16 border border-solid border-[#e4e4e4] text-[--medium-gray] leading-[inherit] break-normal duration-300 [background-position:_right_20px_center] font-normal appearance-none bg-clip-padding bg-[--bs-body-bg] block m-0 font-[inherit]"
                  style={{
                    borderColor: isEmailValid
                      ? "#198754"
                      : isFirstFocusedEmailInput
                      ? "#dc3545"
                      : "#e4e4e4",
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
              <div className="mb-[30px] px-[15px] w-full max-w-full md:flex-[0_0_auto] md:w-full">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  cols={40}
                  rows={4}
                  placeholder="Your message"
                  className="rounded-[4px] py-[12px] px-[25px] w-full max-w-full resize-none outline-0 text-16 border border-solid border-[#e4e4e4] text-[--medium-gray] leading-[inherit] break-normal duration-300 [background-position:_right_20px_center] font-normal appearance-none bg-clip-padding bg-[--bs-body-bg] block m-0 font-[inherit]"
                ></textarea>
              </div>
              <div className="px-[15px] flex-[0_0_auto] w-full max-w-full">
                <button
                  type="submit"
                  className="bg-[--dark-gray2] text-white rounded-[4px] text-12 py-[13px] px-[26px] cursor-pointer border-2 border-solid border-transparent tracking-[.5px] w-auto font-spaceGrotesk transition-all duration-300 ease-in-out font-medium leading-[1.5] select-none"
                >
                  Post Comment
                </button>
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
        </div>
      </div>
    </section>
  );
}
