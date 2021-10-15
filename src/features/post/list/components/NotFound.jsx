import styles from "../List.module.scss";

import Loader from "react-loader-spinner";

import { useSelector } from "react-redux";
import * as rootSlice from "../../../root/rootSlice";

export const NotFound = ({ index, list, select, home, companys }) => {
  const load = useSelector(rootSlice.load).list;
  const page = useSelector(rootSlice.page);

  return (
    <div
      className={`${styles.list_none} ${select && styles.list_none_select} ${
        companys && styles.list_none_companys
      } ${
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
            : home
            ? "フォローしているユーザーがいません"
            : "営業情報がありません"}
        </span>
      )}
    </div>
  );
};
