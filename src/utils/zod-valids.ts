import validator from "validator";
import { z } from "zod";
import { foodAvailEnum, foodTypes } from "@/utils/types";
import { TZDate } from "@date-fns/tz";

const nameParser = z
  .string()
  .min(3)
  .max(50)
  .refine(
    (val) => validator.isAlpha(val, "en-US", { ignore: " " }),
    "only chars a-zA-Z and spaces are allowed."
  );

export const emailParser = z.string().min(1).email();

const userNameParser = z
  .string()
  .min(3, "atleast 3 chars required")
  .max(30, "exceed limit of 50 chars.")
  .refine(
    (val) => validator.isAlphanumeric(val, "en-US", { ignore: "-_" }),
    "only chars a-zA-Z0-9_- are allowed"
  );

export const signUpParser = z.object({
  name: nameParser,
  userName: userNameParser,
  email: z.string().email(),
  password: z
    .string()
    .min(8, "should have atleast 8 chars")
    .max(30, "exceed limit of 30 chars")
    .refine(
      (val) => validator.isStrongPassword(val, { minLength: 8 }),
      "password is too weak"
    ),
});

export const signInParser = z.object({
  usernameOrEmail: z.string().email().or(userNameParser),
  password: z.string().min(1, "required").max(30),
});

export const signInPageParser = signInParser.extend({
  usernameOrEmail: z.string().min(1, "required").max(200),
});

export const refershPayloadParser = z.object({
  username: userNameParser,
});

export const jwtTokenParser = z
  .string({ message: "Invalid JWT" })
  .refine((val) => validator.isJWT(val), "Invalid JWT");

export const bearerParser = z
  .string()
  .startsWith("Bearer ")
  .transform((val) => val.split(" ")[1]);

export const accessPayloadParser = z.object({
  username: userNameParser,
  name: nameParser,
  role: z.string().optional(),
  userId: z.number().int(),
});

export const categoryFormParser = z.object({
  name: z.string().min(1, "required").max(255),
  description: z.string().min(10).max(1000),
  foodType: z.enum(foodTypes, { message: "Invalid value" }),
});

export const intParser = z
  .number()
  .int()
  .or(
    z.string().transform((val, ctx) => {
      const parsedInt = parseInt(val);
      if (isNaN(parsedInt)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Not a Number",
        });
        return z.NEVER;
      }
      return parsedInt;
    })
  );

export const foodFormParser = z.object({
  name: z.string().min(3).max(250),
  description: z.string().min(10).max(1000),
  price: intParser,
  availability: z
    .enum(foodAvailEnum)
    .array()
    .min(1)
    .max(3)
    .transform((val) => new Array(...new Set(val))),
  veg: z.boolean(),
  foodCategoryId: intParser,
});

export const bookATableFormParser = z.object({
  firstname: z
    .string()
    .min(2, "must contain atleast 2 chars")
    .max(126, "should be lower than 126 chars"),
  lastname: z
    .string()
    .min(2, "must contain atleast 2 chars")
    .max(126, "should be lower than 126 chars"),
  noOfPersons: intParser,
  date: z
    .string({ message: "should be a string" })
    .date("Date(YYYY-MM-DD) is required"),
  time: z
    .string({ message: "should be a string" })
    .time({ message: "Time(HH:MM) is required" }),
  mobile: z
    .string()
    .refine((val) => validator.isMobilePhone(val), "invalid contact info"),
});

export const validTimezoneParser = z
  .string()
  .transform((val) => {
    const date = new Date();
    const convertedDate = new TZDate(date, val);
    return isNaN(convertedDate.getDate()) ? "UTC" : val;
  })
  .catch("UTC");
