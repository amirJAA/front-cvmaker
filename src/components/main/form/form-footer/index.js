import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.css";

export const FormFooter = () => {
  const { language } = useSelector((state) => state.language);

  let div;

  if (language === "fr") {
    div = (
        <>
            <span>Site web développé par l'équipe CREATEUR EN VUE</span>
            <span>Paris Ynov Campus</span>
        </>
    );
  } else {
    div = (
      <>
        <span>Website developed by the CREATEUR EN VUE team</span>
        <span>Paris Ynov Campus</span>
      </>
    );
  }

  return <div className={styles.footer}>{div}</div>;
}

export default FormFooter;
