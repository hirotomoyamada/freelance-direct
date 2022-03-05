import React from "react";
import styles from "./Header.module.scss";

import { Cover } from "components/cover/Cover";
import { Icon } from "components/icon/Icon";

import { Company } from "types/post";
import { User } from "types/user";

interface PropType {
  user: User | Company;
}

export const Header: React.FC<PropType> = ({ user }) => {
  return (
    <div className={styles.header}>
      <Cover src={user?.cover} />

      <div className={styles.header_icon}>
        <Icon src={user?.icon} />
      </div>
    </div>
  );
};
