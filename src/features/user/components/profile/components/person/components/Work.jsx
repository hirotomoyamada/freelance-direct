import styles from "../Person.module.scss";

export const Work = ({ user }) => {
  return (
    <div className={styles.profile_wrap}>
      <div className={`${styles.profile_array} ${styles.profile_array}`}>
        <span className={styles.profile_array_txt}>
          {user?.profile?.resident}
        </span>
      </div>
      <div className={`${styles.profile_array} ${styles.profile_array}`}>
        <span className={styles.profile_array_txt}>
          {user?.profile?.working}日&nbsp;/&nbsp;週
        </span>
      </div>
      <div className={`${styles.profile_array} ${styles.profile_array}`}>
        <span className={styles.profile_array_txt}>
          {user?.profile?.clothes}
        </span>
      </div>
       &nbsp;
    </div>
  );
};
