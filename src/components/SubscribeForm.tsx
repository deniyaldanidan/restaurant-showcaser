"use client";

import subscribeAction from "@/actions/general/subscribe-action";
import { useToast } from "@/hooks/use-toast";
import { emailParser } from "@/utils/zod-valids";
import { FormEventHandler, useState } from "react";
import { z, ZodError } from "zod";

export default function SubscribeForm() {
  const [emailInp, setEmailInp] = useState<string>("");
  const [errorState, setErrorState] = useState<string | string[]>("");
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const { toast } = useToast();

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    console.log("subscribe form is submitted");
    setErrorState("");
    setLoadingState(true);
    try {
      const parsedEmail = emailParser.parse(emailInp);
      const res = await subscribeAction(parsedEmail);
      if (!res.success) {
        setErrorState(res.error);
        return;
      }
      setEmailInp("");
      toast({
        title: "Subscribed",
        description: "Thank you for subscribing",
        variant: "default",
        className: "text-[#2b3]",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        setErrorState("Invalid email");
        return;
      }
      console.log(error);
      setErrorState("error happened, Try again.");
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-y-3.5 mobile-lg:items-start mobile-lg:gap-y-3"
      onSubmit={submitHandler}
      role="form"
      aria-label="Subscribe for updates form"
    >
      <label
        htmlFor="subscribe-input"
        className="font-semibold text-xl laptop-sm:text-lg"
        aria-label="Subscribe for updates"
      >
        Subscribe for Updates
      </label>
      <div className="flex gap-x-7 mobile-lg:flex-col mobile-lg:items-start mobile-lg:gap-y-2.5">
        <div className="flex flex-col gap-y-1 mobile-lg:w-full">
          <input
            type="text"
            id="subscribe-input"
            className="py-1.5 pl-2.5 pr-3 min-w-64 rounded-xl text-base text-black font-medium placeholder:text-slate-700"
            placeholder="Enter your email here"
            aria-placeholder="Enter your email here"
            value={emailInp}
            onChange={(e) => setEmailInp(e.target.value)}
          />
          <p className="text-sm pl-2 font-medium text-red-600 flex flex-col gap-y-0.5">
            {typeof errorState === "string"
              ? errorState
              : errorState.map((err) => <span key={err}>{err}</span>)}
          </p>
        </div>
        <button
          className="btn btn-xs btn-secondary"
          type="submit"
          disabled={loadingState}
          aria-label="Submit button for Subscribe for updates form"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
