"use client";

import Link from "next/link";
import { cinzel_decorative_bold } from "@/lib/fonts";
import myRoutes from "@/utils/myRoutes";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const match = useMediaQuery("(max-width: 600px)");
  return (
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
      {match ? (
        <DropdownMenu>
          <DropdownMenuTrigger
            className="btn btn-sm btn-primary"
            aria-label="Website main navigation links section"
          >
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup
              className="flex flex-col items-center gap-x-1"
              aria-label="Home & Menu pages links group"
            >
              <DropdownMenuItem asChild>
                <Link href={myRoutes.home} className="header-menu" role="link">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={myRoutes.menus} className="header-menu" role="link">
                  Menu
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href={myRoutes.bookATable}
                className="btn btn-base btn-primary tablet:btn-sm tablet-sm:btn-xs"
                role="link"
              >
                Book A Table
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <nav
          className="flex gap-x-14 items-center tablet:gap-x-10 tablet-sm:gap-x-7"
          aria-label="Website main Navigation Links section"
        >
          <Link href={myRoutes.home} className="header-menu">
            Home
          </Link>
          <Link href={myRoutes.menus} className="header-menu">
            Menu
          </Link>
          <Link
            href={myRoutes.bookATable}
            className="btn btn-base btn-primary tablet:btn-sm tablet-sm:btn-xs"
          >
            Book A Table
          </Link>
        </nav>
      )}
    </header>
  );
}
