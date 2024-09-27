import React from "react";

type props = {
  inpId: string;
  inpLabel: string;
  children: React.ReactNode;
  inpError: string | string[];
};

export default function InputGroupWrapper({
  inpError,
  inpId,
  inpLabel,
  children,
}: props) {
  return (
    <div className="flex flex-col gap-y-1.5 w-full">
      <label
        htmlFor={inpId}
        className="text-lg font-semibold capitalize w-fit mobile:text-base"
      >
        {inpLabel}
      </label>
      {children}
      <p className="-mt-1 ml-1 text-base text-danger font-semibold flex flex-col gap-y-0.5">
        {typeof inpError === "string"
          ? inpError
          : inpError.map((err, i) => (
              <span key={i} className="list-item list-disc list-inside">
                {err}
              </span>
            ))}
      </p>
    </div>
  );
}
