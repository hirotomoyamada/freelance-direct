import styles from "./Information.module.scss";

import { useDispatch } from "react-redux";
import * as userSlice from "../../../../features/user/userSlice";
import InfoIcon from "@material-ui/icons/Info";
import SettingsIcon from "@material-ui/icons/Settings";

export const Information = ({ info }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.info}>
      <button
        type="button"
        onClick={() =>
          dispatch(userSlice.handleModal({ type: "info", open: true }))
        }
        className={styles.info_wrap}
      >
        <InfoIcon className={styles.info_icon} />
        <span className={styles.info_title}>{info?.title}</span>
      </button>
      <button className={styles.setting}>
        <SettingsIcon className={styles.setting_icon} />
      </button>
    </div>
  );
};
