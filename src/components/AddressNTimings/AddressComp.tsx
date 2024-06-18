import Link from "next/link";
import { CallIcon } from "../icons/CallIcon";
import { LocationIcon } from "../icons/LocationIcon";
import { MailIcon } from "../icons/MailIcon";
import LocationMap from "./LocationMap";
import { cinzel } from "@/lib/fonts";

export default function AddressComp() {
  return (
    <div className="flex justify-between items-center gap-x-14 max-w-[1065px] mx-auto">
      {/* left */}
      <div className="flex flex-col gap-y-10 w-fit">
        {/* Logo */}
        <h2
          className={`${cinzel.className} font-normal text-[28px] uppercase whitespace-nowrap`}
        >
          Odel digest restaurant
        </h2>
        {/* Address */}
        <address className="flex items-start gap-x-3">
          <LocationIcon className="text-xl" />
          <div className="flex flex-col gap-1 font-medium text-lg">
            <span>Duthie school junction, Court Road,</span>
            <span>Nagercoil,</span>
            <span>Tamil Nadu, 629001.</span>
          </div>
        </address>
        {/* Telephone */}
        <a href="tel:+04652 225 230" className="flex items-center gap-x-3">
          <CallIcon className="text-xl" />
          <span className="text-xl font-medium">04652 225 230</span>
        </a>
        {/* Mail */}
        <a
          href="mailto:restaurant@odel.co.in"
          className="flex items-center gap-x-3"
        >
          <MailIcon className="text-xl" />

          <span className="text-xl font-medium">restaurant@odel.co.in</span>
        </a>
        {/* CTA Button */}
        <Link href="#" className="btn-primary">
          Book A Table
        </Link>
      </div>
      {/* right */}
      <LocationMap className="w-full h-auto aspect-square max-w-[496px] bg-high-bg rounded-lg" />
    </div>
  );
}
