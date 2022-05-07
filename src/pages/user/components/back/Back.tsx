import React from "react";
import styles from "./Back.module.scss";

import { useNavigate } from "react-router";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const Back: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <button type="button" className={styles.back} onClick={handleBack}>
      <ArrowBackIcon className={styles.back_icon} />
    </button>
  );
};
