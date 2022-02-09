import styles from "../Search.module.scss";

import Loader from "react-loader-spinner";

export const NotFound = ({ load }) => {
  return (
    <div className={styles.search_list_none}>
      {load ? (
        <Loader type="Grid" color="#1d9bf0" height={56} width={56} />
      ) : (
        <span className={styles.search_list_none_message}>
          案件情報がありません
        </span>
      )}
    </div>
  );
};
