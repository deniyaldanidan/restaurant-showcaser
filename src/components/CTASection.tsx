import { cinzel_decorative_reg } from "@/lib/fonts";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="flex flex-col items-center gap-y-10 px-page-margin-x py-[70px] bg-sec-bg">
      <div className="flex flex-col items-center gap-y-5 max-w-[800px]">
        <h2
          className={`text-section-title ${cinzel_decorative_reg.className} text-center`}
        >
          Reserve your table today!
        </h2>
        <h3 className="text-center text-section-description font-medium">
          Experience the culinary delights of Odel Digest Restaurant. Click
          below to secure your spot for an unforgettable dining experience.
          Don’t miss out – book your table now!
        </h3>
      </div>
      <Link href="#" className="btn-primary">
        Book A Table
      </Link>
    </section>
  );
}
