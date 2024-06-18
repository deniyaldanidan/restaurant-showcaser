import Link from "next/link";
import { cinzel_decorative_bold } from "@/lib/fonts";

export default function Header() {
  return (
    <header className="py-3.5 px-page-margin-x bg-sec-bg flex justify-between items-center">
      <h1
        className={`${cinzel_decorative_bold.className} flex flex-col gap-y-1`}
      >
        <span className="text-logo">Odel Digest</span>
        <span className="text-logo">Restaurant</span>
      </h1>
      <div className="flex gap-x-14 items-center">
        <Link href={"#"} className="capitalize text-menu font-medium">
          Home
        </Link>
        <Link href={"#"} className="capitalize text-menu font-medium">
          Menu
        </Link>
        <Link href={"#"} className="capitalize text-menu font-medium">
          Offers & Events
        </Link>
        <Link href={"#"} className="btn-primary">
          Book A Table
        </Link>
      </div>
    </header>
  );
}
