import Link from "next/link";
import React, { ReactNode } from "react";
import { FaChevronRight as RightIcon } from "react-icons/fa";

type props = {
  past: Array<{ title: string | ReactNode; link: string; label: string }>;
  current: string | ReactNode;
};

export default function BreadCrumb(props: props) {
  return (
    <div
      className="text-lg font-medium flex items-center gap-x-2 tablet-sm:text-base mobile-md:text-sm"
      role="navigation"
      aria-label="Breadcrumbs"
    >
      {props.past.map((item) => (
        <React.Fragment key={item.link}>
          <Link
            href={item.link}
            className="text-mid-sec-fg duration-150 hover:text-secondary"
            aria-label={item.label}
          >
            {item.title}
          </Link>
          <RightIcon className="text-mid-sec-fg" role="separator" />
        </React.Fragment>
      ))}
      <span className="text-high-fg">{props.current}</span>
    </div>
  );
}
