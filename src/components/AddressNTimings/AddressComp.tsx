import Link from "next/link";
import { CallIcon } from "../icons/CallIcon";
import { LocationIcon } from "../icons/LocationIcon";
import { MailIcon } from "../icons/MailIcon";
import LocationMap from "./LocationMap";
import { cinzel } from "@/lib/fonts";
import myRoutes from "@/utils/myRoutes";

export default function AddressComp() {
  return (
    <div
      className="flex justify-between items-center gap-x-12 max-w-[1065px] mx-auto tablet:flex-col-reverse tablet:gap-y-10 tablet:max-w-[500px]"
      aria-label="Address & contact-info for Odel Digest restaurant"
      role="group"
    >
      {/* Address */}
      <div className="flex flex-col gap-y-8 w-fit laptop-sm:gap-y-6">
        {/* Logo */}
        <h2
          className={`${cinzel.className} font-medium text-[28px] leading-normal uppercase whitespace-nowrap laptop-md:text-2xl mobile-md:text-wrap mobile-md:text-xl`}
        >
          Odel digest restaurant
        </h2>
        {/* Address */}
        <address
          className="flex items-start gap-x-3"
          aria-label="street address"
        >
          <LocationIcon className="text-xl mobile:text-lg mobile-md:text-base" />
          <div className="flex flex-col gap-1 font-medium text-lg mobile:text-base mobile-md:text-sm">
            <span className="text-nowrap mobile-md:text-wrap">
              Duthie school junction, Court Road,
            </span>
            <span className="text-nowrap mobile-md:text-wrap">Nagercoil,</span>
            <span className="text-nowrap mobile-md:text-wrap">
              Tamil Nadu, 629001.
            </span>
          </div>
        </address>
        {/* Telephone */}
        <a
          href="tel:+04652 225 230"
          className="flex items-center gap-x-3"
          aria-label="Phone number: 04652 225 230"
        >
          <CallIcon className="text-xl mobile:text-lg mobile-md:text-base" />
          <span className="text-lg font-medium mobile:text-base mobile-md:text-sm">
            04652 225 230
          </span>
        </a>
        {/* Mail */}
        <a
          href="mailto:restaurant@odel.co.in"
          className="flex items-center gap-x-3"
          aria-label="Email: restaurant@odel.co.in"
        >
          <MailIcon className="text-xl mobile:text-lg mobile-md:text-base" />

          <span className="text-lg font-medium mobile:text-base mobile-md:text-sm">
            restaurant@odel.co.in
          </span>
        </a>
        {/* CTA Button */}
        <Link
          href={myRoutes.bookATable}
          className="btn btn-lg btn-primary laptop-sm:btn-base mobile:btn-sm"
        >
          Book A Table
        </Link>
      </div>
      {/* Location */}
      <LocationMap className="w-full h-auto aspect-square max-w-[496px] bg-high-bg rounded-lg" />
    </div>
  );
}
