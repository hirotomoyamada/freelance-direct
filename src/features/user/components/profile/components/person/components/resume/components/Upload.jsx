import root from "../../../Person.module.scss";
import styles from "../Resume.module.scss";

import { useFormContext } from "react-hook-form";

export const Upload = ({ success, error, handleCancel }) => {
  const { register } = useFormContext();

  return (
    <div className={root.profile_col}>
      <div className={root.profile_wrap}>
        <input
          type="file"
          id="file"
          className={styles.resume_input}
          {...register("file")}
        />

        <button
          type="submit"
          className={`${styles.resume_btn} ${
            !success && styles.resume_btn_disable
          }`}
        >
          アップロード
        </button>

        <button
          type="button"
          className={`${styles.resume_btn} ${styles.resume_btn_cancel}`}
          onClick={handleCancel}
        >
          キャンセル
        </button>
      </div>

      {error && <span className={styles.resume_error}>{error}</span>}
    </div>
  );
};
