import React from "react";
import root from "../Section.module.scss";
import styles from "./Target.module.scss";

import { Main } from "./components/main/Main";
import { Left } from "./components/side/Left";
import { Right } from "./components/side/Right";

interface PropType {
  option?: boolean;
}

export const Target: React.FC<PropType> = ({ option }) => {
  return (
    <section className={`${styles.target} ${root.section}`}>
      <div className={styles.target_inner}>
        <Left />
        <Main option={option} />
        <Right />
      </div>
    </section>
  );
};
