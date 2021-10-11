import styles from "./Information.module.scss";

import { useSelector } from "react-redux";
import * as userSlice from "../../../../features/user/userSlice";

import { timestamp } from "../../../../functions/timestamp";

export const Information = ({ handleClose }) => {
  const info = useSelector(userSlice.data).information;

  return (
    <div className={styles.info}>
      <span className={styles.info_time}>{timestamp(info?.updateAt)}</span>

      <span className={styles.info_title}>{info?.title}</span>

      <div className={styles.info_body}>{info?.body}</div>

      <button type="button" className={styles.info_btn} onClick={handleClose}>
        とじる
      </button>
    </div>
  );
};
