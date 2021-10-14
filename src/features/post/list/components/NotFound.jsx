import styles from "../List.module.scss";

import Loader from "react-loader-spinner";

import { useSelector } from "react-redux";
import * as rootSlice from "../../../root/rootSlice";

export const NotFound = ({ index, list, selectUser }) => {
  const load = useSelector(rootSlice.load).list;
  const page = useSelector(rootSlice.page);

  return (
    <div
      className={`${styles.list_none} ${selectUser && styles.list_none_user} ${
        (page === "likes" || page === "entries" || page === "history") &&
        styles.list_none_list
      } ${page === "requests" && styles.list_none_requests}`}
      ref={list}
    >
      {load ? (
        <Loader type="Grid" color="#4387f4" height={56} width={56} />
      ) : (
        <span className={styles.list_none_message}>
          {index === "matters"
            ? "案件情報がありません"
            : "営業情報がありません"}
        </span>
      )}
    </div>
  );
};
