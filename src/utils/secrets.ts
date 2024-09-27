import "server-only";
import { z } from "zod";
import { validTimezoneParser } from "./zod-valids";

const simpleStringParser = z.string().min(1);

const secretsParser = z.object({
  DB_HOST: simpleStringParser,
  DB_NAME: simpleStringParser,
  DB_USER: simpleStringParser,
  DB_PWD: simpleStringParser,
  DB_PORT: z
    .string()
    .default("3306")
    .transform((val) => {
      const parsed = parseInt(val);
      if (isNaN(parsed)) {
        return 3306;
      }
      return parsed;
    }),
  REFRESH_SECRET: simpleStringParser,
  ACCESS_SECRET: simpleStringParser,
  MAILCHIMP: simpleStringParser,
  MAILCHIMPDC: simpleStringParser,
  MAILCHIMPLISTID: simpleStringParser,
  RESTAURANT_TIMEZONE: validTimezoneParser,
});

const parsedSecrets = secretsParser.safeParse({
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PWD: process.env.DB_PWD,
  DB_PORT: process.env.DB_PORT,
  REFRESH_SECRET: process.env.REFRESH_SECRET,
  ACCESS_SECRET: process.env.ACCESS_SECRET,
  MAILCHIMP: process.env.MAILCHIMP,
  MAILCHIMPDC: process.env.MAILCHIMPDC,
  MAILCHIMPLISTID: process.env.MAILCHIMPLISTID,
  RESTAURANT_TIMEZONE: process.env.RESTAURANT_TIMEZONE,
});

if (!parsedSecrets.success) {
  console.error(parsedSecrets.error.flatten().fieldErrors);
  throw new Error("some environment variables are missing");
}

const secrets = parsedSecrets.data;

export default secrets;
