import React from "react";
import styles from "../Create.module.scss";
import root from "../../../Auth.module.scss";

import { useFormContext } from "react-hook-form";

import { Data } from "pages/auth/Auth";

export const Age: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  const min = 18;
  const max = 65;
  const length = max - min;
  const Option = () => {
    const option = [];
    for (let i = 0; i <= length; i++) {
      option.push(
        <option key={i} value={min + i}>
          {min + i}歳
        </option>
      );
    }
    return (
      <select
        className={`${root.auth_input}  ${
          errors?.age && root.auth_input_error
        }`}
        {...register("age", {
          required: {
            value: true,
            message: "性別を選択してください",
          },
        })}
      >
        {option}
      </select>
    );
  };

  return (
    <div className={root.auth_col}>
      <span className={styles.tag}>年齢</span>

      <div className={styles.select}>
        <Option />

        {errors?.age?.message && (
          <span className={root.auth_error}>{errors.age.message}</span>
        )}
      </div>
    </div>
  );
};
