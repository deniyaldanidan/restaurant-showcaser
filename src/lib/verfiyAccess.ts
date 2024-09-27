import "server-only";

import { z, ZodError } from "zod";
import { jwtTokenParser, accessPayloadParser } from "@/utils/zod-valids";
import jwt, {
  JsonWebTokenError,
  TokenExpiredError,
  NotBeforeError,
} from "jsonwebtoken";
import secrets from "@/utils/secrets";

export default function verifyAccess(
  token: string,
  role?: string
):
  | (z.infer<typeof accessPayloadParser> & { success: true })
  | { success: false } {
  try {
    // * is the token a valid JWT
    const parsedToken = jwtTokenParser.parse(token);
    // * verify JWT & parse the payload
    const parsedData = accessPayloadParser.parse(
      jwt.verify(parsedToken, secrets.ACCESS_SECRET)
    );
    // * only allow users with the role
    if (typeof role === "string") {
      return parsedData?.role === role
        ? { success: true, ...parsedData }
        : { success: false };
    }
    return { ...parsedData, success: true };
  } catch (error) {
    if (
      error instanceof ZodError ||
      error instanceof JsonWebTokenError ||
      error instanceof TokenExpiredError ||
      error instanceof NotBeforeError
    ) {
      return { success: false };
    }
    console.error(error);
    return { success: false };
  }
}
