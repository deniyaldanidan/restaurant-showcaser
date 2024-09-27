"use client";

import signUp from "@/actions/auth/signUp";
import InputGroupWrapper from "@/components/InputGroup/InputGroupWrapper";
import PasswordInput from "@/components/InputGroup/PasswordInput";
import { cinzel_decorative_reg } from "@/lib/fonts";
import myRoutes from "@/utils/myRoutes";
import { signUpParser } from "@/utils/zod-valids";
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
 * ? Handle signUp & its error
 * ? take user to /app-sign-in on success
 */

export default function AppSignUp() {
  const router = useRouter();
  // * Input States
  const [name, setName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  // * loading state
  const [loading, setLoading] = useState<boolean>(false);
  // * Error states
  const [rootErr, setRootErr] = useState<string>("");
  const [confirmErr, setConfirmErr] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<
    z.inferFlattenedErrors<typeof signUpParser>["fieldErrors"]
  >({});

  const submitHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();
    // * reset error/loading states in here
    setRootErr("");
    setConfirmErr("");
    setFieldErrors({});
    if (password !== confirm) {
      setConfirmErr("Values does not match");
      return;
    }
    setLoading(true);
    try {
      const parsedData = signUpParser.parse({
        name,
        userName,
        email,
        password,
      });
      const res = await signUp(parsedData);
      if (!res.success) {
        return setRootErr(res.error);
      }
      router.push(myRoutes.signIn);
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
        className="h-fit w-full max-w-2xl mx-auto flex flex-col gap-y-5 bg-sec-bg p-6 rounded-xl mobile-lg:px-4 mobile-lg:py-5"
        onSubmit={submitHandler}
      >
        <div className="mb-1.5">
          <h2
            className={clsx(
              cinzel_decorative_reg.className,
              "text-section-title text-center"
            )}
          >
            Sign Up
          </h2>
          <p className="text-center text-base -mt-1 text-danger">{rootErr}</p>
        </div>
        {/* Name Input */}
        <InputGroupWrapper
          inpId="sign-up-name-input"
          inpLabel="Name"
          inpError={fieldErrors["name"] ?? ""}
        >
          <input
            type="text"
            id="sign-up-name-input"
            className="inp-base-classes"
            placeholder="Your fullname here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroupWrapper>
        {/* Username Input */}
        <InputGroupWrapper
          inpId="sign-up-username-input"
          inpLabel="username"
          inpError={fieldErrors["userName"] ?? ""}
        >
          <input
            type="text"
            id="sign-up-username-input"
            className="inp-base-classes"
            placeholder="Your username here"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </InputGroupWrapper>
        {/* Email Input */}
        <InputGroupWrapper
          inpId="sign-up-email-input"
          inpLabel="Email"
          inpError={fieldErrors?.email ?? ""}
        >
          <input
            type="email"
            id="sign-up-email-input"
            className="inp-base-classes"
            placeholder="Your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroupWrapper>
        {/* Password Input */}
        <InputGroupWrapper
          inpId="sign-up-password-input"
          inpLabel="Password"
          inpError={fieldErrors?.password ?? ""}
        >
          <PasswordInput
            id="sign-up-password-input"
            placeholder="Your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroupWrapper>
        {/* Confirm-Password Input */}
        <InputGroupWrapper
          inpId="sign-up-confirm-input"
          inpLabel="Retype Password"
          inpError={confirmErr}
        >
          <PasswordInput
            id="sign-up-confirm-input"
            placeholder="Retype password here"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </InputGroupWrapper>
        {/* Submit Button */}
        <button className="btn btn-full btn-primary mt-2" disabled={loading}>
          {loading ? "---" : "Sign Up"}
        </button>
        {/* SignIn-Info */}
        <p className="text-base font-semibold text-mid-sec-text text-center">
          Already have an account{" "}
          <Link
            href={myRoutes.signIn}
            className="text-high-text underline underline-offset-1 hover:text-accent"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}
