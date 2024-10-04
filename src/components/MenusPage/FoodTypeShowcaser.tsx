import { FoodTypesEnumType, MainMenuDataType } from "@/utils/types";
import Image, { StaticImageData } from "next/image";
import MenuItem from "../MenuItem";
import { FaAnglesRight as DoubleRightIcon } from "react-icons/fa6";
import Link from "next/link";
import myRoutes from "@/utils/myRoutes";

type props = {
  typeName: string;
  typeDesc: string;
  typeImg: StaticImageData;
  foods: MainMenuDataType[];
  typeVal: FoodTypesEnumType;
};

export default function FoodTypeShowcaser(props: props) {
  return (
    <section
      className="group max-w-[1480px] mx-auto px-page-margin-x first:pt-16 pb-16 grid grid-cols-2 grid-rows-1 gap-x-14 laptop:gap-x-10 laptop-md:gap-x-7 tablet-lg:flex tablet-lg:flex-col tablet-lg:gap-y-7"
      aria-label={`${props.typeName} section`}
    >
      <div className="relative w-full h-full min-h-full max-w-[600px] row-span-1 row-start-1 col-span-1 group-even:col-start-2 tablet-lg:mx-auto tablet-lg:aspect-square">
        <Image
          unoptimized
          src={props.typeImg}
          alt={props.typeName}
          fill
          className="object-cover object-center rounded-xl"
        />
      </div>

      <div className="w-full h-fit max-w-[675px] flex flex-col gap-y-7 row-span-1 col-span-1 group-even:col-start-1 tablet-lg:mx-auto">
        <div
          className="flex flex-col gap-2 tablet-lg:items-center"
          role="group"
          aria-label={`intro of ${props.typeName} section`}
        >
          <h2 className="text-xl font-bold uppercase tablet-lg:text-center mobile:text-lg">
            {props.typeName}
          </h2>
          <p
            className="font-medium leading-relaxed tablet-lg:text-center"
            aria-label={`about ${props.typeName}`}
          >
            {props.typeDesc}
          </p>
        </div>
        {props.foods.map((fd) => (
          <MenuItem key={fd.id} {...fd} />
        ))}
        <Link
          href={myRoutes.submenu(props.typeVal)}
          type="button"
          className="btn btn-flex btn-base btn-primary mobile-lg:btn-sm"
        >
          <span>View more</span>
          <DoubleRightIcon />
        </Link>
      </div>
    </section>
  );
}
