import Image from "next/image";
import CoverPic from "@/assets/story-cover.jpg";
import Link from "next/link";
import { cinzel_decorative_reg } from "@/lib/fonts";
import myRoutes from "@/utils/myRoutes";

export default function OurStory() {
  return (
    <section
      className="max-w-[1480px] mx-auto flex justify-between laptop-sm:flex-col"
      aria-label="Our story section"
    >
      <div className="min-w-[575px] laptop:min-w-[500px] laptop-md:min-w-[450px] laptop-sm:px-page-margin-x laptop-sm:mt-5 tablet-sm:w-full tablet-sm:min-w-full">
        <Image
          src={CoverPic}
          alt="Our story image"
          title="Our story image"
          aria-description="Image of our restaurant"
          priority
          // className="w-[575px] object-cover laptop:w-[500px] laptop-md:w-[400px] laptop-sm:w-full"
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-y-10 px-page-margin-x py-section-pad-y bg-sec-bg">
        <h2
          className={`${cinzel_decorative_reg.className} text-section-title uppercase text-center`}
        >
          Our Story
        </h2>
        <p className="flex flex-col gap-y-3 text-justify text-lg mobile:text-base mobile-sm:text-sm">
          <span className="leading-relaxed">
            Welcome to Odel Digest Restaurant, a cherished culinary landmark in
            Nagercoil, Kanyakumari District, Tamil Nadu, since 1975. For nearly
            five decades, we&apos;ve been dedicated to offering an unforgettable
            dining experience, blending authentic Indian recipes with the warmth
            of traditional hospitality. Our journey began with a mission to
            provide quality, flavorful dishes crafted from fresh ingredients.
            Over the years, while we&apos;ve evolved, our commitment to
            tradition and excellence remains strong.
          </span>
          <span className="leading-relaxed">
            At Odel Digest, food is more than just a meal; it&apos;s an
            experience. Each dish, from our signature specialties to our
            decadent desserts, tells a story of passion and heritage. Our
            welcoming ambiance invites friends and family to gather, enjoy
            delicious food, and create lasting memories. Join us at Odel Digest
            and discover why we&apos;ve been a favorite dining destination for
            generations. Experience the essence of Indian cuisine, where every
            meal is a celebration.
          </span>
        </p>
        <div className="flex items-center gap-x-10 justify-center mobile:gap-x-7 mobile-md:flex-col mobile-md:gap-y-7">
          <Link
            href={myRoutes.bookATable}
            className="btn btn-base btn-primary tablet-sm:btn-sm mobile-lg:btn-xs mobile-md:btn-sm"
          >
            Book A Table
          </Link>
          <Link
            href={myRoutes.menus}
            className="btn btn-base btn-secondary tablet-sm:btn-sm mobile-lg:btn-xs mobile-md:btn-sm"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
