import React from "react";
import styles from "../Person.module.scss";

import { User } from "types/user";

interface PropType {
  user: User;
}

export const Body: React.FC<PropType> = ({ user }) => {
  return user?.profile?.body ? (
    <p className={styles.profile_body}>{user?.profile?.body}</p>
  ) : (
    <></>
  );
};
