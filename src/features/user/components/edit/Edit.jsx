import styles from "./Edit.module.scss";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as rootSlice from "../../../root/rootSlice";

export const Edit = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={styles.edit}>
      <button
        type="button"
        onClick={() => history.push("/setting")}
        className={`${styles.edit_btn} ${styles.edit_btn_account}`}
      >
        アカウント情報
      </button>

      <button
        type="button"
        onClick={() =>
          dispatch(rootSlice.handleModal({ type: "profile", open: true }))
        }
        className={styles.edit_btn}
      >
        プロフィール変更
      </button>
    </div>
  );
};
