import AddressNTimings from "@/components/AddressNTimings/AddressNTimings";
import CTASection from "@/components/CTASection";
import FoodCatMenuCard from "@/components/SubMenuPage/FoodCatMenuCard";
import PageHero from "@/components/SubMenuPage/PageHero";
import getSubMenu from "@/lib/serverFetchers/get-sub-menus";
import { foodTypes } from "@/utils/types";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return foodTypes.map((fdTyp) => ({ foodType: fdTyp.toLowerCase() }));
}

export default async function SubMenuPage({
  params: { foodType: foodTypeParam },
}: {
  params: { foodType: string };
}) {
  if (
    !foodTypes
      .map((tp) => tp.toLowerCase())
      .includes(foodTypeParam.toLowerCase() as any)
  ) {
    notFound();
  }

  const { foods, categories } = await getSubMenu(foodTypeParam as any);

  return (
    <>
      <PageHero type={foodTypeParam as any} />
      <div
        className="max-w-[1700px] mx-auto grid grid-cols-2 px-page-margin-x py-14 gap-6 laptop-md:grid-cols-1 laptop-md:gap-y-10"
        role="group"
        aria-label="Menu"
      >
        {categories.map((cat) => (
          <FoodCatMenuCard
            key={cat.id}
            category={cat}
            foods={foods
              .filter((fd) => fd.foodCategory?.id === cat.id)
              .map((fd) => fd.food)}
          />
        ))}
      </div>
      <CTASection />
      <AddressNTimings />
    </>
  );
}
