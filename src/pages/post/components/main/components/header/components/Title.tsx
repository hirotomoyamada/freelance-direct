import React from "react";
import styles from "../Header.module.scss";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Title: React.FC<PropType> = ({ post }) => {
  const newPost = post?.createAt > Date.now() - 60 * 60 * 24 * 3 * 1000;

  return post?.title ? (
    <h1 className={styles.header_ttl}>
      {post.title}&nbsp;
      {newPost && <span className={styles.header_ttl_new}>NEW</span>}
    </h1>
  ) : (
    <></>
  );
};
