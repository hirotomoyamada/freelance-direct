import styles from "./Header.module.scss";

import { Cover } from "../../../../components/cover/Cover";
import { Icon } from "../../../../components/icon/Icon";

export const Header = ({ user }) => {
  return (
    <div className={styles.header}>
      <Cover src={user?.cover} />

      <div className={styles.header_icon}>
        <Icon src={user?.icon} />
      </div>
    </div>
  );
};
