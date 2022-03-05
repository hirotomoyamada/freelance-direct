import React from "react";
import styles from "../Form.module.scss";

import { useFormContext } from "react-hook-form";

export const Email: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div className={styles.form_col}>
      <span className={styles.form_tag}>
        メールアドレス&nbsp;<span className={styles.form_tag_desc}>※1</span>
        &nbsp;
        <span className={styles.form_tag_exp}>※ここでは変更できません。</span>
      </span>
      <div>
        <input
          readOnly
          disabled
          className={`${styles.form_input} ${styles.form_input_disable}`}
          {...register("email")}
        />
      </div>
    </div>
  );
};
