import styles from "../Modal.module.scss";

import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

export const Input = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const password = watch("password");

  return (
    <div className={styles.modal_container}>
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
        {errors.email?.message && (
          <span className={styles.modal_error}>{errors.email?.message}</span>
        )}
      </div>

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

      <Link to={"/login"} type="button" className={styles.modal_login}>
        アカウントをお持ちですか？
      </Link>

      <button type="submit" className={styles.modal_btn}>
        新規登録
      </button>
    </div>
  );
};
