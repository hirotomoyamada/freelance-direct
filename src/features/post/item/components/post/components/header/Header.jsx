import styles from "./Header.module.scss";

import { Position } from "./components/Position";
import { Handles } from "./components/Handles";

export const Header = ({ post }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <Position post={post} />
      </div>

      <Handles post={post} />
    </div>
  );
};
