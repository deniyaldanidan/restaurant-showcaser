"use server";

import db from "@/db/db";
import { foodCategory } from "@/db/schemas/food-category-schema";
import verifyAccess from "@/lib/verfiyAccess";
import { menuFolderPath } from "@/utils/myRoutes";
import { ActionReturnType, ADMINFLAG } from "@/utils/types";
import { categoryFormParser } from "@/utils/zod-valids";
import { revalidatePath } from "next/cache";
import { z, ZodError } from "zod";

export default async function createFoodCategory(
  token: string,
  data: z.infer<typeof categoryFormParser>
): Promise<ActionReturnType<undefined>> {
  try {
    // * auth verification
    const auth = verifyAccess(token, ADMINFLAG);
    if (auth.success === false) {
      return { success: false, error: "Authentication failed" };
    }
    // * data validation
    const parsedData = categoryFormParser.parse(data);
    // * insert data into DB
    await db.insert(foodCategory).values(parsedData);
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
