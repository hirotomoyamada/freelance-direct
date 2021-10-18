import root from "../../../Person.module.scss";
import styles from "../Resume.module.scss";

export const Upload = ({
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
