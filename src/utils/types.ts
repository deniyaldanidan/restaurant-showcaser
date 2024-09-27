import { z } from "zod";
import { categoryFormParser } from "./zod-valids";
import fetchFoods from "@/lib/queryFNS/fetchFoods";

export const foodAvailEnum = ["BREAKFAST", "LUNCH", "DINNER"] as const;
export type FoodAvailEnumType = (typeof foodAvailEnum)[number];

export const foodTypes = [
  "STARTERS",
  "SOUPSNSALADS",
  "MAINCOURSE",
  "DESSERTS",
  "SPECIALITIES",
  "BEVERAGES",
  "COMBOSNPLATERS",
] as const;

export type FoodTypesEnumType = (typeof foodTypes)[number];

export type ActionReturnType<T> =
  | { success: false; error: string }
  | (T extends undefined ? { success: true } : { success: true; data: T });

export const ADMINFLAG = "4128" as const;

export type FoodCatType = z.infer<typeof categoryFormParser> & { id: number };

export type DashFoodType = Awaited<ReturnType<typeof fetchFoods>>[0];

export type MainMenuDataType = {
  id: number;
  name: string;
  isVeg: boolean;
  price: number;
  description: string;
  availability: FoodAvailEnumType[];
  type: FoodTypesEnumType | null;
};

export type SubMenuCategoryType = {
  id: number;
  name: string;
  description: string;
  foodType: FoodTypesEnumType;
};

export type SubMenuFoodType = {
  id: number;
  name: string;
  description: string;
  price: number;
  availability: FoodAvailEnumType[];
  veg: boolean;
  foodCategoryId: number;
};
