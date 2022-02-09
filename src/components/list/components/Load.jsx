import styles from "../List.module.scss";

import Loader from "react-loader-spinner";

export const Load = ({ load, page, hit }) => {
  return (
    <div
      ref={load}
      className={`${styles.list_load} ${
        page === hit.pages && styles.list_load_none
      }`}
    >
      {page < hit.pages && (
        <Loader type="Oval" color="#1d9bf0" height={32} width={32} />
      )}
    </div>
  );
};
