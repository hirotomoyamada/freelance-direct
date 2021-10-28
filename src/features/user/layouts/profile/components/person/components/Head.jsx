import styles from "../Person.module.scss";

export const Head = ({ user }) => {
  const nickName = [
    "天才エンジニア",
    "究極形態プログラマー",
    "天元突破フリーエンジニア",
    "パーフェクトプログラマー",
  ][Math.floor(Math.random() * 3)];

  return (
    <div className={styles.profile_col}>
      <h1 className={styles.profile_name}>
        {user?.profile?.nickName ? user.profile.nickName : nickName}
      </h1>

      <div className={styles.profile_wrap}>
        <div className={styles.profile_category}>{user?.profile?.position}</div>

        <div
          className={`${styles.profile_category} ${
            styles.profile_category_acnt
          } ${
            (user?.profile?.state === "確定" ||
              user?.profile?.state === "商談中" ||
              user?.profile?.state === "情報収集中") &&
            styles.profile_category_disable
          } ${
            user?.profile?.state === "至急" && styles.profile_category_hurry
          }`}
        >
          {user?.profile?.state}
        </div>
      </div>
    </div>
  );
};
