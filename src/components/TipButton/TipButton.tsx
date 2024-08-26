import React from "react";
import clsx from "clsx";

interface TipButtonProps extends React.ComponentProps<"button"> {
  value: string;
  types: "normal" | "custom";
  selectedTip: number;
}

export function TipButton({
  value,
  types,
  selectedTip,
  ...buttonProps
}: TipButtonProps) {
  const buttonValue = types === "normal" ? `${value}%` : value;
  return (
    <div className="flex w-full bg-white">
      <button
        value={value}
        className={clsx(
          types === "normal" &&
            "py-2 w-full rounded-md bg-custom-dark-green text-[#feffff] font-mono font-bold text-[2vw] border-none hover:bg-[#9fe8df] sm-max:rounded-[4px] sm-max:text-[6vw] sm-max:w-full",
          types === "custom" &&
            "py-2 w-full rounded-md bg-[#f3f8fb] text-custom-light-grey font-bold font-mono text-[1.5vw] border-none sm-max:rounded-[4px] sm-max:text-[6vw] sm-max:w-full",
          selectedTip === Number(value) &&
            "bg-custom-light-teal text-custom-dark-green"
        )}
        {...buttonProps}
      >
        {buttonValue}
      </button>
    </div>
  );
}
