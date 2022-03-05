import React from "react";
import styles from "../Company.module.scss";

import { Company as SelectUser } from "types/post";

interface PropType {
  user: SelectUser;
}

export const Body: React.FC<PropType> = ({ user }) => {
  return user?.profile?.body ? (
    <p className={styles.profile_body}>{user?.profile?.body}</p>
  ) : (
    <></>
  );
};
