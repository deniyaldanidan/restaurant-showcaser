"use client";
import { InputHTMLAttributes, useState } from "react";
import { IoEyeOffOutline as InvisibleIcon } from "react-icons/io5";
import { IoEyeOutline as VisibleIcon } from "react-icons/io5";

type props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "className" | "style"
>;

export default function PasswordInput(props: props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="w-full h-fit relative">
      <input
        type={isVisible ? "text" : "password"}
        className="inp-base-classes"
        style={{ paddingRight: "2.5ch" }}
        {...props}
      />
      <button
        type="button"
        onClick={() => setIsVisible((prev) => !prev)}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-fit w-fit pr-2 text-bg text-xl z-[1] hover:text-primary"
      >
        {isVisible ? <InvisibleIcon /> : <VisibleIcon />}
      </button>
    </div>
  );
}
