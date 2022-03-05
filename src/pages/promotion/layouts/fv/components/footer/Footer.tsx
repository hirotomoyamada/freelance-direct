import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <svg
      className={styles.footer}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1680 40"
    >
      <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#f6f6f6"></path>
    </svg>
  );
};
