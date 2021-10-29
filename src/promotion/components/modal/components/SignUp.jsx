import styles from "../Modal.module.scss";

import { Link } from "react-router-dom";

import { Email } from "./Email";
import { Password } from "./Password";

export const SignUp = () => {
  return (
    <div className={styles.modal_container}>
      <Email />

      <Password />

      <Link to={"/login"} type="button" className={styles.modal_login}>
        アカウントをお持ちですか？
      </Link>

      <button type="submit" className={styles.modal_btn}>
        新規登録
      </button>
    </div>
  );
};
