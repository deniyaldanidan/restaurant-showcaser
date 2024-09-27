import { cinzel_decorative_reg } from "@/lib/fonts";
import ServeCard from "./ServeCard";
import { foodTypeData } from "@/data/foodTypeData";
import myRoutes from "@/utils/myRoutes";

export default function WhatWeServe() {
  return (
    <section
      className="max-w-[1480px] mx-auto px-page-margin-x py-section-pad-y"
      aria-label="What we serve section"
    >
      <h2
        className={`${cinzel_decorative_reg.className} text-section-title text-center mb-10 mobile:mb-5`}
      >
        What we serve
      </h2>
      <div className="grid grid-cols-5 grid-rows-[repeat(4,325px)] gap-9 laptop:gap-7 laptop-md:gap-5 laptop-sm:grid-cols-4 laptop-sm:grid-rows-[repeat(6,325px)] tablet-md:grid-rows-[repeat(6,275px)] tablet-sm:grid-rows-[repeat(8,200px)]">
        {foodTypeData.map((fdtypDT) => (
          <ServeCard
            key={fdtypDT.value}
            href={myRoutes.submenu(fdtypDT.value)}
            cardTitle={fdtypDT.name}
            cardDesc={fdtypDT.description}
            srcImage={fdtypDT.img}
            className="col-span-2 first:col-span-3 first:row-span-2 last:col-span-3 [&:nth-child(5)]:col-span-3 laptop-sm:first:col-span-4 laptop-sm:[&:nth-child(6)]:row-start-4 laptop-sm:[&:nth-child(5)]:col-span-4 laptop-sm:last:col-span-4 tablet-sm:col-span-4 tablet-sm:[&:nth-child(6)]:row-start-7 tablet-sm:[&:nth-child(5)]:row-start-5"
          />
        ))}
      </div>
    </section>
  );
}
