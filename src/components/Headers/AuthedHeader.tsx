"use client";

import { cinzel_decorative_bold } from "@/lib/fonts";
import Link from "next/link";
import SignOutBTN from "@/components/SignOutBTN";
import DarkLightModeBTN from "@/components/DarkLightModeBTN";
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

export default function AuthedHeader() {
  const match = useMediaQuery("(max-width: 750px)");
  return (
    <header className="px-page-margin-x py-4 bg-sec-bg flex items-center justify-between gap-x-5">
      <h1
        className={`${cinzel_decorative_bold.className} flex flex-col gap-y-1`}
      >
        <span className="text-logo">Odel Digest</span>
        <span className="text-logo">Restaurant</span>
      </h1>
      <nav className="flex items-center gap-x-12 laptop-md:gap-x-7 mobile-sm:gap-x-5">
        {match ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="btn btn-sm btn-primary mobile-md:btn-xs">
              Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup className="flex flex-col items-center gap-x-1">
                <DropdownMenuItem asChild>
                  <Link href={myRoutes.dashboard} className="header-menu">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={myRoutes.bookings} className="header-menu">
                    Bookings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <SignOutBTN />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link href={myRoutes.dashboard} className="header-menu">
              Dashboard
            </Link>
            <Link href={myRoutes.bookings} className="header-menu">
              Bookings
            </Link>
            <SignOutBTN />
          </>
        )}
        <DarkLightModeBTN />
      </nav>
    </header>
  );
}
