import React from "react";
import styles from "../Terms.module.scss";

import { backnumber } from "../data/backnumber";

export const BackNumber: React.FC = () => {
  return (
    <div className={styles.terms_backnumber}>
      {backnumber.map((date, index) => (
        <span key={index}>{date}</span>
      ))}
    </div>
  );
};
