import refresh from "@/actions/auth/refresh";
import RoleGuard from "@/components/RoleGuard";
import { montserrat } from "@/lib/fonts";
import AuthProvider from "@/providers/AuthProvider";
import myRoutes from "@/utils/myRoutes";
import { ADMINFLAG } from "@/utils/types";
import { type Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
import "../globals.css";
import AuthedHeader from "@/components/Headers/AuthedHeader";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Dashboard - Odel Digest NGL",
  manifest: "/manifest.json",
  creator: "Deniyal Dani K",
  authors: [
    {
      name: "Deniyal Dani K",
      url: myRoutes.authorURL,
    },
  ],
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await refresh();
  // console.log(res);
  if (res.success === false) {
    redirect(myRoutes.home);
  }
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthProvider token={res.data.token}>
          <RoleGuard role={ADMINFLAG}>
            <QueryProvider>
              <AuthedHeader />
              <main className="px-page-margin-x py-11">{children}</main>
              <Toaster />
            </QueryProvider>
          </RoleGuard>
        </AuthProvider>
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
