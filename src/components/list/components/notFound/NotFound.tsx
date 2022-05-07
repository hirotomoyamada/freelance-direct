import React from "react";
import styles from "./NotFound.module.scss";

import { Grid } from "react-loader-spinner";

import { useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

interface PropType {
  list: React.RefObject<HTMLDivElement>;
  index?: "matters" | "companys" | "enable" | "hold" | "disable";
  select?: string[];
  home?: boolean;
  companys?: boolean;
}

export const NotFound: React.FC<PropType> = ({
  index,
  list,
  select,
  home,
  companys,
}) => {
  const load = useSelector(rootSlice.load).list;
  const page = useSelector(rootSlice.page);

  return (
    <div
      className={`${styles.none} ${select && styles.none_select} ${
        companys && styles.none_companys
      } ${
        (page === "likes" || page === "entries" || page === "history") &&
        styles.none_list
      } ${page === "requests" && styles.none_requests}`}
      ref={list}
    >
      {load ? (
        <Grid color="#1d9bf0" height={56} width={56} />
      ) : (
        <span className={styles.none_message}>
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
