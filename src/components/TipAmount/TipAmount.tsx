import React from "react";
import styles from "./TipAmount.module.css";
interface TipAmountProps {
  title: string;
  value: string;
}
export function TipAmount({ title, value }: TipAmountProps) {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={`${styles.text} ${styles.title}`}>{title}</span>
        <span className={`${styles.text} ${styles.person}`}>/ Person</span>
      </div>
      <div className={styles.value}>${value}</div>
    </div>
  );
}
