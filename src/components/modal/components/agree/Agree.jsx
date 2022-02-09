import styles from "./Agree.module.scss";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as rootSlice from "../../../../features/root/rootSlice";
import * as userSlice from "../../../../features/user/userSlice";

import * as functions from "../../../../functions/functions";

export const Agree = ({ user }) => {
  const dispatch = useDispatch();
  const agree = useSelector(rootSlice.data).agree;

  const handleAgree = () => {
    dispatch(userSlice.enableAgree(user));
  };

  return (
    <div className={styles.agree}>
      <span className={styles.agree_time}>
        {functions.root.timestamp(agree?.updateAt)}
      </span>

      <span className={styles.agree_title}>{agree?.title}</span>

      <div className={styles.agree_body}>{agree?.body}</div>

      <div className={styles.agree_link}>
        <Link to={{ pathname: "/terms", state: { setting: true } }}>
          利用規約
        </Link>
      </div>

      <button type="button" className={styles.agree_btn} onClick={handleAgree}>
        同意する
      </button>
    </div>
  );
};
