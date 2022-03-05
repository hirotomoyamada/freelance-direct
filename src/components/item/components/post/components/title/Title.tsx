import React from "react";
import styles from "./Title.module.scss";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Title: React.FC<PropType> = ({ post }) => {
  const newPost = post?.createAt > Date.now() - 60 * 60 * 24 * 3 * 1000;

  return (
    <div className={styles.title}>
      <h1 className={styles.title_txt}>{post?.title}</h1>
      {newPost && <span className={styles.title_new}>NEW</span>}
    </div>
  );
};
