import styles from "./User.module.scss";

import { Icon } from "../../../../../components/icon/Icon";

export const User = ({ post }) => {
  return (
    <div className={styles.user}>
      <div className={styles.user_head}>
        <div className={styles.user_head_icon}>
          {/* <Icon src={post?.icon} /> */}
          <Icon src={"freelanceDirect"} />
        </div>

        <div className={styles.user_head_wrap}>
          <h1 className={styles.user_person}>
            Freelance Direct 事務局
            {/* {post?.profile?.person} */}
          </h1>
          {post?.profile?.name && (
            <h2 className={styles.user_name}>
              Hit me up株式会社
              {/* {post?.profile?.name} */}
            </h2>
          )}
        </div>
      </div>

      {/* {post?.profile?.body && (
        <p className={styles.user_body}>{post?.profile?.body}</p>
      )} */}
    </div>
  );
};
