import React from "react";
import styles from "./Header.module.scss";

import { Position } from "./components/Position";
import { Handles } from "./components/Handles";
import { Tools } from "./components/Tools";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Header: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.header}>
      <Position post={post} />

      <Handles post={post} />
      <Tools post={post} />
    </div>
  );
};
