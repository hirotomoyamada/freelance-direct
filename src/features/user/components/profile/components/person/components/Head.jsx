import styles from "../Person.module.scss";

export const Head = ({ user }) => {
  return (
    <div>
      <h1 className={styles.profile_name}>{user?.profile?.name}</h1>

      <div className={styles.profile_position}>{user?.profile?.position}</div>
    </div>
  );
};
