"use client";

import { accessPayloadParser } from "@/utils/zod-valids";
import React from "react";
import { z } from "zod";

export type AuthInfo =
  | { status: false }
  | { status: "loading" }
  | {
      status: true;
      data: {
        token: string;
      } & z.infer<typeof accessPayloadParser>;
    };

const AuthContext = React.createContext<{
  authInfo: AuthInfo;
  signInUser: (token: string) => void;
  resetAuth: () => void;
}>({
  authInfo: { status: "loading" },
  signInUser: () => {},
  resetAuth: () => {},
});

export default AuthContext;
