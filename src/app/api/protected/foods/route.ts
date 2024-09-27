import db from "@/db/db";
import { foodCategory } from "@/db/schemas/food-category-schema";
import { foods } from "@/db/schemas/food-schema";
import verifyAccessRouter from "@/lib/verifyAccessRouter";
import { ADMINFLAG } from "@/utils/types";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // * verify auth
    const auth = verifyAccessRouter(ADMINFLAG);

    if (auth.success !== true) {
      return NextResponse.json(
        { error: "Authentication Failed" },
        { status: 401 }
      );
    }
    // * fetch data from the db & send it
    const res = await db
      .select({
        id: foods.id,
        name: foods.name,
        description: foods.description,
        price: foods.price,
        availability: foods.availability,
        veg: foods.veg,
        foodCategoryId: foods.foodCategoryId,
        foodCategoryName: foodCategory.name,
      })
      .from(foods)
      .leftJoin(foodCategory, eq(foods.foodCategoryId, foodCategory.id));
    const formattedData = res.map((fd) => ({
      ...fd,
      availability:
        typeof fd.availability === "string"
          ? JSON.parse(fd.availability)
          : fd.availability,
    }));
    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json({ error: "Error happened" }, { status: 500 });
  }
}
