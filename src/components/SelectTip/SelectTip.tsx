/* eslint-disable @typescript-eslint/no-explicit-any */
import "../../App.css";
import styles from "./SelectTip.module.css";
import { TipButton } from "../TipButton/TipButton";
interface SelectTipProps {
  label: string;
  values: string[];
  setTipValue: (selectedTip: number) => void;
  handleCustomInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedTip: number;
  isCustomInputVisible: boolean;
  setCustomInputVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SelectTip({
  label,
  values,
  setTipValue,
  handleCustomInput,
  selectedTip,
  isCustomInputVisible,
  setCustomInputVisible,
}: SelectTipProps) {
  function handleCustomClick() {
    setCustomInputVisible(true);
  }

  function handleCustomBlur(e: any) {
    if (e.target.value === "") setCustomInputVisible(false);
  }

  return (
    <div className={styles.container}>
      <label className={styles.labelName}>{label}</label>
      <div className={styles.buttonContainer}>
        {values.map((value) =>
          value === "Custom" ? (
            isCustomInputVisible ? (
              <input
                type="text"
                className={styles.inputContainer}
                onChange={handleCustomInput}
                onBlur={handleCustomBlur}
              />
            ) : (
              <TipButton
                value={value}
                types="custom"
                key={value}
                onClick={handleCustomClick}
                selectedTip={selectedTip}
              ></TipButton>
            )
          ) : (
            <TipButton
              value={value}
              types="normal"
              onClick={() => {
                setTipValue(Number(value));
                setCustomInputVisible(false);
              }}
              selectedTip={selectedTip}
            />
          )
        )}
      </div>
    </div>
  );
}
