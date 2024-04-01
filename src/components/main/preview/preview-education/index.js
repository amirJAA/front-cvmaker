import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "../../../../hooks";
import styles from "./education.css";

 export const PreviewEducation = () => {
  const { education } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

  let items;

  if (education.length !== 0) {
    items = education.map((item) => (
      <div className={styles.item} key={item.id}>
        <div className={styles.itemHeader}>
          <strong>
            {item.degree} / {item.subject}
          </strong>
          <span>
            {item.from} - {item.to}
          </span>
        </div>
        <div>
          {item.school}, {item.city}
        </div>
      </div>
    ));
  }

  return (
    <div className={styles.containereducation}>
      {education.length !== 0 && (
        <>
          <div
            className={styles.title}
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.education_upper}
          </div>
          {items}
        </>
      )}
    </div>
  );
};

export default PreviewEducation;
