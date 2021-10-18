import styles from "../Create.module.scss";
import root from "../../../Auth.module.scss";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useFormContext, useFieldArray } from "react-hook-form";

export const Handles = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const {
    fields: handlesFields,
    append: handlesAppend,
    remove: handlesRemove,
  } = useFieldArray({
    control,
    name: "handles",
  });

  return (
    <div className={root.auth_col}>
      <span className={styles.tag}>
        言語・フレームワーク&nbsp;
        <span className={styles.tag_desc}>など</span>
      </span>

      <div className={`${styles.grid} ${styles.grid_field}`}>
        {handlesFields.map((field, i) => (
          <div key={field.id} className={styles.field}>
            <input
              placeholder="言語"
              className={`${root.auth_input} ${
                errors.handles?.[i]?.handle && root.auth_input_error
              }`}
              {...register(`handles[${i}].handle`, {
                required: i === 0 && {
                  value: true,
                  message: "項目を入力してください",
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
                  value: 16,
                  message: "16文字以内で入力してください",
                },
              })}
            />

            <div className={styles.field_btn}>
              {i !== 0 && (
                <button
                  type="button"
                  className={styles.field_btn_remove}
                  onClick={() => handlesRemove(i)}
                >
                  <RemoveIcon className={styles.field_btn_icon} />
                </button>
              )}
              {i === handlesFields.length - 1 && i < 5 && (
                <button
                  type="button"
                  className={styles.field_btn_add}
                  onClick={() => handlesAppend({ handle: "" })}
                >
                  <AddIcon className={styles.field_btn_icon} />
                </button>
              )}
            </div>

            {errors.handles?.[i]?.handle.message && (
              <span className={root.auth_error}>
                {errors.handles?.[i]?.handle.message}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
