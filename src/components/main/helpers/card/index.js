import React from "react";
import styles from "./index.css";

export const Card = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};
export default Card;
