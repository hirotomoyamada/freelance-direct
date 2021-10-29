import styles from "../Modal.module.scss";

import { useFormContext } from "react-hook-form";

export const Password = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const password = watch("password");

  return (
    <>
      <div>
        <input
          type="password"
          className={`${styles.modal_input} ${
            errors.password && styles.modal_input_error
          }`}
          placeholder="パスワード"
          {...register("password", {
            required: {
              value: true,
              message: "パスワードを入力してください",
            },
            minLength: {
              value: 8,
              message: "パスワードを8文字以上で入力してください",
            },
          })}
        />
        {errors.password?.message && (
          <span className={styles.modal_error}>{errors.password?.message}</span>
        )}
      </div>

      <div>
        <input
          type="password"
          className={`${styles.modal_input} ${
            errors.verifiedPassword && styles.modal_input_error
          }`}
          placeholder={"パスワード確認"}
          {...register("verifiedPassword", {
            required: {
              value: true,
              message: "パスワードを入力してください",
            },
            minLength: {
              value: 8,
              message: "パスワードを8文字以上で入力してください",
            },
            validate: {
              verified: (value) => value === password,
            },
          })}
        />
        {errors.verifiedPassword?.type === "verified" && (
          <span className={styles.modal_error}>パスワードが一致しません</span>
        )}
        
        {errors.password?.message && (
          <span className={styles.modal_error}>{errors.password?.message}</span>
        )}
      </div>
    </>
  );
};
