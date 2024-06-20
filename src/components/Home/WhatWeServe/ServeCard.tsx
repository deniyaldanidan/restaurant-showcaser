import RightIcon from "@/components/icons/RightIcon";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Url } from "url";

type props = {
  href: Url | string;
  srcImage: StaticImageData;
  cardTitle: string;
  cardDesc: string;
  className: string;
};

export default function ServeCard({
  srcImage,
  href,
  cardDesc,
  cardTitle,
  className,
}: props) {
  return (
    <Link
      href={href}
      className={`group relative block w-full h-full rounded-xl overflow-hidden ${className}`}
    >
      <Image
        src={srcImage}
        alt=""
        title=""
        priority
        className="absolute left-0 top-0 w-full h-full object-cover -z-10 duration-300 group-hover:scale-105"
        unoptimized
      />
      <div className="w-full h-full flex flex-col justify-end gap-y-2.5 p-10 bg-[#0009] ">
        <h4 className="text-2xl font-semibold uppercase flex items-center">
          <span className="underline-offset-4 duration-300 group-hover:underline">
            {cardTitle}
          </span>
          <span>
            <RightIcon className="text-3xl opacity-0 scale-50 -translate-x-2 duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100" />
          </span>
        </h4>
        <p className="text-lg font-medium">{cardDesc}</p>
      </div>
    </Link>
  );
}
