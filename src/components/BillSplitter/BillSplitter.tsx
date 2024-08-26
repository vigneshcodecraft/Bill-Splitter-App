import React, { useReducer, useRef, useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import { FormDisplay } from "../FormDisplay/FormDisplay";
import { reducer, initialState } from "../../reducer";

export function BillSplitter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const billTouched = useRef<boolean>(false);

  const error = {
    bill: billTouched.current
      ? isNaN(state.billValue) || state.billValue <= 0
        ? "Please enter valid bill amount"
        : ""
      : "",

    person:
      isNaN(state.personCount) ||
      state.personCount <= 0 ||
      !Number.isInteger(state.personCount)
        ? "Please enter valid number of people"
        : "",
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "SET_BILL_VALUE" | "SET_PERSON_COUNT"
  ) => {
    const newValue = parseFloat(e.target.value);
    if (type === "SET_BILL_VALUE") {
      billTouched.current = true;
    }

    dispatch({ type, payload: Number(newValue) });
  };

  const [isCustomInputVisible, setCustomInputVisible] =
    useState<boolean>(false);

  function resetValues() {
    dispatch({ type: "RESET" });
    billTouched.current = false;
    setCustomInputVisible(false);
  }

  function handleCustomInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    if (!isNaN(parseFloat(newValue))) {
      dispatch({ type: "SET_TIP", payload: parseFloat(newValue) });
    } else if (newValue === "") {
      dispatch({ type: "SET_TIP", payload: 0 });
    }
  }

  const tipAmount =
    state.billValue > 0 && state.personCount > 0
      ? (
          (state.billValue * (state.selectedTip / 100)) /
          state.personCount
        ).toFixed(2)
      : "0.00";
  const totalAmount =
    state.billValue > 0 && state.personCount > 0
      ? (
          (state.billValue * (state.selectedTip / 100) + state.billValue) /
          state.personCount
        ).toFixed(2)
      : "0.00";

  const disableButton =
    state.billValue !== 0 || state.personCount !== 1 || state.selectedTip !== 0;

  return (
    <div className="grid grid-cols-2 w-full border-box gap-16 sm-max:flex sm-max:flex-col sm-max:w-full sm-max:gap-[2rem]">
      <FormInput
        billValue={state.billValue}
        personValue={state.personCount}
        error={error}
        handleChange={handleInputChange}
        setTipValue={(selectedTip: number) =>
          dispatch({ type: "SET_TIP", payload: selectedTip })
        }
        handleCustomInput={handleCustomInput}
        selectedTip={state.selectedTip}
        isCustomInputVisible={isCustomInputVisible}
        setCustomInputVisible={setCustomInputVisible}
      />
      <FormDisplay
        resetValues={resetValues}
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        disableButton={disableButton}
      />
    </div>
  );
}
