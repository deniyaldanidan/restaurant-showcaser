import { foodTypeData } from "@/data/foodTypeData";
import { FoodTypesEnumType } from "@/utils/types";
import Image from "next/image";
import BreadCrumb from "../BreadCrumb";
import { FaHome as HomeIcon } from "react-icons/fa";
import myRoutes from "@/utils/myRoutes";
import { cinzel } from "@/lib/fonts";

type props = {
  type: FoodTypesEnumType;
};

export default function PageHero(props: props) {
  const currentFoodType = foodTypeData.find(
    (typ) => typ.value === props.type.toUpperCase()
  );

  if (!currentFoodType) {
    throw new Error("food type is not available");
  }

  return (
    <section
      className="flex flex-col items-center gap-y-5 px-page-margin-x py-10 bg-sec-bg mobile-lg:items-start"
      aria-label={`Hero section of ${props.type.toLowerCase()}`}
    >
      <BreadCrumb
        past={[
          { title: <HomeIcon />, link: myRoutes.home, label: "Home Page" },
          { title: "Our Menu", link: myRoutes.menus, label: "Menus Page" },
        ]}
        current={currentFoodType.name}
      />
      <div className="w-full max-w-[575px] flex flex-col gap-y-2 items-center mb-5 mobile-lg:items-start">
        <h2
          className={`text-section-title text-center ${cinzel.className} font-bold mobile-lg:text-left`}
        >
          {currentFoodType.name}
        </h2>
        <p
          className="text-section-description text-center font-medium leading-relaxed mobile-lg:text-left"
          aria-label={`about ${currentFoodType.name}`}
        >
          {currentFoodType.description}
        </p>
      </div>
      <Image
        src={currentFoodType.img}
        alt={currentFoodType.name}
        unoptimized
        className="w-full h-auto object-cover rounded-2xl max-w-[600px]"
        priority
      />
    </section>
  );
}
