"use server";

import db from "@/db/db";
import { bookings } from "@/db/schemas/booking-schema";
import verifyAccess from "@/lib/verfiyAccess";
import secrets from "@/utils/secrets";
import { ActionReturnType, ADMINFLAG } from "@/utils/types";
import { TZDate } from "@date-fns/tz";
import { subDays } from "date-fns";
import { lt } from "drizzle-orm";
import { ZodError } from "zod";

export default async function deletePastAction(
  token: string
): Promise<ActionReturnType<undefined>> {
  try {
    // * auth verification
    const auth = verifyAccess(token, ADMINFLAG);
    if (auth.success === false) {
      return { success: false, error: "Authentication failed" };
    }
    // * get the current date
    const currentDate = subDays(
      new TZDate(new Date(), secrets.RESTAURANT_TIMEZONE),
      1
    );

    // * delete data in DB where date is lower than currentDate
    await db.delete(bookings).where(lt(bookings.date, currentDate));

    return { success: true };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, error: "invalid id" };
    }
    console.log(error);
    return { success: false, error: "Error happened" };
  }
}
