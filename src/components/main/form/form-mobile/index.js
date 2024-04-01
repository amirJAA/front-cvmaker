import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.css";

export const FormMobile = () =>{
  const { language } = useSelector((state) => state.language);

  let div;

  if (language === "fr") {
    div = (
      <span>
        Nous recommandons de l'utiliser sur un écran <span className={styles.mark}>bureau</span> ou en <span className={styles.mark}>mode paysage</span>.
      </span>
    );
  } else {
    div = (
      <span>
        For a better experience, we recommend using it on <span className={styles.mark}>desktop</span> or <span className={styles.mark}>landscape</span> screen.
      </span>
    );
  }

  return <div className={styles.mobile}>{div}</div>;
}

export default FormMobile;
