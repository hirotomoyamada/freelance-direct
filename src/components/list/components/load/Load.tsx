import React from "react";
import styles from "./Load.module.scss";

import Loader from "react-loader-spinner";

interface PropType {
  load: React.RefObject<HTMLDivElement>;
  page: number;
  hit: {
    posts: number;
    pages: number;
    currentPage: number;
  };
}

export const Load: React.FC<PropType> = ({ load, page, hit }) => {
  return (
    <div
      ref={load}
      className={`${styles.load} ${page === hit.pages && styles.load_none}`}
    >
      {page < hit.pages && (
        <Loader type="Oval" color="#1d9bf0" height={32} width={32} />
      )}
    </div>
  );
};
