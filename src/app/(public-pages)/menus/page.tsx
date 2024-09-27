import AddressNTimings from "@/components/AddressNTimings/AddressNTimings";
import CTASection from "@/components/CTASection";
import FoodTypeShowcaser from "@/components/MenusPage/FoodTypeShowcaser";
import PageHero from "@/components/MenusPage/PageHero";
import { foodTypeData } from "@/data/foodTypeData";
import getMainMenus from "@/lib/serverFetchers/get-main-menus";

export default async function MenusPage() {
  const data = await getMainMenus();

  return (
    <>
      <PageHero />
      <div role="group" aria-label="Our menus section">
        {foodTypeData.map((typ) => (
          <FoodTypeShowcaser
            key={typ.value}
            typeName={typ.name}
            typeDesc={typ.description}
            typeImg={typ.img}
            foods={data.filter((fd) => fd.type === typ.value)}
            typeVal={typ.value}
          />
        ))}
      </div>

      <CTASection />
      <AddressNTimings />
    </>
  );
}
