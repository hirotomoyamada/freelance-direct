import styles from "./Main.module.scss";

import { Btn } from "../../../../components/btn/Btn";

export const Main = ({ handleOpen }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <h1 className={styles.main_ttl}>じぶんから選ぶ</h1>

        <p className={styles.main_desc}>
          欲しいもの、知りたい情報を素早く簡単に見つけよう
          <br />
          フリーランスエンジニアが求める、営業支援アプリ
          <br />
        </p>

        <div className={styles.main_wrap}>
          <Btn txt={"メールアドレス"} func={handleOpen} input />
          <Btn txt={"新規登録"} func={handleOpen} square />
        </div>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/img/promotion/top.svg`}
        alt=""
        className={styles.main_img}
      />
    </div>
  );
};
