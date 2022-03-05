import React from "react";
import styles from "../Form.module.scss";

import { useFormContext } from "react-hook-form";

import { Data } from "components/modal/components/profile/Profile";

export const Working: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>日数</span>
      <div className={styles.form_select}>
        <select
          className={`${styles.form_input} ${
            errors.working && styles.form_input_error
          }`}
          {...register("working", {
            required: {
              value: true,
              message: "日数を選択してください",
            },
          })}
        >
          <option value={1}>1日</option>
          <option value={2}>2日</option>
          <option value={3}>3日</option>
          <option value={4}>4日</option>
          <option value={5}>5日</option>
        </select>

        {errors?.working?.message && (
          <span className={styles.form_error}>{errors.working.message}</span>
        )}
      </div>
    </div>
  );
};
