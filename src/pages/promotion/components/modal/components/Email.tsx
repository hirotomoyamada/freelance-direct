import React from "react";
import styles from "../Modal.module.scss";

import { useFormContext } from "react-hook-form";

import { Data } from "hooks/useSignUp";

export const Email: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Data>();

  return (
    <div>
      <input
        type="text"
        className={`${styles.modal_input} ${
          errors.email && styles.modal_input_error
        }`}
        placeholder="メールアドレス"
        {...register("email", {
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

      {errors?.email?.message && (
        <span className={styles.modal_error}>{errors.email.message}</span>
      )}
    </div>
  );
};
