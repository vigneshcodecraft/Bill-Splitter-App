import clsx from "clsx";
import { TipAmount } from "../TipAmount/TipAmount";

interface FormDisplayProps {
  resetValues: () => void;
  tipAmount: string;
  totalAmount: string;
  disableButton: boolean;
}

export function FormDisplay({
  resetValues,
  tipAmount,
  totalAmount,
  disableButton,
}: FormDisplayProps) {
  return (
    <div className="flex flex-col justify-between bg-custom-dark-green w-full p-12 rounded-2xl sm-max:p-5 sm-max:mt-2 sm-max:mb-2">
      <div className="w-full flex flex-col justify-between md:gap-16">
        <TipAmount title="Tip Amount" value={tipAmount} />
        <TipAmount title="Total" value={totalAmount} />
      </div>
      <button
        className={clsx(
          "font-mono font-bold text-xl w-full leading-6 bg-custom-teal text-custom-dark-green rounded-md mt-[5.438rem] outline-none  sm-max:text-[6vw] sm-max:w-full sm-max:rounded-[4.32px] sm-max:mt-[43px]",
          {
            "cursor-not-allowed": !disableButton,
            "hover:bg-custom-light-teal hover:text-custom-dark-green hover:cursor-pointer":
              disableButton,
          }
        )}
        onClick={resetValues}
        disabled={!disableButton}
      >
        RESET
      </button>
    </div>
  );
}
