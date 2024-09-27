import Link from "next/link";
import { cinzel } from "@/lib/fonts";
import Image from "next/image";
import heroImage from "@/assets/Hero-Pic.png";
import myRoutes from "@/utils/myRoutes";

export default function Hero() {
  return (
    <section
      className="max-w-[1480px] mx-auto px-page-margin-x py-section-pad-y min-h-[75vh] h-fit flex items-start justify-between gap-x-14 laptop-md:gap-x-10 laptop-sm:flex-col laptop-sm:items-center laptop-sm:gap-y-12"
      aria-label="Hero section of Home Page"
    >
      {/* left */}
      <div className="max-w-[700px] flex flex-col gap-11 laptop-md:gap-y-8 laptop-sm:items-center laptop-sm:max-w-[800px] mobile:items-start mobile-md:items-center">
        <div className="flex flex-col gap-y-5 laptop-sm:items-center mobile:items-start mobile-md:items-center">
          <h2
            className={`${cinzel.className} font-bold text-section-title uppercase laptop-sm:text-center mobile:text-left mobile-md:text-center`}
          >
            Welcome to Odel Digest Restaurant
          </h2>
          <p
            className="text-section-description leading-relaxed laptop-sm:text-center laptop-sm:max-w-[700px] tablet-lg:max-w-[575px] tablet-md:max-w-[550px] tablet-sm:max-w-[475px] mobile:text-left mobile-md:text-center"
            aria-label="hero description"
          >
            Embark on a culinary journey with the rich and vibrant flavors of
            authentic Indian cuisine. Explore our diverse menu and reserve your
            table for an extraordinary dining experience that will tantalize
            your taste buds.
          </p>
        </div>
        <div className="flex items-center gap-x-14 w-full laptop-md:gap-x-10 laptop-sm:justify-center mobile:justify-start mobile:gap-x-7 mobile-md:flex-col mobile-md:gap-y-7">
          <Link
            href={myRoutes.bookATable}
            className="btn btn-base btn-primary laptop-md:btn-sm mobile-lg:btn-xs mobile-md:btn-sm"
          >
            Book A Table
          </Link>
          <Link
            href={myRoutes.menus}
            className="btn btn-base btn-secondary laptop-md:btn-sm mobile-lg:btn-xs mobile-md:btn-sm"
          >
            Explore Menu
          </Link>
        </div>
      </div>
      {/* right */}
      <Image
        src={heroImage}
        alt="Odel Digest restaurant Hero Image"
        title="Odel Digest restaurant Hero Image"
        priority
        className="w-full max-w-[400px] h-auto"
        unoptimized
      />
    </section>
  );
}
