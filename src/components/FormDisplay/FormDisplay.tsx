import styles from "./FormDisplay.module.css";
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
    <div className={styles.container}>
      <div className={styles.billContainer}>
        <TipAmount title="Tip Amount" value={tipAmount} />
        <TipAmount title="Total" value={totalAmount} />
      </div>
      <button
        className={styles.resetButton}
        onClick={resetValues}
        disabled={!disableButton}
      >
        RESET
      </button>
    </div>
  );
}
