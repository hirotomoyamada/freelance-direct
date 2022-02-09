import styles from "./Footer.module.scss";

import * as functions from "../../../../../../functions/functions";

export const Footer = ({ post }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.footer_time}>
        {functions.root.timestamp(post?.createAt)}
      </span>
      {post?.user && (
        <div className={styles.footer_user}>
          <p className={styles.footer_user_name}>{post?.user?.name}</p>

          <p className={styles.footer_user_person}>{post?.user?.person}</p>
        </div>
      )}
    </div>
  );
};
