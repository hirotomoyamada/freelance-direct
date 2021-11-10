import root from "../../../Person.module.scss";
import styles from "../Resume.module.scss";

import Loader from "react-loader-spinner";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import * as rootSlice from "../../../../../../../../root/rootSlice";

export const File = ({ user, file, handleDelete }) => {
  const load = useSelector(rootSlice.load).fetch;

  return (
    <div className={root.profile_col}>
      <div className={root.profile_wrap}>
        <span className={root.profile_tag}>職務経歴書</span>
        <span className={root.profile_request}>リクエスト</span>
      </div>

      <div className={styles.resume_container}>
        {user?.resume?.url ? (
          <div className={styles.resume_file}>
            <a
              href={user?.resume?.url ? user?.resume?.url : "/"}
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
        ) : load ? (
          <div className={`${styles.resume_file} ${styles.resume_file_load}`}>
            <Loader type="Grid" color="#1d9bf0" height={36} width={36} />
          </div>
        ) : (
          <label
            htmlFor="resume"
            className={`${styles.resume_file} ${styles.resume_file_label}`}
          >
            <span>{!file ? "ファイルを選択" : file?.name}</span>
            <AddIcon className={styles.resume_icon} />
          </label>
        )}
      </div>
    </div>
  );
};
