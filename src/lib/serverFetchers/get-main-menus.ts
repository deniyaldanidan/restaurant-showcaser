import "server-only";
import db from "@/db/db";
import { foodCategory } from "@/db/schemas/food-category-schema";
import { foods } from "@/db/schemas/food-schema";
import { FoodTypesEnumType } from "@/utils/types";
import { eq, sql } from "drizzle-orm";
import { union } from "drizzle-orm/mysql-core";

function myFoodQuery(typ: FoodTypesEnumType) {
  return db
    .select({
      id: foods.id,
      name: foods.name,
      isVeg: foods.veg,
      price: foods.price,
      description: foods.description,
      availability: foods.availability,
      type: foodCategory.foodType,
    })
    .from(foods)
    .leftJoin(foodCategory, eq(foodCategory.id, foods.foodCategoryId))
    .where(eq(foodCategory.foodType, typ))
    .orderBy(sql`RAND()`)
    .limit(5);
}

export default async function getMainMenus() {
  return await union(
    myFoodQuery("MAINCOURSE"),
    myFoodQuery("STARTERS"),
    myFoodQuery("SOUPSNSALADS"),
    myFoodQuery("SPECIALITIES"),
    myFoodQuery("DESSERTS"),
    myFoodQuery("BEVERAGES"),
    myFoodQuery("COMBOSNPLATERS")
  );
}
