import React from "react";
import styles from "../Header.module.scss";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Position: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.header_position}>
      <h2 className={styles.header_position_txt}>{post?.position}</h2>
    </div>
  );
};
