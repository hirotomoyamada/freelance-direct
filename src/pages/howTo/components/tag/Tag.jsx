import styles from "./Tag.module.scss";

export const Tag = ({ tag }) => {
  return (
    <div className={styles.tag}>
      <span className={styles.tag_name}>{tag}</span>
    </div>
  );
};
