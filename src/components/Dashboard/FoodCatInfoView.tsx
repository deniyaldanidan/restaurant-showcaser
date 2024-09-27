"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FoodCatType } from "@/utils/types";
import { FaRegEye as ViewIcon } from "react-icons/fa";

type props = {
  className: string;
  data: FoodCatType;
};

export function FoodCategoryInfoView({ className, data }: props) {
  return (
    <Dialog>
      <DialogTrigger className={className}>
        <ViewIcon />
        <span>View</span>
      </DialogTrigger>
      <DialogContent className="bg-sec-bg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            View Food Category Info
          </DialogTitle>
          <DialogDescription hidden>
            detailed info about Food category {data.name}
          </DialogDescription>
        </DialogHeader>
        <div className="table-dialog-info-grid">
          <div className="table-dialog-info-grid-row-label">Name:</div>
          <div className="capitalize">{data.name}</div>
          <div className="table-dialog-info-grid-row-label">Description:</div>
          <div className="text-wrap">{data.description}</div>
          <div className="table-dialog-info-grid-row-label">Food Type:</div>
          <div>{data.foodType.toUpperCase()}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
