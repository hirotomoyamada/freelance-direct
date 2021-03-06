import React from "react";
import styles from "../Auth.module.scss";

import { useFormContext } from "react-hook-form";
import { useScrollController } from "hooks/useScrollController";

import { Data } from "../Auth";

interface PropType {
  inner: React.RefObject<HTMLDivElement>;
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  resize: boolean;
}

export const Reset: React.FC<PropType> = ({
  inner,
  reset,
  setReset,
  resize,
}) => {
  useScrollController();

  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div
      className={`${styles.auth_inner} ${resize && styles.auth_inner_resize}`}
      ref={inner}
    >
      <button
        className={styles.auth_btn_reset}
        type="button"
        onClick={() => setReset(!reset)}
      >
        ログイン画面に戻る
      </button>

      <span className={styles.auth_ttl}>パスワード再設定メールを送る</span>

      <div>
        <input
          type="text"
          className={`${styles.auth_input} ${
            errors?.reset && styles.auth_input_error
          }`}
          placeholder="メールアドレス"
          {...register("reset", {
            required: {
              value: true,
              message: "メールアドレスを入力してください",
            },
            pattern: {
              value:
                /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
              message: "メールアドレスを正しい形式で入力してください",
            },
          })}
        />
        
        <span className={styles.auth_error}>{errors?.reset?.message}</span>
      </div>

      <div className={styles.auth_col}>
        <button type="submit" className={styles.auth_btn}>
          送信
        </button>
      </div>
    </div>
  );
};
