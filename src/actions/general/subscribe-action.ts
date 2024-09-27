"use server";

import secrets from "@/utils/secrets";
import { ActionReturnType } from "@/utils/types";
import { emailParser } from "@/utils/zod-valids";
import { ZodError } from "zod";

export default async function subscribeAction(
  email: string
): Promise<ActionReturnType<undefined>> {
  try {
    const parsedEmail = emailParser.parse(email);

    await fetch(
      `https://${secrets.MAILCHIMPDC}.api.mailchimp.com/3.0/lists/${secrets.MAILCHIMPLISTID}/members`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${secrets.MAILCHIMP}` },
        body: JSON.stringify({
          email_address: parsedEmail,
          status: "subscribed",
        }),
      }
    );

    return { success: true };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, error: "Invalid email" };
    }

    console.log(error);

    return { success: false, error: "error happened, Try again" };
  }
}
