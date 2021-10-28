import styles from "../Person.module.scss";

export const Head = ({ user }) => {
  const nickName = [
    "天才エンジニア",
    "究極形態プログラマー",
    "天元突破フリーエンジニア",
    "パーフェクトプログラマー",
  ][Math.floor(Math.random() * 3)];

  return (
    <div className={styles.profile_wrap}>
      <h1 className={styles.profile_name}>
        {user?.profile?.nickName ? user.profile.nickName : nickName}
      </h1>

      <div className={styles.profile_category}>{user?.profile?.position}</div>
      <div
        className={`${styles.profile_category} ${styles.profile_category_acnt}`}
      >
        {user?.profile?.state}
      </div>
    </div>
  );
};
