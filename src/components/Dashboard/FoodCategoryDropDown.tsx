"use client";

import FoodCatForm from "@/components/Dashboard/FoodCatForm";
import { FoodTypesEnumType } from "@/utils/types";
import { FoodCategoryInfoView } from "@/components/Dashboard/FoodCatInfoView";
import FoodNCatDeleteDialog from "@/components/Dashboard/FoodNCatDeleteDialog";
import DashPopoverWrapper from "@/components/Dashboard/DashPopoverWrapper";

type props = {
  id: number;
  initialData: {
    name: string;
    description: string;
    foodType: FoodTypesEnumType;
  };
};

export default function FoodCategoryDropDown(props: props) {
  return (
    <DashPopoverWrapper>
      {/* View BTN */}
      <FoodCategoryInfoView
        className="table-pop-menu-classes text-green-700 hover:bg-primary hover:text-primary-foreground"
        data={{ id: props.id, ...props.initialData }}
      />
      {/* Edit BTN */}
      <FoodCatForm
        action="edit"
        {...props}
        className="table-pop-menu-classes text-blue-700 hover:bg-secondary hover:text-secondary-foreground"
      />
      {/* Delete BTN */}
      <FoodNCatDeleteDialog
        className="table-pop-menu-classes text-danger hover:bg-destructive hover:text-destructive-foreground"
        id={props.id}
        name={props.initialData.name}
        delType="category"
      />
    </DashPopoverWrapper>
  );
}
