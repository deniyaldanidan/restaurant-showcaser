import "server-only";

import jwt from "jsonwebtoken";
import secrets from "@/utils/secrets";
import { z } from "zod";
import { accessPayloadParser, refershPayloadParser } from "@/utils/zod-valids";

export function signRefreshToken(
  payload: z.infer<typeof refershPayloadParser>
) {
  return {
    token: jwt.sign(payload, secrets.REFRESH_SECRET, { expiresIn: "24h" }),
    expiresIn: 24 * 60 * 60,
  };
}

export function signAccessToken(payload: z.infer<typeof accessPayloadParser>) {
  return jwt.sign(payload, secrets.ACCESS_SECRET, { expiresIn: "12h" });
}
