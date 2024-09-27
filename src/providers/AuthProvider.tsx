"use client";

import AuthContext, { type AuthInfo } from "@/contexts/AuthContext";
import { accessPayloadParser } from "@/utils/zod-valids";
import { jwtDecode } from "jwt-decode";
import React, { useCallback, useEffect, useState } from "react";
import validator from "validator";

type props = {
  token: string;
  children: React.ReactNode;
};

export default function AuthProvider({ token, children }: props) {
  const [authInfo, setAuthInfo] = useState<AuthInfo>({ status: "loading" });

  const signInUser = useCallback((myToken: string) => {
    if (!validator.isJWT(myToken)) {
      resetAuth();
      return;
    }
    const parsedRes = accessPayloadParser.safeParse(jwtDecode(myToken));
    if (parsedRes.success === false) {
      resetAuth();
      return;
    }
    const { data: parsedData } = parsedRes;
    setAuthInfo({ status: true, data: { token: myToken, ...parsedData } });
    return;
  }, []);

  useEffect(() => {
    if (authInfo.status === "loading") {
      signInUser(token);
    }
  }, [token, signInUser, authInfo]);

  function resetAuth() {
    setAuthInfo({ status: false });
  }

  return (
    <AuthContext.Provider
      value={{
        authInfo,
        signInUser,
        resetAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
