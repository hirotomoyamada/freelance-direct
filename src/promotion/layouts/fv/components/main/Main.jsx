import styles from "./Main.module.scss";

import { Btn } from "../../../../components/btn/Btn";

export const Main = ({ handleOpen, option }) => {
  return (
    <div className={styles.main}>
      <div
        className={`${styles.main_container} ${
          option && styles.main_container_option
        }`}
      >
        <h1
          className={`${styles.main_ttl} ${option && styles.main_ttl_option}`}
        >
          {!option ? "じぶんから選ぶ" : "フリーランスダイレクト"}
        </h1>

        {!option ? (
          <p className={styles.main_desc}>
            欲しいもの、知りたい情報を素早く簡単に見つけよう
            <br />
            フリーランスエンジニアが求める、営業支援アプリ
          </p>
        ) : (
          <p className={styles.main_desc}>
            あなたが登録した案件に、
            <span>直接フリーランスエンジニアがエントリー</span>
            <br />
            直接コミュニケーションをとって
            <span>相性のよい人材をアサインできます</span>
          </p>
        )}

        {!option && (
          <div className={styles.main_wrap}>
            <Btn txt={"メールアドレス"} func={handleOpen} input />
            <Btn txt={"新規登録"} func={handleOpen} square />
          </div>
        )}
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/img/promotion/${
          !option ? "top" : "option"
        }.svg`}
        alt=""
        className={`${styles.main_img} ${option && styles.main_img_option}`}
      />
    </div>
  );
};
