import styles from "../Company.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const Url = ({ user, demo }) => {
  return user?.profile?.url ? (
    <div className={styles.profile_field}>
      <FontAwesomeIcon icon={faLink} className={styles.profile_icon} />
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
