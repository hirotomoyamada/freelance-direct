import styles from "../Main.module.scss";

export const Period = ({ period }) => {
  return (
    <div className={styles.main_col}>
      <span className={styles.main_tag}>開始時期</span>
      <p>
        {period?.year}年&nbsp;{period?.month}月予定
      </p>
    </div>
  );
};
