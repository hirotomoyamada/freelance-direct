import styles from "../Person.module.scss";

export const Name = ({ user }) => {
  return (
    <div className={styles.profile_col}>
      <span className={styles.profile_tag}>氏名</span>
      <div className={styles.profile_wrap}>
        <span>{user?.profile?.name}</span>
        <span className={styles.profile_request}>リクエスト</span>
      </div>
    </div>
  );
};
