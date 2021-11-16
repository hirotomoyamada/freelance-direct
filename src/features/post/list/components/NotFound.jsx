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
        <Loader type="Grid" color="#1d9bf0" height={56} width={56} />
      ) : (
        <span className={styles.list_none_message}>
          {
            // ------ 削除予定 ------
            page === "home" 
            ? "準備中" :
            // ------ 削除予定 ------
            index === "matters"
            ? "案件情報がありません"
            // ------ 削除予定 ------
            : "準備中"
            // ------ 削除予定 ------
            // : home // ver 1.1.0
            // ? "フォローしているユーザーがいません" // ver 1.1.0
            // : "営業情報がありません" // ver 1.1.0
          }
        </span>
      )}
    </div>
  );
};
