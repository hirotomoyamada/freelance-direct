import React from "react";
import root from "../../../Person.module.scss";
import styles from "../Resume.module.scss";

import { User } from "types/user";

interface PropType {
  user: User;
  input: React.RefObject<HTMLInputElement>;
  success: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
  error: string | null;
}

export const Upload: React.FC<PropType> = ({
  user,
  input,
  success,
  error,
  handleChange,
  handleCancel,
}) => {
  return !user?.resume?.url ? (
    <div className={root.profile_col}>
      <div className={root.profile_wrap}>
        <input
          ref={input}
          type="file"
          id="resume"
          onChange={(e) => handleChange(e)}
          className={styles.resume_input}
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
  ) : (
    <></>
  );
};
