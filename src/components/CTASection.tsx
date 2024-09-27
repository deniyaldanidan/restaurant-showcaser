import { cinzel_decorative_reg } from "@/lib/fonts";
import myRoutes from "@/utils/myRoutes";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="flex flex-col items-center gap-y-7 px-page-margin-x py-section-pad-y bg-sec-bg mobile:items-start"
      aria-label="Reserve your table section"
    >
      <div className="flex flex-col items-center gap-y-3.5 max-w-[800px] mobile:items-start">
        <h2
          className={`text-section-title ${cinzel_decorative_reg.className} text-center mobile:text-left`}
        >
          Reserve your table today!
        </h2>
        <p
          aria-label="description"
          className="text-center text-section-description font-medium mobile:text-left"
        >
          Experience the culinary delights of Odel Digest Restaurant. Click
          below to secure your spot for an unforgettable dining experience.
          Don’t miss out – book your table now!
        </p>
      </div>
      <Link
        href={myRoutes.bookATable}
        className="btn btn-lg btn-primary tablet-sm:btn-base mobile:btn-sm"
      >
        Book A Table
      </Link>
    </section>
  );
}
