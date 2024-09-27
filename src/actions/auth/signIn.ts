"use server";
import db from "@/db/db";
import { users } from "@/db/schemas/user-schema";
import { signInParser } from "@/utils/zod-valids";
import { eq, or } from "drizzle-orm";
import { z, ZodError } from "zod";
import bcrypt from "bcrypt";
import { ActionReturnType } from "@/utils/types";
import { signAccessToken, signRefreshToken } from "@/lib/signJWTs";
import { cookies } from "next/headers";

export default async function signIn(
  data: z.infer<typeof signInParser>
): Promise<ActionReturnType<undefined>> {
  try {
    const parsedData = await signInParser.parseAsync(data);

    // * Check if user exists
    const foundUser = await db
      .select()
      .from(users)
      .where(
        or(
          eq(users.userName, parsedData.usernameOrEmail),
          eq(users.email, parsedData.usernameOrEmail)
        )
      );

    // * if user is not found send an error
    if (!foundUser.length) {
      return { success: false, error: "Login failed" };
    }

    // * if user has found. compare the pwd if not matched send an error
    const match = await bcrypt.compare(
      parsedData.password,
      foundUser[0].password
    );

    if (!match) {
      return { success: false, error: "Login failed" };
    }

    // * create refresh and access tokens
    const { expiresIn: refreshExpiresIn, token: refreshToken } =
      signRefreshToken({ username: foundUser[0].userName });

    const accessToken = signAccessToken({
      username: foundUser[0].userName,
      name: foundUser[0].name,
      userId: foundUser[0].id,
      role: foundUser[0].role ?? undefined,
    });

    // * save the refresh-token in the DB
    await db
      .update(users)
      .set({ refreshToken })
      .where(eq(users.id, foundUser[0].id));

    // * Send refresh-token as cookie and access-token in return-data
    cookies().set({
      name: "refresh",
      value: refreshToken,
      httpOnly: true,
      secure: true,
      maxAge: refreshExpiresIn,
      sameSite: "strict",
    });
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
