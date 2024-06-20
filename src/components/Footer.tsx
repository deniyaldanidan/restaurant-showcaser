import Link from "next/link";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TripadvisorIcon from "./icons/TripadvisorIcon";
import { cinzel_decorative_reg } from "@/lib/fonts";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="WebPage Footer">
      {/* Primary Footer */}
      <section className="flex justify-between gap-x-16 px-page-margin-x py-section-pad-y border-t-zinc-700 border-t-2">
        <div className="footer-navs-section">
          <h2 className="flex flex-col items-center">
            <span className={`${cinzel_decorative_reg.className} text-logo`}>
              Odel Digest
            </span>
            <span className={`${cinzel_decorative_reg.className} text-logo`}>
              Restaurant
            </span>
          </h2>
          <nav className="flex items-center gap-x-6 text-xl">
            <Link
              href={"https://www.instagram.com/odel.digest/"}
              className="duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Link>
            <Link
              href={"https://www.facebook.com/odeldigest/"}
              className="duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
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
            >
              <TripadvisorIcon />
            </Link>
          </nav>
        </div>
        {/* Footer Links 1 */}
        <nav className="footer-navs-section">
          <Link href="#" className="footer-menu">
            Home
          </Link>
          <Link href="#" className="footer-menu">
            Menu
          </Link>
          <Link href="#" className="footer-menu">
            Offers & Events
          </Link>
          <Link href="#" className="footer-menu">
            Book A Table
          </Link>
        </nav>
        {/* Footer Links 2 */}
        <nav className="footer-navs-section">
          <Link href="#" className="footer-menu" rel="privacy-policy">
            Privacy Policy
          </Link>
          <Link href="#" className="footer-menu" rel="terms-of-service">
            Terms & Conditions
          </Link>
        </nav>
        {/* Subscribe section */}
        <SubscribeForm />
      </section>
      {/*   Secondary Footer */}
      <section className="flex gap-x-1.5 items-center justify-center bg-sec-bg px-page-margin-x py-5">
        <span className="text-base font-medium">
          &copy; 2024 Dani&apos;s Products.
        </span>
        <span className="text-base font-medium">All rights reserved.</span>
      </section>
    </footer>
  );
}
