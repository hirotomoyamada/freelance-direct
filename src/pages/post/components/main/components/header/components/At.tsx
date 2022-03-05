import React from "react";
import styles from "../Header.module.scss";
import * as functions from "functions";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}
export const At: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.header_at}>
      <span>作成&nbsp;{functions.root.timestamp(post.createAt)}</span>

      {post.updateAt && (
        <span>更新&nbsp;{functions.root.timestamp(post.updateAt)}</span>
      )}
    </div>
  );
};
