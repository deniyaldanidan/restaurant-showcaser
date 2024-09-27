"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DashFoodType } from "@/utils/types";
import { FaRegEye as ViewIcon } from "react-icons/fa";

type props = {
  className: string;
  data: DashFoodType;
};

export function FoodInfoView({ className, data }: props) {
  return (
    <Dialog>
      <DialogTrigger className={className}>
        <ViewIcon />
        <span>View</span>
      </DialogTrigger>
      <DialogContent className="bg-sec-bg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            View Food Info
          </DialogTitle>
          <DialogDescription hidden>
            detailed info about Food {data.name}
          </DialogDescription>
        </DialogHeader>
        <div className="table-dialog-info-grid">
          <div className="table-dialog-info-grid-row-label">name:</div>
          <div className="capitalize">{data.name.toLowerCase()}</div>
          <div className="table-dialog-info-grid-row-label">description:</div>
          <div className="text-wrap">{data.description}</div>
          <div className="table-dialog-info-grid-row-label">price</div>
          <div>Rs. {data.price}</div>
          <div className="table-dialog-info-grid-row-label">availability</div>
          <div className="capitalize">
            {data.availability.join(", ").toLowerCase()}
          </div>
          <div className="table-dialog-info-grid-row-label">veg</div>
          <div>{data.veg ? "YES" : "NO"}</div>
          <div className="table-dialog-info-grid-row-label">Category</div>
          <div className="capitalize">
            {data.foodCategoryName.toLowerCase()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
