"use server";

import { cookies } from "next/headers";
import validator from "validator";
import jwt, {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
} from "jsonwebtoken";
import { refershPayloadParser } from "@/utils/zod-valids";
import db from "@/db/db";
import { users } from "@/db/schemas/user-schema";
import { and, eq } from "drizzle-orm";
import { signAccessToken } from "@/lib/signJWTs";
import secrets from "@/utils/secrets";
import { ActionReturnType } from "@/utils/types";

export default async function refresh(): Promise<
  ActionReturnType<{ token: string }>
> {
  try {
    // * Get the refresh and check if it is a valid JWT
    const refreshToken = cookies().get("refresh")?.value;

    if (typeof refreshToken === "undefined" || !validator.isJWT(refreshToken)) {
      return { success: false, error: "Invalid Cookie" };
    }
    // * verify our refresh-token and parse the payload from the token
    const parsedRefreshPayload = refershPayloadParser.safeParse(
      jwt.verify(refreshToken, secrets.REFRESH_SECRET)
    );
    if (!parsedRefreshPayload.success) {
      return { success: false, error: "Invalid Cookie" };
    }
    const { data: refreshPayload } = parsedRefreshPayload;
    // * get the owner
    const foundUser = await db
      .select()
      .from(users)
      .where(
        and(
          eq(users.userName, refreshPayload.username),
          eq(users.refreshToken, refreshToken)
        )
      );
    if (!foundUser.length) {
      return { success: false, error: "Invalid Cookie" };
    }
    // * generate access-token and send it
    const accessToken = signAccessToken({
      username: foundUser[0].userName,
      userId: foundUser[0].id,
      name: foundUser[0].name,
      role: foundUser[0].role ?? undefined,
    });

    return { success: true, data: { token: accessToken } };
  } catch (error) {
    if (
      error instanceof JsonWebTokenError ||
      error instanceof TokenExpiredError ||
      error instanceof NotBeforeError
    ) {
      return { success: false, error: "Invalid Cookie" };
    }
    console.error(error);
    return { success: false, error: "Internal error happened" };
  }
}
