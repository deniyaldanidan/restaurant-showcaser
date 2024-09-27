"use client";

import { ReactEventHandler, useEffect, useRef, useState } from "react";
import { IoMdAdd as AddIcon } from "react-icons/io";
import InputGroupWrapper from "@/components/InputGroup/InputGroupWrapper";
import { foodTypes, FoodTypesEnumType } from "@/utils/types";
import { categoryFormParser } from "@/utils/zod-valids";
import { z, ZodError } from "zod";
import createFoodCategory from "@/actions/food-categories/create-food-category";
import useAuthContext from "@/hooks/useAuthContext";
import { useQueryClient } from "@tanstack/react-query";
import queryKeys from "@/utils/query-keys";
import { MdModeEdit as EditIcon } from "react-icons/md";
import editFoodCategory from "@/actions/food-categories/edit-food-category";

type props = { className: string } & (
  | {
      action: "add";
    }
  | {
      action: "edit";
      id: number;
      initialData: {
        name: string;
        description: string;
        foodType: FoodTypesEnumType;
      };
    }
);

export default function FoodCatForm(props: props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { authInfo } = useAuthContext();
  const queryClient = useQueryClient();

  //   * input-states
  const [name, setName] = useState<string>(
    props.action === "edit" ? props.initialData.name : ""
  );
  const [description, setDescription] = useState<string>(
    props.action === "edit" ? props.initialData.description : ""
  );
  const [foodType, setFoodType] = useState<string>(
    props.action === "edit" ? props.initialData.foodType : foodTypes[0]
  );

  // * loading / error states
  const [loading, setLoading] = useState<boolean>(false);
  const [rootErr, setRootErr] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<
    z.inferFlattenedErrors<typeof categoryFormParser>["fieldErrors"]
  >({});

  useEffect(() => {
    let dialogRefValue: HTMLDialogElement | null = null;
    const cleanUpFN = () => {
      setName(props.action === "add" ? "" : props.initialData.name);
      setDescription(
        props.action === "add" ? "" : props.initialData.description
      );
      setFoodType(
        props.action === "add" ? foodTypes[0] : props.initialData.foodType
      );

      setLoading(false);
      setRootErr("");
      setFieldErrors({});
      console.log("cleaning up");
    };
    if (dialogRef.current) {
      dialogRef.current?.addEventListener("close", cleanUpFN);
      dialogRefValue = dialogRef.current;
    }

    return () => {
      if (dialogRefValue) {
        dialogRefValue.removeEventListener("close", cleanUpFN);
      }
    };
  }, [props]);

  const submitHandler: ReactEventHandler = async (e) => {
    e.preventDefault();
    if (authInfo.status !== true) {
      return;
    }
    setRootErr("");
    setFieldErrors({});
    setLoading(true);
    try {
      const parsedVals = categoryFormParser.parse({
        name,
        description,
        foodType,
      });
      var res: Awaited<ReturnType<typeof createFoodCategory>>;
      if (props.action === "add") {
        res = await createFoodCategory(authInfo.data.token, parsedVals);
      } else {
        res = await editFoodCategory(authInfo.data.token, props.id, parsedVals);
      }
      if (res.success === false) {
        return setRootErr(res.error);
      }
      queryClient.invalidateQueries({
        queryKey: queryKeys.foodCategory,
      });
      if (props.action === "edit") {
        queryClient.invalidateQueries({ queryKey: queryKeys.foods });
      }
      dialogRef.current?.close();
      return;
    } catch (error) {
      if (error instanceof ZodError) {
        return setFieldErrors(error.flatten().fieldErrors);
      }
      console.log(error);
      setRootErr("error happened");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className={props.className}
        onClick={() => dialogRef.current?.showModal()}
      >
        {props.action === "add" ? (
          <>
            <AddIcon />
            <span>Add</span>
          </>
        ) : (
          <>
            <EditIcon />
            <span>Edit</span>
          </>
        )}
      </button>
      <dialog className="my-dialog bg-transparent" ref={dialogRef}>
        <div className="bg-sec-bg w-[95vw] max-w-2xl h-fit px-5 py-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold">
              {props.action === "add" ? "Add" : "Edit"} Category
            </h3>
            <button
              className="btn btn-xs btn-secondary"
              onClick={() => dialogRef.current?.close()}
            >
              Close
            </button>
          </div>
          <form className="flex flex-col gap-y-6" onSubmit={submitHandler}>
            <p className="text-base text-center font-semibold text-danger">
              {rootErr}
            </p>
            <InputGroupWrapper
              inpLabel="Category Name"
              inpId="add-food-cat-name-input"
              inpError={fieldErrors?.name ?? ""}
            >
              <input
                type="text"
                id="add-food-cat-name-input"
                className="inp-base-classes"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name of the Food Category"
              />
            </InputGroupWrapper>
            <InputGroupWrapper
              inpId="add-food-cat-description-input"
              inpLabel="Description"
              inpError={fieldErrors?.description ?? ""}
            >
              <textarea
                id="add-food-cat-description-input"
                className="inp-base-classes"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="say something short about this category"
              ></textarea>
            </InputGroupWrapper>
            <InputGroupWrapper
              inpId="add-food-cat-foodType-input"
              inpLabel="Food Type"
              inpError={fieldErrors?.foodType ?? ""}
            >
              <select
                id="add-food-cat-foodType-input"
                className="inp-base-classes lowercase"
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
              >
                {foodTypes.map((fdtyp) => (
                  <option value={fdtyp} key={fdtyp} className="capitalize">
                    {fdtyp.toLowerCase()}
                  </option>
                ))}
              </select>
            </InputGroupWrapper>
            <button
              type="submit"
              className="btn btn-full btn-primary"
              disabled={loading}
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
