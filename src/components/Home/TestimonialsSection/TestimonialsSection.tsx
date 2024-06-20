import Link from "next/link";
import { cinzel_decorative_reg } from "@/lib/fonts";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="px-page-margin-x py-section-pad-y flex justify-between items-center gap-x-10">
      {/* left */}
      <div className="max-w-[450px] flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5">
          <h2
            className={`${cinzel_decorative_reg.className} text-section-title`}
          >
            Hear from our happy diners
          </h2>
          <h4 className="text-lg font-medium">
            Explore the wonderful experiences shared by our satisfied guests.
            See why Odel Digest Restaurant is a beloved dining spot in Nagercoil
            through their glowing reviews and testimonials.
          </h4>
        </div>
        <Link href="#" className="btn-primary">
          Book A Table
        </Link>
      </div>
      {/* right */}
      <div className="flex flex-col gap-y-10">
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
