import React from "react";
import styles from "../Company.module.scss";

import { Company as SelectUser } from "types/post";

interface PropType {
  user: SelectUser;
}

export const Head: React.FC<PropType> = ({ user }) => {
  return (
    <div>
      <h1 className={styles.profile_person}>{user?.profile?.person}</h1>

      <h2 className={styles.profile_name}>{user?.profile?.name}</h2>
    </div>
  );
};
