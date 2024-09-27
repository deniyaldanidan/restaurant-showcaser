"use server";

import db from "@/db/db";
import { foodCategory } from "@/db/schemas/food-category-schema";
import verifyAccess from "@/lib/verfiyAccess";
import { menuFolderPath } from "@/utils/myRoutes";
import { ActionReturnType, ADMINFLAG } from "@/utils/types";
import { categoryFormParser, intParser } from "@/utils/zod-valids";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z, ZodError } from "zod";

export default async function editFoodCategory(
  token: string,
  id: number,
  data: z.infer<typeof categoryFormParser>
): Promise<ActionReturnType<undefined>> {
  try {
    // * auth verification
    const auth = verifyAccess(token, ADMINFLAG);
    if (auth.success === false) {
      return { success: false, error: "Authentication failed" };
    }
    // * data validation
    const parsedId = intParser.parse(id);
    const parsedData = categoryFormParser.parse(data);
    // * update data in the DB
    await db
      .update(foodCategory)
      .set(parsedData)
      .where(eq(foodCategory.id, parsedId));
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
