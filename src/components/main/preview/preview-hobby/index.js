import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "../../../../hooks";
import styles from "./index.css";

export const PreviewHobbies = () => {
  const { hobbies } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

  let items;

  if (hobbies.length !== 0) {
    items = hobbies.map((item, index) => (
      <div key={index} className={styles.item}>
        <strong>{item.name}</strong>
      </div>
    ));
  }

  return (
    <div className={styles.containerhobby}>
      {hobbies.length !== 0 && (
        <>
          <div
            className={styles.title}
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.hobbies_upper}
          </div>
          {items}
        </>
      )}
    </div>
  );
};

export default PreviewHobbies;
