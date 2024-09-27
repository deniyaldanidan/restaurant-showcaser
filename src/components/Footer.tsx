import Link from "next/link";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TripadvisorIcon from "./icons/TripadvisorIcon";
import { cinzel_decorative_reg } from "@/lib/fonts";
import SubscribeForm from "./SubscribeForm";
import myRoutes from "@/utils/myRoutes";

export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="WebPage Footer">
      {/* Primary Footer */}
      <section
        className="flex justify-between gap-x-16 px-page-margin-x py-section-pad-y border-t-zinc-700 border-t-2 laptop:gap-x-14 laptop-md:flex-wrap laptop-md:justify-around laptop-md:gap-16 tablet-sm:gap-14 tablet-sm:justify-center tablet-sm:items-center"
        aria-label="Primary Footer"
      >
        <div className="footer-navs-section tablet-sm:w-full">
          <h2
            className="flex flex-col items-center"
            aria-label="Footer logo of Odel digest restaurant - Nagercoil"
          >
            <span className={`${cinzel_decorative_reg.className} text-logo`}>
              Odel Digest
            </span>
            <span className={`${cinzel_decorative_reg.className} text-logo`}>
              Restaurant
            </span>
          </h2>
          <nav
            className="flex items-center gap-x-6 text-xl"
            role="navigation"
            aria-label="Socials links section"
          >
            <Link
              href={"https://www.instagram.com/odel.digest/"}
              className="duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              role="link"
              aria-label="Instagram link"
              title="Instagram link"
            >
              <InstagramIcon />
            </Link>
            <Link
              href={"https://www.facebook.com/odeldigest/"}
              className="duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              role="link"
              aria-label="Facebook link"
              title="Facebook link"
            >
              <FacebookIcon />
            </Link>
            <Link
              href={
                "https://www.tripadvisor.in/Restaurant_Review-g2195095-d11256412-Reviews-Odel_Digest-Nagercoil_Kanyakumari_District_Tamil_Nadu.html?m=19905"
              }
              className="duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              role="link"
              aria-label="Tripadvisor link"
              title="Tripadvisor link"
            >
              <TripadvisorIcon />
            </Link>
          </nav>
        </div>
        {/* Footer Links 1 */}
        <nav
          className="footer-navs-section"
          role="navigation"
          aria-label="Website main-pages footer navigation Links section"
        >
          <Link href={myRoutes.home} className="footer-menu">
            Home
          </Link>
          <Link href={myRoutes.menus} className="footer-menu">
            Menu
          </Link>
          <Link href={myRoutes.bookATable} className="footer-menu">
            Book A Table
          </Link>
        </nav>
        {/* Footer Links 2 */}
        <nav
          className="footer-navs-section"
          role="navigation"
          aria-label="Website policy & terms pages links section"
        >
          <Link
            href={myRoutes.termsNConditions}
            className="footer-menu"
            rel="terms-of-service"
          >
            Terms & Conditions
          </Link>
          <Link
            href={myRoutes.privacyPolicy}
            className="footer-menu"
            rel="privacy-policy"
          >
            Privacy Policy
          </Link>
        </nav>
        {/* Subscribe section */}
        {/* <div className="tablet-sm:w-full flex justify-center"> */}
        <SubscribeForm />
        {/* </div> */}
      </section>
      {/*   Secondary Footer */}
      <section
        className="flex gap-x-1.5 items-center justify-center bg-sec-bg px-page-margin-x py-5 mobile-lg:flex-col mobile-lg:items-center mobile-lg:gap-y-2 mobile-lg:py-4"
        aria-label="Secondary Footer"
      >
        <span
          className="text-base font-medium mobile-lg:text-[0.95rem]"
          aria-label="Copyright 2024. Dani's products"
        >
          &copy; 2024 Dani&apos;s Products.
        </span>
        <span className="text-base font-medium mobile-lg:text-[0.95rem]">
          All rights reserved.
        </span>
      </section>
    </footer>
  );
}
