"use server";

import db from "@/db/db";
import { foodCategory } from "@/db/schemas/food-category-schema";
import { foods } from "@/db/schemas/food-schema";
import verifyAccess from "@/lib/verfiyAccess";
import { menuFolderPath } from "@/utils/myRoutes";
import { ActionReturnType, ADMINFLAG } from "@/utils/types";
import { foodFormParser, intParser } from "@/utils/zod-valids";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z, ZodError } from "zod";

export default async function editFood(
  token: string,
  id: number,
  data: z.infer<typeof foodFormParser>
): Promise<ActionReturnType<undefined>> {
  try {
    // * auth verification
    const auth = verifyAccess(token, ADMINFLAG);
    if (auth.success === false) {
      return { success: false, error: "Authentication failed" };
    }
    // * data validation
    const parsedData = foodFormParser.parse(data);
    const parsedId = intParser.parse(id);
    // * check if category id is present?
    const availFoodCats = await db
      .select()
      .from(foodCategory)
      .where(eq(foodCategory.id, parsedData.foodCategoryId));
    if (!availFoodCats.length) {
      return { success: false, error: "Chosen Food-Category is not avail" };
    }
    // * update data inthe DB
    await db.update(foods).set(parsedData).where(eq(foods.id, parsedId));
    // * revalidate related paths
    revalidatePath(menuFolderPath, "layout");

    return { success: true };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, error: "validation failed" };
    }
    console.log(error);
    return { success: false, error: "Error happened" };
  }
}
