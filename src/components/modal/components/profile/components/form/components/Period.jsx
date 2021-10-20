import styles from "../Form.module.scss";

import { useFormContext } from "react-hook-form";

export const Period = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const date = new Date();
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth() + 1;

  const Year = () => {
    const year = [];
    for (let i = dateYear; i <= dateYear + 5; i++) {
      year.push(
        <option key={i} value={i}>
          {i}年
        </option>
      );
    }
    return (
      <div className={styles.form_select}>
        <select
          className={`${styles.form_input} ${
            errors.period?.year && styles.form_input_error
          }`}
          {...register("period.year", {
            required: {
              value: true,
              message: "年を選択してください",
            },
          })}
        >
          {year}
        </select>
        {errors.period?.year?.message && (
          <span className={styles.form_error}>
            {errors.period?.year?.message}
          </span>
        )}
      </div>
    );
  };

  const Month = () => {
    const month = [];
    for (let i = dateMonth; i <= dateMonth + (12 - dateMonth); i++) {
      month.push(
        <option key={i} value={i}>
          {i}月
        </option>
      );
    }
    for (let i = 1; i <= dateMonth - 1; i++) {
      month.push(
        <option key={i} value={i}>
          {i}月
        </option>
      );
    }
    return (
      <div className={styles.form_select}>
        <select
          className={`${styles.form_input} ${
            errors.period?.month && styles.form_input_error
          }`}
          {...register("period.month", {
            required: {
              value: true,
              message: "月を選択してください",
            },
          })}
        >
          {month}
        </select>
        {errors.period?.month?.message && (
          <span className={styles.form_error}>
            {errors.period?.month?.message}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>
        稼働可能時期
      </span>
      <div className={`${styles.form_grid} ${styles.form_grid_period}`}>
        <Year />
        <Month />
      </div>
    </div>
  );
};
