"use client";

import { FormEventHandler } from "react";

export default function SubscribeForm() {
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("subscribe form is submitted");
  };

  return (
    <form className="flex flex-col gap-y-5" onSubmit={submitHandler}>
      <label htmlFor="subscribe-input" className="font-semibold text-xl">
        Subscribe for Updates
      </label>
      <div className="flex gap-x-7">
        <div className="flex flex-col gap-y-1.5">
          <input
            type="text"
            id="subscribe-input"
            className="py-2.5 pl-2.5 pr-[70px] rounded-xl text-lg text-black font-medium placeholder:text-slate-700"
            placeholder="Enter your email here"
          />
          <p className="text-sm pl-2 font-medium text-red-600">
            error happened
          </p>
        </div>
        <button className="btn-secondary">Subscribe</button>
      </div>
    </form>
  );
}
