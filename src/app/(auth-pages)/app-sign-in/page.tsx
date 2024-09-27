"use client";

import signIn from "@/actions/auth/signIn";
import InputGroupWrapper from "@/components/InputGroup/InputGroupWrapper";
import PasswordInput from "@/components/InputGroup/PasswordInput";
import { cinzel_decorative_reg } from "@/lib/fonts";
import myRoutes from "@/utils/myRoutes";
import { signInPageParser } from "@/utils/zod-valids";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z, ZodError } from "zod";

/**
 ** Things to do:
 * ? Validtion onSubmit x
 * ? Show loading state x
 * ? Show errors on each inp-grps x
 * ? Handle signIn & its error
 * ? take user to /dashboard on success
 */

export default function AppSignIn() {
  const router = useRouter();
  // * Input States
  const [usernameOrEmail, setusernameOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // * loading state
  const [loading, setLoading] = useState<boolean>(false);
  // * Error states
  const [rootErr, setRootErr] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<
    z.inferFlattenedErrors<typeof signInPageParser>["fieldErrors"]
  >({});

  const submitHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();
    // * reset error/loading states in here
    setRootErr("");
    setLoading(true);
    setFieldErrors({});
    try {
      const parsedData = signInPageParser.parse({
        usernameOrEmail,
        password,
      });
      const res = await signIn(parsedData);
      if (!res.success) {
        return setRootErr(res.error);
      }
      router.push(myRoutes.dashboard);
    } catch (error) {
      if (error instanceof ZodError) {
        return setFieldErrors(error.flatten().fieldErrors);
      }
      setRootErr("error happened");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 px-page-margin-x min-h-screen h-fit">
      <form
        className="h-fit w-full max-w-xl mx-auto flex flex-col gap-y-5 bg-sec-bg p-6 rounded-xl mobile-lg:px-4 mobile-lg:py-5"
        onSubmit={submitHandler}
      >
        <div className="mb-1.5">
          <h2
            className={clsx(
              cinzel_decorative_reg.className,
              "text-section-title text-center text-mid-sec-fg"
            )}
          >
            Sign In
          </h2>
          <p className="text-center text-base font-semibold -mt-1 text-danger">
            {rootErr}
          </p>
        </div>
        {/* Username Input */}
        <InputGroupWrapper
          inpId="sign-in-username-or-email-input"
          inpLabel="username or email"
          inpError={fieldErrors["usernameOrEmail"] ?? ""}
        >
          <input
            type="text"
            id="sign-in-username-or-email-input"
            className="inp-base-classes"
            placeholder="Your username or email here"
            value={usernameOrEmail}
            onChange={(e) => setusernameOrEmail(e.target.value)}
          />
        </InputGroupWrapper>
        {/* Password Input */}
        <InputGroupWrapper
          inpId="sign-in-password-input"
          inpLabel="Password"
          inpError={fieldErrors?.password ?? ""}
        >
          <PasswordInput
            id="sign-in-password-input"
            placeholder="Your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroupWrapper>
        {/* Submit Button */}
        <button className="btn btn-full btn-primary mt-2" disabled={loading}>
          {loading ? "---" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
