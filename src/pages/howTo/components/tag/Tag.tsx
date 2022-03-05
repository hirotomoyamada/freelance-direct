import React from "react";
import styles from "./Tag.module.scss";

interface PropType {
  tag: string;
}

export const Tag: React.FC<PropType> = ({ tag }) => {
  return (
    <div className={styles.tag}>
      <span className={styles.tag_name}>{tag}</span>
    </div>
  );
};
