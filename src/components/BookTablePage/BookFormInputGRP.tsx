"use client";

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type props = {
  inputProps: Omit<InputHTMLAttributes<HTMLInputElement>, "className">;
  labelText: string;
  error: string | string[];
};

export default function BookFormInputGRP(props: props) {
  return (
    <div
      className="flex flex-col gap-y-2.5 min-w-64 w-full text-foreground"
      role="group"
      aria-label={`${props.labelText} input group`}
    >
      <label
        htmlFor={props.inputProps.id}
        className="text-lg text-mid-sec-fg font-semibold capitalize mobile:text-base"
        aria-label={props.labelText}
      >
        {props.labelText}
      </label>
      <input
        {...props.inputProps}
        className={clsx(
          "bg-transparent outline-none border-b-2 px-2 pt-0 pb-1.5 text-mid-sec-fg text-base font-medium placeholder:text-placeholder duration-150 focus:border-b-mid-sec-fg focus:text-high-fg dark:[color-scheme:dark]",
          props.error.length && "border-b-danger"
        )}
      />
      <p className="text-sm font-semibold text-danger flex flex-col gap-y-0.5">
        {typeof props.error === "string"
          ? props.error
          : props.error.map((err, i) => <span key={i}>{err}</span>)}
      </p>
    </div>
  );
}
