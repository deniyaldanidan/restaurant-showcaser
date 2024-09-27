import "server-only";
import db from "@/db/db";
import { foodCategory } from "@/db/schemas/food-category-schema";
import { foods } from "@/db/schemas/food-schema";
import { FoodTypesEnumType } from "@/utils/types";
import { eq, isNull } from "drizzle-orm";

export default async function getSubMenu(type: FoodTypesEnumType) {
  const res = await db
    .select()
    .from(foods)
    .leftJoin(foodCategory, eq(foodCategory.id, foods.foodCategoryId))
    .where(eq(foodCategory.foodType, type));

  const categories: Array<{
    id: number;
    name: string;
    description: string;
    foodType: FoodTypesEnumType;
  }> = [];

  res.forEach((fd) => {
    if (
      !fd.foodCategory ||
      categories.find((cat) => cat.id === fd.foodCategory?.id)
    ) {
      return;
    }
    categories.push(fd.foodCategory);
  });

  return { foods: res, categories };
}
