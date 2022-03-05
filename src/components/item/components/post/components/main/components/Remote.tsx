import React from "react";
import styles from "../Main.module.scss";

import BusinessIcon from "@material-ui/icons/Business";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Remote: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.main_wrap}>
      <BusinessIcon className={styles.main_icon} />
      <span>
        {post?.remote === "あり"
          ? "リモート"
          : post?.remote === "なし"
          ? "常駐"
          : post?.remote}
      </span>
    </div>
  );
};
