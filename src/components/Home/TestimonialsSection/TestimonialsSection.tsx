import Link from "next/link";
import { cinzel_decorative_reg } from "@/lib/fonts";
import TestimonialCard from "./TestimonialCard";
import myRoutes from "@/utils/myRoutes";

export default function TestimonialsSection() {
  return (
    <section
      className="max-w-[1480px] mx-auto px-page-margin-x py-section-pad-y flex justify-between items-center gap-10 tablet-lg:flex-col tablet-sm:items-start"
      aria-label="Testimonials section"
    >
      {/* left */}
      <div className="w-fit max-w-[375px] flex flex-col gap-y-7 tablet-lg:max-w-[595px] tablet-lg:items-center tablet-sm:items-start">
        <div className="flex flex-col gap-y-5 tablet-lg:items-center tablet-sm:items-start">
          <h2
            className={`${cinzel_decorative_reg.className} text-section-title tablet-lg:text-center tablet-sm:text-left`}
          >
            Hear from our happy diners
          </h2>
          <h4 className="text-section-description font-medium tablet-lg:text-center tablet-sm:text-left">
            Explore the wonderful experiences shared by our satisfied guests.
            See why Odel Digest Restaurant is a beloved dining spot in Nagercoil
            through their glowing reviews and testimonials.
          </h4>
        </div>
        <Link href={myRoutes.bookATable} className="btn btn-lg btn-primary">
          Book A Table
        </Link>
      </div>
      {/* right */}
      <div
        className="flex flex-col gap-y-7 w-full max-w-[675px] mobile-lg:flex-row mobile-lg:overflow-x-scroll mobile-lg:items-center mobile-lg:gap-x-4"
        aria-label="Testimonials from our users"
        role="group"
      >
        <TestimonialCard
          name="Ananya Patel"
          testimonial="An absolutely delightful dining experience! The flavors were authentic, and the service was impeccable. Highly recommend Odel Digest!"
          rating={5}
        />
        <TestimonialCard
          name="Rajesh Kumar"
          testimonial="The ambiance and the food were both exceptional. Every dish was bursting with flavor. We'll definitely be back!"
          rating={4.5}
          slided
        />
        <TestimonialCard
          name="Priya Menon"
          testimonial="Odel Digest never disappoints. The food quality is consistently excellent, and the staff is always welcoming. A must-visit!"
          rating={5}
        />
      </div>
    </section>
  );
}
