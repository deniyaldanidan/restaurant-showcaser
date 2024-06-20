import Image from "next/image";
import CoverPic from "@/assets/story-cover.jpg";
import Link from "next/link";
import { cinzel_decorative_reg } from "@/lib/fonts";

export default function OurStory() {
  return (
    <section className="flex justify-between">
      <Image
        src={CoverPic}
        alt=""
        title=""
        priority
        className="w-[675px] object-cover"
        unoptimized
      />
      <div className="flex flex-col gap-y-10 px-page-margin-x py-section-pad-y bg-sec-bg">
        <h2
          className={`${cinzel_decorative_reg.className} text-section-title uppercase text-center`}
        >
          Our Story
        </h2>
        <p className="flex flex-col gap-y-3 text-justify text-lg">
          <span>
            Welcome to Odel Digest Restaurant, a cherished culinary landmark in
            Nagercoil, Kanyakumari District, Tamil Nadu, since 1975. For nearly
            five decades, we&apos;ve been dedicated to offering an unforgettable
            dining experience, blending authentic Indian recipes with the warmth
            of traditional hospitality. Our journey began with a mission to
            provide quality, flavorful dishes crafted from fresh ingredients.
            Over the years, while we&apos;ve evolved, our commitment to
            tradition and excellence remains strong.
          </span>
          <span>
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
        <div className="flex items-center gap-x-10 justify-center">
          <Link href="" className="btn-primary">
            Book A Table
          </Link>
          <Link href="" className="btn-secondary">
            Explore Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
