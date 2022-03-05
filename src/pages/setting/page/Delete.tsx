import React, { useEffect } from "react";
import styles from "./Page.module.scss";
import root from "../Setting.module.scss";

import { useDispatch } from "react-redux";
import { useFormContext } from "react-hook-form";
import { useScrollController } from "hooks/useScrollController";

import * as rootSlice from "features/root/rootSlice";

import { User } from "types/user";
import { Data } from "../Setting";

interface PropType {
  next: boolean;
  user: User;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Delete: React.FC<PropType> = ({
  next,
  user,
  setReset,
  setNext,
}) => {
  useScrollController();

  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  const handleVerification = () => {
    dispatch(
      rootSlice.handleModal({
        type: "delete",
        text: "アカウント",
      })
    );
  };

  useEffect(() => {
    const password = user.provider.find((provider) => provider === "password");
    !password && setNext(true);
    return () => {
      setNext(false);
    };
  }, [setNext, user.provider]);

  return !next ? (
    <div className={root.setting_inner}>
      <div className={styles.head}>
        <p className={styles.head_ttl}>パスワードを再入力</p>

        <p className={styles.head_desc}>
          続けるにはアカウントのパスワードをもう一度入力してください
        </p>
      </div>

      <div>
        <input
          type="password"
          className={`${styles.input} ${
            errors?.password && styles.input_error
          }`}
          placeholder="現在のパスワード"
          {...register("password", {
            required: {
              value: true,
              message: "パスワードを入力してください",
            },
          })}
        />

        <span className={styles.error}>{errors?.password?.message}</span>
      </div>

      <button
        type="button"
        className={styles.link}
        onClick={() => setReset(true)}
      >
        パスワードをお忘れですか？
      </button>

      <button type="submit" className={root.setting_btn}>
        次へ
      </button>
    </div>
  ) : (
    <div className={root.setting_inner}>
      <div className={styles.head}>
        <p className={styles.head_ttl}>アカウントを削除</p>

        <p className={styles.head_desc}>
          アカウントを削除すると、
          <span>これまでのデータはすべて削除されます</span>
        </p>
      </div>

      <button
        type="button"
        onClick={handleVerification}
        className={`${root.setting_btn} ${root.setting_btn_delete}`}
      >
        アカウント削除
      </button>
    </div>
  );
};
