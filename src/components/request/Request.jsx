import styles from "./Request.module.scss";

import { useDispatch } from "react-redux";
import * as userSlice from "../../features/user/userSlice";

export const Request = ({ index, user, post }) => {
  const dispatch = useDispatch();

  const handleEnable = () => {
    dispatch(userSlice.enableRequest(user.uid));
  };

  const handleDisable = () => {
    dispatch(userSlice.disableRequest(user.uid));
  };

  const Enable = () => {
    return (
      <button
        type="button"
        className={`${styles.request_btn} ${styles.request_enable}`}
        onClick={handleEnable}
      >
        承認する
      </button>
    );
  };

  const Disable = () => {
    return (
      <button
        type="button"
        className={`${styles.request_btn} ${styles.request_disable}`}
        onClick={handleDisable}
      >
        ブロック
      </button>
    );
  };

  return (
    <div className={styles.request}>
      {index !== "enable" && <Enable />}
      {index !== "disable" && <Disable />}
    </div>
  );
};
