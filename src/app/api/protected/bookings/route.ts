import db from "@/db/db";
import { bookings } from "@/db/schemas/booking-schema";
import verifyAccessRouter from "@/lib/verifyAccessRouter";
import { ADMINFLAG } from "@/utils/types";
import { NextResponse } from "next/server";
import { format } from "date-fns";

const myDateFormatter = "yyyy-MM-dd";

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
      .select()
      .from(bookings)
      .orderBy(bookings.date, bookings.time);

    const data = res.map((bkg) => ({
      ...bkg,
      date:
        bkg.date instanceof Date
          ? format(bkg.date, myDateFormatter)
          : format(new Date(bkg.date), myDateFormatter),
    }));

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error happened" }, { status: 500 });
  }
}
