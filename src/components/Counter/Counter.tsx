// import React, { useState } from "react";
import styles from "./Counter.module.css";
export interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ count, setCount }: CounterProps) => {
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.valueAsNumber));
  };
  //   const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (!isNaN(e.target.valueAsNumber)) {
  //       setCount(count);
  //     } else {
  //       setCount(0);
  //     }
  //   };

  return (
    <div className={styles.counterMain}>
      <button onClick={handleIncrement} className={styles.button}>
        +
      </button>
      <input
        type="number"
        value={count}
        onChange={handleChange}
        className={styles.countInput}
        // onBlur={handleBlur}
      />
      <button onClick={handleDecrement} className={styles.button}>
        -
      </button>
    </div>
  );
};
export default Counter;
