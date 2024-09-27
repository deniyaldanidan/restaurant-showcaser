import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { SlOptionsVertical as OptionsIcon } from "react-icons/sl";

export default function DashPopoverWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Popover>
      <PopoverTrigger>
        <OptionsIcon className="hover:cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="min-w-32 w-fit" style={{ padding: "4px 2px" }}>
        <div className="w-full flex flex-col gap-y-0.5">{children}</div>
      </PopoverContent>
    </Popover>
  );
}
