import db from "@/db/db";
import { foodCategory } from "@/db/schemas/food-category-schema";
import verifyAccessRouter from "@/lib/verifyAccessRouter";
import { ADMINFLAG } from "@/utils/types";
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
    const res = await db.select().from(foodCategory);
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: "Error happened" }, { status: 500 });
  }
}
