import React from "react";
import styles from "./Fv.module.scss";

import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

interface PropType {
  handleOpen: () => void;
  fv: React.RefObject<HTMLDivElement>;
  option?: boolean;
}

export const Fv: React.FC<PropType> = ({ handleOpen, fv, option }) => {
  return (
    <div className={`${styles.fv} ${option && styles.fv_option}`} ref={fv}>
      <Main handleOpen={handleOpen} option={option} />
      <Footer />

      <img
        src={`${process.env.PUBLIC_URL}/img/promotion/fv.png`}
        alt=""
        className={styles.fv_bg}
      />
    </div>
  );
};
