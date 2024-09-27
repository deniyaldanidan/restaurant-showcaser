import type { Metadata } from "next";
import "../globals.css";
import { cinzel_decorative_bold, montserrat } from "@/lib/fonts";
import Footer from "@/components/Footer";
import myRoutes from "@/utils/myRoutes";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Odel Digest Restaurant - Nagercoil",
  description:
    "Welcome to Odel Digest Restaurant, One of the best restaurants in nagercoil. Come and visit us for an delightful experience",
  manifest: "/manifest.json",
  creator: "Deniyal Dani K",
  authors: [{ name: "Deniyal Dani K", url: myRoutes.authorURL }],
};

const MyHeader = dynamic(() => import("@/components/Headers/Header"), {
  ssr: false,
  loading: () => (
    <header
      className="py-3.5 px-page-margin-x bg-sec-bg flex justify-between items-center gap-x-7 border-b-2"
      role="banner"
      aria-label="Main Header"
    >
      <h1
        className={`${cinzel_decorative_bold.className} flex flex-col gap-y-1`}
        aria-label="Logo of Odel Digest Restaurant - Nagercoil"
      >
        <span className="text-logo">Odel Digest</span>
        <span className="text-logo">Restaurant</span>
      </h1>
      <Skeleton className="w-28 h-9 bg-primary/80" />
    </header>
  ),
});

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={montserrat.className}>
        <MyHeader />
        <main aria-label="Webpage main content" role="main">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
