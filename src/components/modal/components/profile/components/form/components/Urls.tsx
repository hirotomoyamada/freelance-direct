import React from "react";
import styles from "../Form.module.scss";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useFormContext, useFieldArray } from "react-hook-form";

import { Data } from "components/modal/components/profile/Profile";

export const Urls: React.FC = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<Data>();

  const {
    fields: urlsFields,
    append: urlsAppend,
    remove: urlsRemove,
  } = useFieldArray({
    control,
    name: "urls",
  });

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>
        URL&nbsp;<span className={styles.form_tag_desc}>※1</span>
      </span>
      <div className={styles.form_col}>
        {urlsFields.map((field, i) => (
          <div key={field.id} className={styles.form_item}>
            <input
              placeholder={process.env.REACT_APP_FREELANCE_DIRECT}
              className={`${styles.form_input} ${
                errors.urls?.[i]?.url && styles.form_input_error
              }`}
              {...register(`urls.${i}.url` as const, {
                pattern: {
                  value: /^\S+/,
                  message: "先頭にスペースは使えません",
                },
                minLength: {
                  value: 8,
                  message: "8文字以上で入力してください",
                },
                maxLength: {
                  value: 144,
                  message: "144文字以内で入力してください",
                },
              })}
            />

            <div className={`${styles.form_btn} ${styles.form_btn_col}`}>
              {i !== 0 && (
                <button
                  type="button"
                  className={styles.form_btn_remove}
                  onClick={() => urlsRemove(i)}
                >
                  <RemoveIcon className={styles.form_btn_icon} />
                </button>
              )}
              
              {i === urlsFields.length - 1 && i < 2 && (
                <button
                  type="button"
                  className={styles.form_btn_add}
                  onClick={() => urlsAppend({ url: "" })}
                >
                  <AddIcon className={styles.form_btn_icon} />
                </button>
              )}
            </div>

            <span className={styles.form_error}>
              {errors?.urls?.[i]?.url?.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
