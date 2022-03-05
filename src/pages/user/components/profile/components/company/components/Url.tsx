import React from "react";
import styles from "../Company.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { Company as SelectUser } from "types/post";

interface PropType {
  user: SelectUser;
  demo?: boolean;
}

export const Url: React.FC<PropType> = ({ user, demo }) => {
  return user?.profile?.url ? (
    <div className={styles.profile_field}>
      <FontAwesomeIcon
        icon={faLink as IconProp}
        className={styles.profile_icon}
      />
      <a
        href={user?.profile?.url}
        className={styles.profile_link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {!demo ? user?.profile?.url : process.env.REACT_APP_FREELANCE_DIRECT}
      </a>
    </div>
  ) : (
    <></>
  );
};
