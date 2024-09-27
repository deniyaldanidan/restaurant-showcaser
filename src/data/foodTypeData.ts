import MainCoursePic from "@/assets/menu-offers-pics/main-course.jpg";
import StarterCoursePic from "@/assets/menu-offers-pics/starters.jpg";
import SoupsCoursePic from "@/assets/menu-offers-pics/soups.jpg";
import DessertsCoursePic from "@/assets/menu-offers-pics/desserts.jpg";
import SpecialitiesCoursePic from "@/assets/menu-offers-pics/specialities.jpg";
import BeveragesCoursePic from "@/assets/menu-offers-pics/Beverages.jpg";
import CombosCoursePic from "@/assets/menu-offers-pics/platters.jpg";
import { FoodTypesEnumType } from "@/utils/types";
import { StaticImageData } from "next/image";

export const foodTypeData: Array<{
  name: string;
  value: FoodTypesEnumType;
  description: string;
  img: StaticImageData;
}> = [
  {
    name: "Main Course",
    value: "MAINCOURSE",
    description:
      "Delight in our hearty and flavorful main dishes, crafted to satisfy your every craving.",
    img: MainCoursePic,
  },
  {
    name: "Starters",
    value: "STARTERS",
    description: "Kick off your meal with our tantalizing appetizers.",
    img: StarterCoursePic,
  },
  {
    name: "Soups & Salads",
    value: "SOUPSNSALADS",
    description:
      "Begin your meal with our fresh and flavorful soups and salads, bursting with goodness.",
    img: SoupsCoursePic,
  },
  {
    name: "Desserts",
    value: "DESSERTS",
    description: "Indulge in our decadent and delightful desserts.",
    img: DessertsCoursePic,
  },
  {
    name: "Specialities",
    value: "SPECIALITIES",
    description:
      "Experience the unique flavors of our chef's special creations.",
    img: SpecialitiesCoursePic,
  },
  {
    name: "Beverages",
    value: "BEVERAGES",
    description: "Quench your thirst with our refreshing beverages.",
    img: BeveragesCoursePic,
  },
  {
    name: "Combos & Platters",
    value: "COMBOSNPLATERS",
    description:
      "Savor a variety of tastes with our perfectly paired combos and platters.",
    img: CombosCoursePic,
  },
];
