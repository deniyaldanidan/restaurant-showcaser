"use server";

import db from "@/db/db";
import { foods } from "@/db/schemas/food-schema";
import verifyAccess from "@/lib/verfiyAccess";
import { menuFolderPath } from "@/utils/myRoutes";
import { ActionReturnType, ADMINFLAG } from "@/utils/types";
import { intParser } from "@/utils/zod-valids";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { ZodError } from "zod";

export default async function deleteFood(
  token: string,
  id: number
): Promise<ActionReturnType<undefined>> {
  try {
    // * auth verification
    const auth = verifyAccess(token, ADMINFLAG);
    if (auth.success === false) {
      return { success: false, error: "Authentication failed" };
    }
    // * data validation
    const parsedId = intParser.parse(id);
    // * delete data in DB
    await db.delete(foods).where(eq(foods.id, parsedId));
    // * revalidate related paths
    revalidatePath(menuFolderPath, "layout");

    return { success: true };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, error: "invalid id" };
    }
    console.log(error);
    return { success: false, error: "Error happened" };
  }
}
