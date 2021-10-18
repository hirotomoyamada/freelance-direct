import styles from "./Header.module.scss";

import { Position } from "./components/Position";
import { Handles } from "./components/Handles";
import { Tools } from "./components/Tools";

export const Header = ({ post }) => {
  return (
    <div className={styles.header}>
      <Position post={post} />

      <Handles post={post} />
      <Tools post={post} />
    </div>
  );
};
