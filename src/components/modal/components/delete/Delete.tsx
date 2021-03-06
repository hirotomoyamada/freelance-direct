import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styles from "./Delete.module.scss";

interface PropType {
  handleClose: () => void;
  text?: string;
  close?: () => void;
  handleDelete?: () => void;
  block?: boolean;
}

export const Delete: React.FC<PropType> = ({
  text,
  handleClose,
  close,
  handleDelete,
  block,
}) => {
  const [load, setLoad] = useState<boolean>(false);

  return (
    <div className={styles.delete}>
      {text !== "出力" && (
        <p className={styles.delete_ttl}>
          {text}を{!block ? "削除" : "ブロック"}
        </p>
      )}
      <span className={styles.delete_desc}>
        {text !== "出力"
          ? `本当にこの${text}を${
              !block ? "削除" : "ブロック"
            }してよろしいですか？`
          : "出力リストから選択した項目を削除しますか？"}
      </span>
      <div className={styles.delete_menu}>
        <button
          type="button"
          className={`${styles.delete_menu_cancel} ${
            load && styles.delete_menu_cancel_disabled
          }`}
          onClick={close ? close : handleClose}
        >
          {text !== "出力" ? "キャンセル" : "削除しない"}
        </button>
        <button
          form="form"
          type={handleDelete ? "button" : "submit"}
          className={styles.delete_menu_submit}
          onClick={() => {
            setLoad(true);
            if (handleDelete) handleDelete();
          }}
        >
          {load ? (
            <ThreeDots color="#FFF" height={24} width={24} />
          ) : block ? (
            "ブロック"
          ) : text !== "出力" ? (
            "削除"
          ) : (
            "すべて削除する"
          )}
        </button>
      </div>
    </div>
  );
};
