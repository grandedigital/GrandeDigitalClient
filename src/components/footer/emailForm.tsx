"use client";
import { FormEvent, useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function EmailForm() {
  const [email, setEmail] = useState(""); // Email state'i
  const [isFocused, setIsFocused] = useState(false); // Focus durumu
  const [isValid, setIsValid] = useState(true); // E-posta geçerliliği
  const [sentEmail, setSentEmail] = useState(false); // E-posta geçerliliği

  // Email formatını kontrol etmek için basit bir regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleBlur = () => {
    setIsFocused(false); // Focus bittikçe, odak durumunu güncelle
    setIsValid(emailRegex.test(email)); // E-posta formatını kontrol et
  };

  const handleFocus = () => {
    setIsFocused(true); // Odaklanıldığında, focus durumunu güncelle
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault(); // Form gönderildiğinde sayfa yenilenmesin
    if (isValid && !sentEmail && email != "") {
      setSentEmail(true);
      console.log("form gönderildi");

      setTimeout(() => {
        setSentEmail(false);
        setEmail("");
      }, 2000);
    }

    if (email == "") {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="w-full relative">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        type="email"
        placeholder="Enter your email..."
        className={`bg-inherit pr-[50px] text-14 rounded w-full py-[7px] px-[15px] max-w-full resize-none outline-0 border text-[--medium-gray] leading-[inherit] break-normal duration-300 font-normal block m-0 font-[inherit] ${
          !isValid ? "border-red-500" : "border-[#e4e4e4]"
        }`}
      />
      <button
        type="submit"
        className="p-[10px_15px_9px_15px] top-0 rounded-[0_4px_4px_0] inline-block absolute h-full right-0 cursor-pointer border-[2px] border-transparent uppercase tracking-[.5px] w-auto font-spaceGrotesk transition-all duration-300 ease-in-out font-medium text-center bg-transparent m-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="top-[inherit] ml-0 relative text-18"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
        </svg>
      </button>
      <div
        className={`${
          sentEmail ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        } bg-[#f1fbec] text-[#54b783] border-[#cce8b3] mt-[10px] px-[15px] py-[5px] w-full rounded leading-[22px] text-14 text-center absolute transition-all duration-1000`}
      >
        Your message has been sent successfully subscribed to our email list!
      </div>
    </form>
  );
}
