import styles from "../Fv.module.scss";

import { useFormContext } from "react-hook-form";

import { Btn } from "../../../components/btn/Btn";

export const Signup = ({ open, handleOpen }) => {
  const { register } = useFormContext();

  return (
    <div className={styles.fv_head_signup}>
      <input
        type="text"
        className={styles.fv_head_input}
        placeholder="メールアドレス"
        {...register("email", {
          disabled: open ? true : false,
        })}
      />

      <Btn txt={"新規登録"} func={handleOpen} square />
    </div>
  );
};
