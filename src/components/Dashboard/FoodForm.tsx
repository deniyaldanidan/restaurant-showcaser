"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { FormEventHandler, useEffect, useState } from "react";
import InputGroupWrapper from "../InputGroup/InputGroupWrapper";
import { DashFoodType, foodAvailEnum, FoodAvailEnumType } from "@/utils/types";
import Select from "react-select";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import queryKeys from "@/utils/query-keys";
import useAuthContext from "@/hooks/useAuthContext";
import fetchFoodCategory from "@/lib/queryFNS/fetchFoodCategory";
import { foodFormParser } from "@/utils/zod-valids";
import { z, ZodError } from "zod";
import createFood from "@/actions/foods/create-food";
import editFood from "@/actions/foods/edit-food";

type props = {
  children: React.ReactNode;
  className: string;
} & (
  | {
      action: "add";
    }
  | { action: "edit"; id: number; initialData: Omit<DashFoodType, "id"> }
);

export default function FoodForm(props: props) {
  const { authInfo } = useAuthContext();
  const { data: foodCategoryList } = useQuery({
    queryKey: queryKeys.foodCategory,
    queryFn: () =>
      fetchFoodCategory(authInfo.status === true ? authInfo.data.token : ""),
    enabled: authInfo.status === true,
  });
  const queryClient = useQueryClient();

  const [dialogState, setDialogState] = useState<boolean>(false);
  // * Input States
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [availability, setAvailability] = useState<FoodAvailEnumType[]>([]);
  const [veg, setVeg] = useState<boolean>(false);
  const [foodCategoryId, setFoodCategoryId] = useState<string>("");
  // * error states
  const [rootErr, setRootErr] = useState<string>("");
  const [fieldErr, setFieldErr] = useState<
    z.inferFlattenedErrors<typeof foodFormParser>["fieldErrors"]
  >({});
  // * loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!dialogState) {
      if (props.action == "edit") {
        setName(props.initialData.name);
        setDescription(props.initialData.description);
        setPrice(`${props.initialData.price}`);
        setAvailability(props.initialData.availability);
        setVeg(props.initialData.veg);
        setFoodCategoryId(`${props.initialData.foodCategoryId}`);
      } else {
        setName("");
        setDescription("");
        setPrice("");
        setAvailability([]);
        setVeg(false);
        setFoodCategoryId("");
      }
      setRootErr("");
      setFieldErr({});
      setIsLoading(false);
    }
  }, [dialogState, props]);

  const submitFN: FormEventHandler = async (e) => {
    e.preventDefault();
    if (authInfo.status !== true) {
      return;
    }
    setRootErr("");
    setFieldErr({});
    setIsLoading(true);
    try {
      const parsedData = foodFormParser.parse({
        name,
        description,
        price,
        availability,
        veg,
        foodCategoryId,
      });
      var res: Awaited<ReturnType<typeof createFood>>;
      if (props.action === "edit") {
        res = await editFood(authInfo.data.token, props.id, parsedData);
      } else {
        res = await createFood(authInfo.data.token, parsedData);
      }
      if (!res.success) {
        setRootErr(res.error);
        return;
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.foods });
      setDialogState(false);
    } catch (error) {
      if (error instanceof ZodError) {
        return setFieldErr(error.flatten().fieldErrors);
      }
      console.log(error);
      setRootErr("error happened");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={dialogState} onOpenChange={setDialogState}>
      <DialogTrigger className={props.className}>
        {props.children}
      </DialogTrigger>
      <DialogContent className="bg-sec-bg max-h-screen overflow-y-auto px-6 py-4 rounded-md">
        <DialogHeader>
          <DialogTitle className="capitalize">
            {props.action.toLowerCase()} Food
          </DialogTitle>
          <DialogDescription>
            Fill out this form to {props.action} a food
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-y-3" onSubmit={submitFN}>
          <InputGroupWrapper
            inpError={fieldErr?.name ?? ""}
            inpId="add-food-form-name-input"
            inpLabel="Name"
          >
            <input
              type="text"
              id="add-food-form-name-input"
              className="inp-base-classes"
              placeholder="Enter food name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroupWrapper>
          <InputGroupWrapper
            inpId="add-food-form-description-input"
            inpLabel="Description"
            inpError={fieldErr?.description ?? ""}
          >
            <textarea
              className="inp-base-classes"
              id="add-food-form-description-input"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write something short about the food"
            ></textarea>
          </InputGroupWrapper>
          <InputGroupWrapper
            inpError={fieldErr?.price ?? ""}
            inpId="add-food-form-price-input"
            inpLabel="Price"
          >
            <input
              type="number"
              id="add-food-form-price-input"
              className="inp-base-classes"
              placeholder="Enter food price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </InputGroupWrapper>
          <InputGroupWrapper
            inpLabel="Food Availability"
            inpId="add-food-form-availability-input"
            inpError={fieldErr?.availability ?? ""}
          >
            <Select
              isMulti
              options={foodAvailEnum.map((opt) => ({
                label: opt,
                value: opt,
              }))}
              value={availability.map((opt) => ({ label: opt, value: opt }))}
              onChange={(option) =>
                setAvailability(option.map((opt) => opt.value))
              }
              inputId="add-food-form-availability-input"
              placeholder="Select food availability"
              styles={{
                option: (styles) => {
                  return { ...styles, color: "#000", fontWeight: 500 };
                },
                multiValue: (styles) => {
                  return { ...styles, color: "#000", fontWeight: 600 };
                },
              }}
              className="text-black"
            />
          </InputGroupWrapper>
          <div className="flex items-center gap-x-2.5">
            <label
              htmlFor="add-food-form-veg-only"
              className="text-lg font-medium capitalize"
            >
              Pure Veg
            </label>
            <input
              type="checkbox"
              id="add-food-form-veg-only"
              checked={veg}
              onChange={(e) => setVeg(e.target.checked)}
              className="w-4 h-4 rounded-sm cursor-pointer"
            />
          </div>
          <InputGroupWrapper
            inpId="add-food-form-food-cat-input"
            inpLabel="Food Category"
            inpError={
              fieldErr?.foodCategoryId?.length ? "please select one" : ""
            }
          >
            <select
              id="add-food-form-food-cat-input"
              value={foodCategoryId}
              onChange={(e) => setFoodCategoryId(e.target.value)}
              className="inp-base-classes"
            >
              <option value="" disabled>
                Select value
              </option>
              {foodCategoryList?.map((fdcat) => (
                <option key={fdcat.id} value={fdcat.id} className="capitalize">
                  {fdcat.name.toLowerCase()}
                </option>
              ))}
            </select>
          </InputGroupWrapper>

          <DialogFooter>
            <div>
              <div className="flex justify-center items-center gap-x-6 mt-1.5">
                <button
                  type="submit"
                  className="btn btn-sm btn-primary"
                  disabled={isLoading}
                >
                  Submit
                </button>
                <DialogClose asChild>
                  <button type="button" className="btn btn-sm btn-secondary">
                    Cancel
                  </button>
                </DialogClose>
              </div>
              <p className="text-center font-medium text-danger mt-2">
                {rootErr}
              </p>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
