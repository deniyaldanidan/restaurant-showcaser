import Link from "next/link";
import { cinzel } from "@/lib/fonts";
import Image from "next/image";
import heroImage from "@/assets/Hero-Pic.png";

export default function Hero() {
  return (
    <section className="px-page-margin-x py-section-pad-y min-h-[75vh] h-fit flex items-start justify-between gap-x-16">
      {/* left */}
      <div className="max-w-[830px] flex flex-col gap-11">
        <div className="flex flex-col gap-y-5">
          <h2
            className={`${cinzel.className} font-bold text-section-title uppercase`}
          >
            Welcome to Odel Digest Restaurant
          </h2>
          <p className="text-2xl leading-normal">
            Embark on a culinary journey with the rich and vibrant flavors of
            authentic Indian cuisine. Explore our diverse menu and reserve your
            table for an extraordinary dining experience that will tantalize
            your taste buds.
          </p>
        </div>
        <div className="flex items-center gap-x-16">
          <Link href="" className="btn-primary">
            Book A Table
          </Link>
          <Link href="" className="btn-secondary">
            Explore Menu
          </Link>
        </div>
      </div>
      {/* right */}
      <Image
        src={heroImage}
        alt=""
        title=""
        priority
        className=" w-[416px] h-auto"
        unoptimized
      />
    </section>
  );
}
