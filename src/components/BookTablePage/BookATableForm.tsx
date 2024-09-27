"use client";

import { cinzel } from "@/lib/fonts";
import BookFormInputGRP from "./BookFormInputGRP";
import { FormEventHandler, useState } from "react";
import { bookATableFormParser } from "@/utils/zod-valids";
import { z, ZodError } from "zod";
import { format } from "date-fns";
import bookATableAction from "@/actions/general/book-a-table-action";
import { useToast } from "@/hooks/use-toast";

const inputGrpContainerClasses =
  "w-full flex justify-center gap-x-14 max-w-[900px] tablet-lg:gap-x-10 tablet:flex-col tablet:gap-y-12";

export default function BookATableForm() {
  const { toast } = useToast();
  //* input states
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [noOfPersons, setNoOfPersons] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  // * loading & error states
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rootErr, setRootErr] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<
    z.inferFlattenedErrors<typeof bookATableFormParser>["fieldErrors"]
  >({});

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setRootErr("");
    setFieldErrors({});
    try {
      const parsedData = bookATableFormParser.parse({
        firstname,
        lastname,
        noOfPersons,
        date,
        time: `${time}:00`,
        mobile,
      });
      const res = await bookATableAction(parsedData);
      if (!res.success) {
        return setRootErr(res.error);
      }
      setFirstname("");
      setLastname("");
      setNoOfPersons("");
      setMobile("");
      setDate("");
      setTime("");
      toast({
        title: "Table is booked",
        description: "Thank you for booking.",
        variant: "default",
        className: "text-[#2b3]",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        setFieldErrors(error.flatten().fieldErrors);
        return;
      }
      setRootErr("error happened, Try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="px-page-margin-x py-14 flex flex-col items-center gap-y-12"
      onSubmit={submitHandler}
      aria-label="book a table form"
    >
      {/* Heading & description */}
      <div
        className="flex flex-col gap-y-2 items-center w-full max-w-[600px]"
        role="group"
        aria-label="Book a table form intro"
      >
        <h2
          className={`${cinzel.className} font-bold text-section-title text-center uppercase`}
        >
          RESERVE A TABLE
        </h2>
        <p
          className="font-medium text-section-description text-center leading-relaxed"
          aria-label="description"
        >
          Plan your visit to Odel Digest Restaurant by reserving a table. Book
          now and prepare for a culinary adventure like no other.
        </p>
        <p className="mt-1.5 font-semibold text-danger text-base">{rootErr}</p>
      </div>
      {/* firstname & lastname input groups */}
      <div className={inputGrpContainerClasses}>
        <BookFormInputGRP
          labelText="First Name"
          error={fieldErrors?.firstname ?? ""}
          inputProps={{
            type: "text",
            id: "book-table-first-name-inp",
            placeholder: "Your first name here",
            value: firstname,
            onChange(e) {
              setFirstname(e.target.value);
            },
          }}
        />
        <BookFormInputGRP
          labelText="Last Name"
          error={fieldErrors?.lastname ?? ""}
          inputProps={{
            type: "text",
            id: "book-table-last-name-inp",
            placeholder: "Your last name here",
            value: lastname,
            onChange(e) {
              setLastname(e.target.value);
            },
          }}
        />
      </div>
      {/* No.of.persons & Mobile.No input groups */}
      <div className={inputGrpContainerClasses}>
        <BookFormInputGRP
          labelText="No of Persons"
          error={fieldErrors?.noOfPersons ?? ""}
          inputProps={{
            type: "number",
            id: "book-table-no-of-persons-inp",
            placeholder: "enter here",
            value: noOfPersons,
            onChange(e) {
              setNoOfPersons(e.target.value);
            },
          }}
        />
        <BookFormInputGRP
          labelText="Mobile No."
          error={fieldErrors?.mobile ?? ""}
          inputProps={{
            type: "text",
            id: "book-table-mobile-inp",
            placeholder: "Your contact number here",
            value: mobile,
            onChange(e) {
              setMobile(e.target.value);
            },
          }}
        />
      </div>
      {/* Date & time input groups */}
      <div className={inputGrpContainerClasses}>
        <BookFormInputGRP
          labelText="Date"
          error={fieldErrors?.date ?? ""}
          inputProps={{
            type: "date",
            id: "book-table-date-inp",
            placeholder: "Enter here",
            value: date,
            onChange(e) {
              setDate(e.target.value);
            },
            min: format(new Date(), "yyyy-MM-dd"),
          }}
        />
        <BookFormInputGRP
          labelText="Time"
          error={fieldErrors?.time ?? ""}
          inputProps={{
            type: "time",
            id: "book-table-time-inp",
            placeholder: "Enter here",
            value: time,
            onChange(e) {
              setTime(e.target.value);
            },
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-base btn-primary"
        disabled={isLoading}
      >
        Book Now
      </button>
    </form>
  );
}
