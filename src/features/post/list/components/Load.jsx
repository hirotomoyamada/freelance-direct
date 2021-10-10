import styles from "../List.module.scss";

import Loader from "react-loader-spinner";

export const Load = ({ load, page, hit }) => {
  return (
    <div ref={load} className={styles.list_load}>
      {page < hit.pages - 1 && (
        <Loader type="Oval" color="#4387f4" height={32} width={32} />
      )}
    </div>
  );
};
