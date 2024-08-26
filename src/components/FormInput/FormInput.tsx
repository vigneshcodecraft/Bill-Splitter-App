import React from "react";
import { NumberInput } from "../NumberInput/NumberInput";
import { SelectTip } from "../SelectTip/SelectTip";

interface FormInputProps {
  billValue: number;
  personValue: number;
  error: { bill: string; person: string };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "SET_BILL_VALUE" | "SET_PERSON_COUNT"
  ) => void;
  setTipValue: (selectedTip: number) => void;
  handleCustomInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedTip: number;
  isCustomInputVisible: boolean;
  setCustomInputVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FormInput({
  billValue,
  personValue,
  error,
  handleChange,
  setTipValue,
  handleCustomInput,
  selectedTip,
  isCustomInputVisible,
  setCustomInputVisible,
}: FormInputProps) {
  return (
    <div className="bg-white w-full flex flex-col sm-max:w-full">
      <NumberInput
        label="Bill"
        typeOfIcon="dollar"
        error={error.bill}
        onChange={(e) => handleChange(e, "SET_BILL_VALUE")}
        value={billValue}
      />
      <SelectTip
        label="Select Tip %"
        values={["5", "10", "15", "25", "50", "Custom"]}
        setTipValue={setTipValue}
        handleCustomInput={handleCustomInput}
        selectedTip={selectedTip}
        isCustomInputVisible={isCustomInputVisible}
        setCustomInputVisible={setCustomInputVisible}
      />
      <NumberInput
        label="Number of People"
        typeOfIcon="person"
        error={error.person}
        onChange={(e) => handleChange(e, "SET_PERSON_COUNT")}
        value={personValue}
      />
    </div>
  );
}
