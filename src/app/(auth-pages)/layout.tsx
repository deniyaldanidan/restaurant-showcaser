import { montserrat } from "@/lib/fonts";
import React from "react";
import "../globals.css";
import { type Metadata } from "next";
import myRoutes from "@/utils/myRoutes";
import LabelHeader from "@/components/Headers/LabelHeader";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In",
  manifest: "/manifest.json",
  creator: "Deniyal Dani K",
  authors: [
    {
      name: "Deniyal Dani K",
      url: myRoutes.authorURL,
    },
  ],
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <LabelHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
