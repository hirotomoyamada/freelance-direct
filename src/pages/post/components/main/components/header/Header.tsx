import React from "react";
import styles from "./Header.module.scss";

import { At } from "./components/At";
import { Position } from "./components/Position";
import { Title } from "./components/Title";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Header: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.header}>
      <At post={post} />

      <div className={styles.header_container}>
        <Position post={post} />
      </div>

      <Title post={post} />
    </div>
  );
};
