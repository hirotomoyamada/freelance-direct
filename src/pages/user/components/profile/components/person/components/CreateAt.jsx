import styles from "../Person.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

import * as functions from "../../../../../../../functions/functions";

export const CreateAt = ({ user }) => {
  return (
    <div className={styles.profile_createAt}>
      <FontAwesomeIcon icon={faCalendarAlt} className={styles.profile_icon} />
      <span>
        {functions.root.timestamp(user?.createAt, "month")}
        からFreelance Directを利用しています
      </span>
    </div>
  );
};