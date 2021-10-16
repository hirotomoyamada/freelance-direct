import styles from "../Form.module.scss";
import { useFormContext } from "react-hook-form";

export const Name = () => {
  const { register } = useFormContext();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>
        氏名&nbsp;<span className={styles.form_tag_desc}>※1</span>
        &nbsp;
        <span className={styles.form_tag_exp}>※変更することはできません。</span>
      </span>
      <div>
        <input
          readOnly
          disabled
          className={`${styles.form_input} ${styles.form_input_disable}`}
          {...register("name")}
        />
      </div>
    </div>
  );
};
