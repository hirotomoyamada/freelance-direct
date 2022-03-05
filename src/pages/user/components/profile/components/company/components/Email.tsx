import React from "react";
import styles from "../Company.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Company as SelectUser } from "types/post";

interface PropType {
  user: SelectUser;
  demo?: boolean;
}

export const Email: React.FC<PropType> = ({ user, demo }) => {
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
        {!demo ? user?.profile?.email : "demo@freelance-direct.app"}
      </a>
    </div>
  );
};
