"use client";

import useAuthContext from "@/hooks/useAuthContext";
import myRoutes from "@/utils/myRoutes";
import { redirect } from "next/navigation";
import React from "react";
import LoadingInfo from "./LoadingInfo";

type props = {
  role: string;
  children: React.ReactNode;
};

export default function RoleGuard({ role, children }: props) {
  const { authInfo } = useAuthContext();

  if (authInfo.status === "loading") {
    return <LoadingInfo />;
  }

  if (authInfo.status === false || authInfo.data?.role !== role) {
    redirect(myRoutes.home);
  }

  return <>{children}</>;
}
