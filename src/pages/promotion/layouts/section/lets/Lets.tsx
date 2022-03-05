import React from "react";
import root from "../Section.module.scss";
import styles from "./Lets.module.scss";

import { LinkBtn } from "../../../components/btn/Btn";

interface PropType {
  option?: boolean;
}

export const Lets: React.FC<PropType> = ({ option }) => {
  return (
    <section className={`${styles.lets} ${root.section}`}>
      <div
        className={`${root.section_inner} ${root.section_inner_content} ${styles.lets_inner}`}
      >
        <p className={styles.lets_desc}>
          {!option
            ? "\\\n\n登録・利用料\n0円\n\n/"
            : "\\\n\nフリーランスがたくさん\n\n/"}
        </p>
        <h1 className={styles.lets_ttl}>
          {!option ? "もっと、探しませんか？" : "さぁ、はじめよう"}
        </h1>
        <div className={styles.lets_btn}>
          <LinkBtn
            txt="新規登録"
            src={!option ? "signup" : `${process.env.REACT_APP_SES_HUB}/signup`}
            acnt
            blank={option}
          />
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/lets.svg`}
          alt=""
          className={styles.lets_bg}
        />
      </div>
    </section>
  );
};
