import React from "react";
import styles from "../Person.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { User } from "types/user";

interface PropType {
  user: User;
}

export const Urls: React.FC<PropType> = ({ user }) => {
  const urls = user?.profile?.urls;

  return (
    <div className={`${styles.profile_col} ${styles.profile_col_url}`}>
      {urls?.[0] &&
        urls.map(
          (url, index) =>
            url && (
              <div className={styles.profile_field} key={index}>
                <FontAwesomeIcon
                  icon={faLink as IconProp}
                  className={styles.profile_icon}
                />
                <a
                  href={url}
                  className={styles.profile_link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {url}
                </a>
                <span className={styles.profile_request}>リクエスト</span>
              </div>
            )
        )}
    </div>
  );
};
