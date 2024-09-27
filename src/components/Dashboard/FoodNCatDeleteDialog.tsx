"use client";

import deleteFoodCategory from "@/actions/food-categories/delete-food-category";
import deleteFood from "@/actions/foods/delete-food";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import useAuthContext from "@/hooks/useAuthContext";
import queryKeys from "@/utils/query-keys";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useQueryClient } from "@tanstack/react-query";
import { FaRegTrashAlt as DeleteIcon } from "react-icons/fa";

type props = {
  id: number;
  name: string;
  className: string;
  delType: "category" | "food";
};

export default function FoodNCatDeleteDialog({
  className,
  id,
  name,
  delType,
}: props) {
  const { authInfo } = useAuthContext();
  const queryClient = useQueryClient();

  const deleteCategory = async () => {
    if (authInfo.status !== true) {
      return;
    }
    try {
      var res: Awaited<ReturnType<typeof deleteFoodCategory>>;
      if (delType === "category") {
        res = await deleteFoodCategory(authInfo.data.token, id);
      } else {
        res = await deleteFood(authInfo.data.token, id);
      }

      if (!res.success) {
        console.log(res.error);
        return;
      }
      if (delType === "category") {
        queryClient.invalidateQueries({
          queryKey: queryKeys.foodCategory,
        });
      }
      queryClient.invalidateQueries({
        queryKey: queryKeys.foods,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className={className}>
        <DeleteIcon />
        <span>Delete</span>
      </DialogTrigger>
      <DialogContent className="bg-sec-bg">
        <DialogHeader className="text-lg text-secondary-foreground font-bold">
          <DialogTitle>
            Delete Food {delType === "category" ? "Category" : ""}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg text-high-fg font-medium">
          Are you sure you want to delete the &apos;<strong>{name}</strong>
          &apos; {delType}? This action cannot be undone, and all associated
          items will be permanently removed.
        </DialogDescription>
        <DialogFooter>
          <div className="flex justify-center items-center gap-x-6">
            <DialogClose asChild>
              <button type="button" className="btn btn-sm btn-secondary">
                Cancel
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={deleteCategory}
              >
                Delete
              </button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
