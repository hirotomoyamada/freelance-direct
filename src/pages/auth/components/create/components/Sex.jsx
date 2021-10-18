import styles from "../Create.module.scss";
import root from "../../../Auth.module.scss";

import { useFormContext } from "react-hook-form";

export const Sex = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={root.auth_col}>
      <span className={styles.tag}>性別</span>
      <div className={styles.select}>
        <select
          className={`${root.auth_input} ${
            errors.sex && root.auth_input_error
          }`}
          {...register("sex", {
            required: {
              value: true,
              message: "性別を選択してください",
            },
          })}
        >
          <option value={"男性"}>男性</option>
          <option value={"女性"}>女性</option>
          <option value={"その他"}>その他</option>
        </select>
        {errors.sex?.message && (
          <span className={root.auth_error}>{errors.sex?.message}</span>
        )}
      </div>
    </div>
  );
};
