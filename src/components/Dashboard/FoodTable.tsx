"use client";

import useAuthContext from "@/hooks/useAuthContext";
import fetchFoods from "@/lib/queryFNS/fetchFoods";
import queryKeys from "@/utils/query-keys";
import { useQueries } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FoodDropDown from "@/components/Dashboard/FoodDropDown";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import fetchFoodCategory from "@/lib/queryFNS/fetchFoodCategory";

export default function FoodTable() {
  const { authInfo } = useAuthContext();
  const [
    { data, isError, isLoading },
    { data: categories, isError: isCatError, isLoading: isCatLoading },
  ] = useQueries({
    queries: [
      {
        queryKey: queryKeys.foods,
        queryFn: () =>
          fetchFoods(authInfo.status === true ? authInfo.data.token : ""),
        enabled: authInfo.status === true,
        retry: 0,
      },
      {
        queryKey: queryKeys.foodCategory,
        queryFn: () =>
          fetchFoodCategory(
            authInfo.status === true ? authInfo.data.token : ""
          ),
        enabled: authInfo.status === true,
      },
    ],
  });

  const [filterVal, setFilterVal] = useState<string>("all");

  const computedFoods = useMemo(() => {
    if (!data?.length || !categories?.length) {
      return [];
    }
    return data.filter((fd) => {
      if (filterVal === "all") {
        return true;
      }
      const parsedId = parseInt(filterVal);
      if (isNaN(parsedId)) {
        return false;
      }
      return fd.foodCategoryId === parsedId;
    });
  }, [data, categories, filterVal]);

  useEffect(() => {
    if (isError || isCatError) {
      throw new Error("Error happened");
    }
  }, [isError, isCatError]);

  if (isLoading || isCatLoading) {
    return <Skeleton className="w-full h-72 bg-card" />;
  }

  return data?.length ? (
    <div className="flex flex-col gap-y-2 tablet-md:mt-5">
      {categories?.length ? (
        <div className="flex justify-end items-center gap-x-2 w-full tablet-md:justify-start mobile:flex-wrap mobile:gap-y-2.5">
          <label className="text-nowrap text-base font-medium text-high-fg">
            Filter by category:
          </label>
          <Select value={filterVal} onValueChange={(val) => setFilterVal(val)}>
            <SelectTrigger className="dashboard-filter-trigger-classes capitalize">
              <SelectValue placeholder="Choose a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">all</SelectItem>
              {categories.map((ct) => (
                <SelectItem key={ct.id} value={`${ct.id}`}>
                  {ct.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        ""
      )}
      <Table>
        <TableHeader className="text-base">
          <TableRow className="border-b-foreground">
            <TableHead className="font-semibold capitalize">Name</TableHead>
            <TableHead className="font-semibold capitalize">
              Description
            </TableHead>
            <TableHead className="font-semibold capitalize text-center">
              price
            </TableHead>
            <TableHead className="font-semibold capitalize text-center">
              availability
            </TableHead>
            <TableHead className="font-semibold capitalize text-center w-[4ch]">
              veg
            </TableHead>
            <TableHead className="font-semibold capitalize text-center">
              Category
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-base">
          {computedFoods.map((fd) => (
            <TableRow key={fd.id}>
              <TableCell className="capitalize">{fd.name}</TableCell>
              <TableCell title={fd.description}>
                {fd.description.substring(0, 35)}....
              </TableCell>
              <TableCell className="text-center">Rs. {fd.price}</TableCell>
              <TableCell className="text-center capitalize">
                {fd.availability.join(", ").toLowerCase()}
              </TableCell>
              <TableCell className="text-center w-[4ch]">
                {fd.veg ? "Yes" : "No"}
              </TableCell>
              <TableCell className="text-center capitalize">
                {fd.foodCategoryName.toLowerCase()}
              </TableCell>
              <TableCell className="w-[2.5ch]">
                <FoodDropDown data={fd} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="text-base font-medium">
            <TableCell colSpan={7} className="text-center">
              Total Foods: {computedFoods.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ) : (
    <div className="text-lg text-left font-medium mt-2.5">No Foods to show</div>
  );
}
