import root from "../../../Person.module.scss";
import styles from "../Resume.module.scss";

import AddIcon from "@material-ui/icons/AddCircle";
import RemoveIcon from "@material-ui/icons/Remove";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

export const File = ({ user, resume, handleDelete }) => {
  return (
    <div className={root.profile_col}>
      <span className={root.profile_tag}>職務経歴書</span>

      <div className={styles.resume_container}>
        {user?.profile?.resume[0] ? (
          <div className={styles.resume_file}>
            <a
              href={user?.profile?.resume ? "aaa" : "#"}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faFilePdf}
                className={styles.resume_file_icon}
              />
            </a>

            <button type="button" onClick={handleDelete}>
              <RemoveIcon
                className={`${styles.resume_icon} ${styles.resume_icon_delete}`}
              />
            </button>
          </div>
        ) : (
          <label
            htmlFor="resume"
            className={`${styles.resume_file} ${styles.resume_file_label}`}
          >
            <span>{!resume ? "ファイルを選択" : resume?.name}</span>
            <AddIcon className={styles.resume_icon} />
          </label>
        )}
      </div>
    </div>
  );
};
