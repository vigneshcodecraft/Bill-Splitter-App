import React from "react";
import styles from "./TipButton.module.css";
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
    <div className={styles.container}>
      <button
        value={value}
        className={`${styles[types]} ${selectedTip === Number(value) ? styles.active : ""}`}
        {...buttonProps}
      >
        {buttonValue}
      </button>
    </div>
  );
}
