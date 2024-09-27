import { SubMenuCategoryType, SubMenuFoodType } from "@/utils/types";
import MenuItem from "../MenuItem";

type props = {
  category: SubMenuCategoryType;
  foods: SubMenuFoodType[];
};

export default function FoodCatMenuCard(props: props) {
  return (
    <section
      className="flex flex-col gap-y-7 px-5 py-6 bg-sec-bg/40 even:bg-sec-bg rounded-lg"
      aria-label={props.category.name}
    >
      <div
        className="flex flex-col items-center gap-y-2.5"
        role="group"
        aria-label={`intro of ${props.category.name}`}
      >
        <h2 className="text-center text-lg font-bold uppercase">
          {props.category.name.toLowerCase()}
        </h2>
        <p
          className="font-medium text-center"
          aria-label={`few words about ${props.category.name}`}
        >
          {props.category.description}
        </p>
      </div>
      {props.foods.map((fd) => (
        <MenuItem key={fd.id} {...fd} isVeg={fd.veg} />
      ))}
    </section>
  );
}
