import styles from "./NumberInput.module.css";
import "../../App.css";
import { useId } from "react";
import { faDollar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface NumberInputProps extends React.ComponentProps<"input"> {
  /**
   * label that identifies the input field.
   */
  label: string;
  /**
   * type of icon
   */
  typeOfIcon: "person" | "dollar";
  /**
   * error
   */
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
    <div className={styles.container}>
      <label htmlFor={`${uniqueId}number-input`} className={styles.label}>
        {label}
      </label>
      <div
        className={`${styles.inputContainer} ${error ? styles.errorInput : ""}`}
      >
        {typeOfIcon === "dollar" ? (
          <FontAwesomeIcon icon={faDollar} className={styles.icon} />
        ) : (
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        )}
        <input
          type="number"
          id={`${uniqueId}number-input`}
          className={styles.numberInput}
          placeholder="0"
          {...inputProps}
        />
      </div>
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default NumberInput;
