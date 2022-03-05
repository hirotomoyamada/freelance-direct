import React from "react";
import styles from "../Main.module.scss";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Body: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.main_body}>
      <p className={styles.main_body_txt}>{post?.body}</p>
    </div>
  );
};
