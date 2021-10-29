import styles from "./Fv.module.scss";

import { Email } from "../../components/modal/components/Email";
import { Btn } from "../../components/btn/Btn";

export const Fv = ({ handleOpen, fv }) => {
  return (
    <div className={styles.fv} ref={fv}>
      <div className={styles.fv_inner}>
        <div className={styles.fv_head}>
          <div className={styles.fv_head_ttl}>
            <h1 className={styles.fv_head_main}>まだ、探してるの？</h1>
          </div>

          <p className={styles.fv_head_txt}>
            欲しいもの、知りたい情報を素早く簡単に見つけよう
            <br />
            フリーランスエンジニアが求める、検索サイト
            <br />
          </p>

          <div className={styles.fv_head_signup}>
            <Email />

            <Btn txt={"新規登録"} func={handleOpen} square />
          </div>
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/top.png`}
          alt=""
          className={styles.fv_img}
        />
      </div>

      <svg
        className={styles.fv_footer}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
      >
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#f6f6f6"></path>
      </svg>
    </div>
  );
};
