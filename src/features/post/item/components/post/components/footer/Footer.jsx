import styles from "./Footer.module.scss";

import { timestamp } from "../../../../../../../functions/timestamp";

export const Footer = ({ post }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.footer_time}>{timestamp(post?.createAt)}</span>
      {post?.user && (
        <div className={styles.footer_user}>
          <p className={styles.footer_user_name}>{post?.user?.name}</p>

          <p className={styles.footer_user_person}>{post?.user?.person}</p>
        </div>
      )}
    </div>
  );
};
