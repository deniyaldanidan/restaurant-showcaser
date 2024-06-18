import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odel Digest Restaurant - Nagercoil",
  description:
    "Welcome to Odel Digest Restaurant, One of the best restaurants in nagercoil. Come and visit us for an delightful experience",
  manifest: "/manifest.json",
  creator: "Deniyal Dani K",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
