import React from "react";
import styles from "../Main.module.scss";

import { Matter } from "types/post";

interface PropType {
  period: Matter["period"];
}

export const Period: React.FC<PropType> = ({ period }) => {
  return (
    <div className={styles.main_col}>
      <span className={styles.main_tag}>開始時期</span>
      <p>
        {period?.year}年&nbsp;{period?.month}月予定
      </p>
    </div>
  );
};
