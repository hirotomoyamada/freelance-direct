import React from "react";
import styles from "../Create.module.scss";
import root from "../../../Auth.module.scss";

import { useFormContext } from "react-hook-form";

import { Data } from "pages/auth/Auth";

interface PropType {
  file: File;
  error: string | null;
}

export const Resume: React.FC<PropType> = ({ file, error }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div className={root.auth_col}>
      <span className={styles.tag}>職務経歴書</span>

      <div>
        <input
          type="file"
          id="file"
          {...register("file", {
            required: {
              value: true,
              message: "ファイルを選択してください",
            },
          })}
          className={root.auth_input_none}
        />

        <label
          htmlFor="file"
          className={`${styles.file} ${
            (error || errors?.file?.message) && styles.file_error
          }`}
        >
          <span
            className={`${styles.file_txt} ${file && styles.file_txt_enable}`}
          >
            {!file ? "ファイルを選択" : file?.name}
          </span>
        </label>

        {(error || errors?.file?.message) && (
          <span className={`${root.auth_error} ${root.auth_error_center}`}>
            {errors?.file?.message ? errors.file.message : error}
          </span>
        )}
      </div>
    </div>
  );
};
