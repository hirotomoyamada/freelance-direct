import styles from "./Request.module.scss";

import { useDispatch } from "react-redux";
import * as userSlice from "../../features/user/userSlice";
import * as rootSlice from "../../features/root/rootSlice";

export const Request = ({ index, user }) => {
  const dispatch = useDispatch();

  const handleEnable = () => {
    dispatch(userSlice.enableRequest(user));
  };

  const handleDisable = () => {
    dispatch(
      rootSlice.handleModal({
        type: "block",
        text: "アカウント",
        delete: () => dispatch(userSlice.disableRequest(user)),
      })
    );
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
