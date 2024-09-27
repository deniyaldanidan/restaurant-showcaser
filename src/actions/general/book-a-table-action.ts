"use server";

import db from "@/db/db";
import { bookings } from "@/db/schemas/booking-schema";
import { ActionReturnType } from "@/utils/types";
import { bookATableFormParser } from "@/utils/zod-valids";
import { z, ZodError } from "zod";

export default async function bookATableAction(
  data: z.infer<typeof bookATableFormParser>
): Promise<ActionReturnType<undefined>> {
  try {
    const parsedData = bookATableFormParser.parse(data);
    await db
      .insert(bookings)
      .values({
        ...parsedData,
        date: new Date(parsedData.date),
        name: `${parsedData.firstname} ${parsedData.lastname}`,
      });
    return { success: true };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, error: "Invalid inputs" };
    }
    console.log(error);
    return { success: false, error: "Error happened, Try again" };
  }
}
