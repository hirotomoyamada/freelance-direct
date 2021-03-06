import React from "react";
import styles from "./User.module.scss";

import { Icon } from "components/icon/Icon";

import { Company } from "types/post";

interface PropType {
  post: Company;
}

export const User: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.user}>
      <div className={styles.user_head}>
        <div className={styles.user_head_icon}>
          <Icon src={post?.icon} />
        </div>

        <div className={styles.user_head_wrap}>
          <h1 className={styles.user_person}>{post?.profile?.person}</h1>
          {post?.profile?.name && (
            <h2 className={styles.user_name}>{post?.profile?.name}</h2>
          )}
        </div>
      </div>

      {post?.profile?.body && (
        <p className={styles.user_body}>{post?.profile?.body}</p>
      )}
    </div>
  );
};
