import { useId } from "react";
import { faDollar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export interface NumberInputProps extends React.ComponentProps<"input"> {
  label: string;
  typeOfIcon: "person" | "dollar";
  error?: string;
}

export const NumberInput = ({
  label,
  typeOfIcon,
  error,
  ...inputProps
}: NumberInputProps) => {
  const uniqueId = useId();
  return (
    <div className="bg-white font-mono w-full h-full">
      <label
        htmlFor={`${uniqueId}number-input`}
        className=" font-mono text-xl font-bold text-custom-light-grey sm-max:text-sm"
      >
        {label}
      </label>
      <div
        className={clsx(
          "relative flex items-center w-full bg-custom-label-background rounded-md mt-3 px-5 py-2",
          error
            ? "border border-red-600"
            : "border border-transparent focus-within:border-custom-dark-green "
        )}
      >
        {typeOfIcon === "dollar" ? (
          <FontAwesomeIcon
            icon={faDollar}
            className="text-xl font-bold text-custom-dark-teal absolute block text-left"
          />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            className="text-xl font-bold text-custom-dark-teal absolute block text-left"
          />
        )}
        <input
          type="number"
          id={`${uniqueId}number-input`}
          className="text-2xl font-bold leading-6 text-right bg-transparent w-full outline-none block text-custom-dark-teal overflow-hidden focus:outline-none no-arrows"
          placeholder="0"
          {...inputProps}
        />
      </div>
      <div className="text-red-600 block h-6">{error}</div>
    </div>
  );
};

export default NumberInput;
