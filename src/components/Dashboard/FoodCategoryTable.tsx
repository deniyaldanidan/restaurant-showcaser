"use client";

import useAuthContext from "@/hooks/useAuthContext";
import fetchFoodCategory from "@/lib/queryFNS/fetchFoodCategory";
import queryKeys from "@/utils/query-keys";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FoodCategoryDropDown from "@/components/Dashboard/FoodCategoryDropDown";
import { foodTypes, FoodTypesEnumType } from "@/utils/types";

export default function FoodCategoryTable() {
  const { authInfo } = useAuthContext();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: queryKeys.foodCategory,
    queryFn: () =>
      fetchFoodCategory(authInfo.status === true ? authInfo.data.token : ""),
    enabled: authInfo.status === true,
  });
  const [filterVal, setFilterVal] = useState<string>("all");

  useEffect(() => {
    if (isError) {
      throw new Error("Error happened");
    }
  }, [isError, error]);

  const computedFoodCatz = useMemo(() => {
    if (!data?.length) {
      return [];
    }
    return data.filter((fdtyp) => {
      if (filterVal === "all") {
        return true;
      }
      return fdtyp.foodType.toLowerCase() === filterVal.toLowerCase();
    });
  }, [data, filterVal]);

  if (isLoading) {
    return <Skeleton className="w-full h-60 bg-card" />;
  }

  return data?.length ? (
    <div className="flex flex-col gap-y-2 tablet-md:mt-5">
      <div className="flex justify-end items-center gap-x-2 w-full tablet-md:justify-start mobile:flex-wrap mobile:gap-y-2.5">
        <label className="text-nowrap text-base font-medium text-high-fg">
          Filter by type:
        </label>
        <Select value={filterVal} onValueChange={(val) => setFilterVal(val)}>
          <SelectTrigger className="dashboard-filter-trigger-classes">
            <SelectValue placeholder="Choose a type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {foodTypes.map((fDTYP) => (
              <SelectItem
                key={fDTYP}
                value={fDTYP}
                className="text-foreground font-medium"
              >
                {fDTYP}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader className="text-base">
          <TableRow className="border-b-foreground">
            <TableHead className="font-semibold capitalize">Name</TableHead>
            <TableHead className="font-semibold capitalize">
              Description
            </TableHead>
            <TableHead className="font-semibold capitalize text-center">
              Food Type
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-base">
          {computedFoodCatz.map((cat) => (
            <TableRow key={cat.id}>
              <TableCell>{cat.name}</TableCell>
              <TableCell title={cat.description}>
                {cat.description.substring(0, 35)}...
              </TableCell>
              <TableCell className="text-center">
                {cat.foodType.toLowerCase()}
              </TableCell>
              <TableCell className="w-[2.5ch]">
                <FoodCategoryDropDown id={cat.id} initialData={{ ...cat }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="text-base font-medium">
            <TableCell colSpan={4} className="text-center">
              Total categories: {computedFoodCatz.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ) : (
    <div className="text-lg text-left font-medium mt-2.5">
      No Foods categories to show
    </div>
  );
}
