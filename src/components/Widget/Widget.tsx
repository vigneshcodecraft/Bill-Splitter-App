import styles from "./Widget.module.css";
import info from "../../assets/info.svg";
import warning from "../../assets/warning.svg";
import error from "../../assets/error.svg";

type WidgetType = "warning" | "info" | "error";

export interface WidgetProps {
  title: string;
  description: string;
  type: WidgetType;
}

export function Widget({ title, description, type }: WidgetProps) {
  const iconImage =
    type === "info" ? info : type === "warning" ? warning : error;
  return (
    <div className={`${styles.main} ${styles[type]}`}>
      <div className={`${styles.imageContainer}`}>
        <img
          src={iconImage}
          className={`${styles.image}`}
          alt={`${type}-icon`}
        />
      </div>
      <div>
        <h1 className={`${styles.title}`}>{title}</h1>
        <p className={`${styles.description}`}>{description}</p>
      </div>
    </div>
  );
}
