import styles from "../Person.module.scss";

export const Head = ({ user }) => {
  return (
    <div className={styles.profile_wrap}>
      <h1 className={styles.profile_name}>{user?.profile?.name}</h1>

      <div className={styles.profile_position}>{user?.profile?.position}</div>
    </div>
  );
};
