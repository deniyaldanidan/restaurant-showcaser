"use server";
import db from "@/db/db";
import { users } from "@/db/schemas/user-schema";
import { signUpParser } from "@/utils/zod-valids";
import { eq, or } from "drizzle-orm";
import { z, ZodError } from "zod";
import bcrypt from "bcrypt";
import { ActionReturnType } from "@/utils/types";

export default async function signUp(
  data: z.infer<typeof signUpParser>
): Promise<ActionReturnType<undefined>> {
  try {
    const parsedData = await signUpParser.parseAsync(data);

    // * Check if user already exists
    const foundUser = await db
      .select()
      .from(users)
      .where(
        or(
          eq(users.userName, parsedData.userName),
          eq(users.email, parsedData.email)
        )
      );

    // * if user is found send an error
    if (foundUser.length) {
      return { success: false, error: "User already exists" };
    }

    // * if no such user has found. hash the pwd and save the user in db
    const hashedPWD = await bcrypt.hash(parsedData.password, 10);

    const savedUser = await db
      .insert(users)
      .values({
        name: parsedData.name,
        userName: parsedData.userName,
        email: parsedData.email,
        password: hashedPWD,
      })
      .$returningId();

    if (!savedUser.length) {
      throw new Error("Error happened in insert query. No Id's found");
    }

    return { success: true };
  } catch (error) {
    if (error instanceof SyntaxError) {
      return { error: "Invalid JSON SYNTAX", success: false };
    }
    if (error instanceof ZodError) {
      return { error: "Validation failed", success: false };
    }
    console.error(error);
    return { error: "Internal error happened.", success: false };
  }
}
