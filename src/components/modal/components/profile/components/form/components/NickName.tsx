import React from "react";
import styles from "../Form.module.scss";
import { useFormContext } from "react-hook-form";

import { Data } from "components/modal/components/profile/Profile";

export const NickName: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>ニックネーム</span>
      <div>
        <input
          className={`${styles.form_input} ${
            errors.nickName && styles.form_input_error
          }`}
          placeholder="天下の大将軍"
          {...register("nickName", {
            required: {
              value: true,
              message: "ニックネームを入力してください",
            },
            pattern: {
              value: /^\S+/,
              message: "先頭にスペースは使えません",
            },
            minLength: {
              value: 2,
              message: "2文字以上で入力してください",
            },
            maxLength: {
              value: 18,
              message: "18文字以内で入力してください",
            },
          })}
        />

        {errors?.nickName?.message && (
          <span className={styles.form_error}>{errors.nickName.message}</span>
        )}
      </div>
    </div>
  );
};
