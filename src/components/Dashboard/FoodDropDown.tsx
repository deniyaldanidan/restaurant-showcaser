"use client";

import { DashFoodType } from "@/utils/types";
import DashPopoverWrapper from "./DashPopoverWrapper";
import { FoodInfoView } from "./FoodInfoView";
import FoodForm from "./FoodForm";
import { MdModeEdit as EditIcon } from "react-icons/md";
import FoodNCatDeleteDialog from "./FoodNCatDeleteDialog";

type props = {
  data: DashFoodType;
};

export default function FoodDropDown(props: props) {
  return (
    <DashPopoverWrapper>
      <FoodInfoView
        data={props.data}
        className="table-pop-menu-classes text-green-700 hover:bg-primary hover:text-primary-foreground"
      />
      <FoodForm
        className="table-pop-menu-classes text-blue-700 hover:bg-secondary hover:text-secondary-foreground"
        action="edit"
        id={props.data.id}
        initialData={props.data}
      >
        <EditIcon />
        <span>Edit</span>
      </FoodForm>
      <FoodNCatDeleteDialog
        className="table-pop-menu-classes text-danger hover:bg-destructive hover:text-destructive-foreground"
        id={props.data.id}
        delType="food"
        name={props.data.name}
      />
    </DashPopoverWrapper>
  );
}
