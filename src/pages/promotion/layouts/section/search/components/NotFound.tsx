import React from "react";
import styles from "../Search.module.scss";

import { Grid } from "react-loader-spinner";

interface PropType {
  load: boolean;
}

export const NotFound: React.FC<PropType> = ({ load }) => {
  return (
    <div className={styles.search_list_none}>
      {load ? (
        <Grid color="#1d9bf0" height={56} width={56} />
      ) : (
        <span className={styles.search_list_none_message}>
          案件情報がありません
        </span>
      )}
    </div>
  );
};
