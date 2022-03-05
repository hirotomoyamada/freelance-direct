import React from "react";
import styles from "../Person.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { User } from "types/user";

interface PropType {
  user: User;
}

export const Email: React.FC<PropType> = ({ user }) => {
  return (
    <div className={styles.profile_field}>
      <FontAwesomeIcon
        icon={faEnvelope as IconProp}
        className={styles.profile_icon}
      />
      <a
        href={`mailto:${user?.profile?.email}`}
        className={styles.profile_link}
      >
        {user?.profile?.email}
      </a>
      <span className={styles.profile_request}>リクエスト</span>
    </div>
  );
};
