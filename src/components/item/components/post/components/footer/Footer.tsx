import React from "react";
import styles from "./Footer.module.scss";

import * as functions from "functions";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Footer: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.footer_time}>
        {post?.createAt && functions.root.timestamp(post.createAt)}
      </span>

      {post?.user && (
        <div className={styles.footer_user}>
          <p className={styles.footer_user_name}>{post?.user?.profile?.name}</p>

          <p className={styles.footer_user_person}>
            {post?.user?.profile?.person}
          </p>
        </div>
      )}
    </div>
  );
};
