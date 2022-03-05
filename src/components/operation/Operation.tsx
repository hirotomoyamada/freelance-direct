import React from "react";
import styles from "./Operation.module.scss";

interface PropType {
  open: boolean;
  handleSortChange: ({
    target,
    type,
  }: {
    target: string;
    type: string;
  }) => void;
  handleOpen: () => void;
}

export const Operation: React.FC<PropType> = ({
  open,
  handleSortChange,
  handleOpen,
}) => {
  open && window.addEventListener("scroll", handleOpen);

  return (
    <div>
      <div className={`${styles.operation} ${styles.operation_sort}`}>
        <button
          onClick={() => handleSortChange({ target: "createAt", type: "desc" })}
          className={styles.operation_btn}
        >
          新着順
        </button>
        <button
          onClick={() => handleSortChange({ target: "updateAt", type: "desc" })}
          className={styles.operation_btn}
        >
          更新順
        </button>
      </div>

      {open && (
        <div onClick={handleOpen} className={styles.operation_overlay}></div>
      )}
    </div>
  );
};
