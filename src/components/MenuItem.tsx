import { foodAvailEnum, FoodAvailEnumType } from "@/utils/types";
import { BsFillTriangleFill as TriangleIcon } from "react-icons/bs";

type props = {
  name: string;
  isVeg: boolean;
  price: number;
  description: string;
  availability: FoodAvailEnumType[];
};

export default function MenuItem(props: props) {
  const foodAvailability = foodAvailEnum.filter((avail) =>
    props.availability.includes(avail)
  );
  return (
    <div
      className="flex gap-x-4 justify-between py-4 border-b-2 mobile:flex-col mobile:gap-y-3"
      role="group"
      aria-label={props.name}
    >
      {/* left */}
      <div className="flex flex-col gap-y-3">
        {/* Food Name */}
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-base font-bold capitalize">{props.name}</h3>
          {props.isVeg ? <VegIcon /> : <NonVegIcon />}
        </div>
        {/* Food descripiton */}
        <p
          className="text-base font-medium leading-relaxed mobile-lg:text-sm"
          aria-label={`about ${props.name}`}
        >
          {props.description}
        </p>
        {/* Food availability */}
        <p
          className="capitalize font-medium mobile-lg:text-sm"
          style={{ wordSpacing: "8px" }}
          aria-label="availability"
        >
          {foodAvailability.join(" | ").toLowerCase()}
        </p>
      </div>
      {/* right */}
      <div
        className="text-nowrap text-lg font-medium mobile:text-base"
        aria-label="Price in rupees"
      >
        <span className="hidden mobile:inline">Price: </span>
        <span>₹ {props.price}</span>
      </div>
    </div>
  );
}

function VegIcon() {
  return (
    <div
      className="p-1 flex items-center rounded-sm w-fit h-fit border border-[#2a0]"
      aria-label="veg"
    >
      <span className="block h-3 w-3 bg-[#2a0] rounded-full"></span>
    </div>
  );
}

function NonVegIcon() {
  return (
    <div
      className="p-1 flex items-center rounded-sm w-fit h-fit border border-[#87001B]"
      aria-label="non-veg"
    >
      <TriangleIcon
        className="text-xs text-[#87001B] leading-none"
        aria-hidden
      />
    </div>
  );
}
