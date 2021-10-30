import styles from "./Btn.module.scss";
import { Link } from "react-router-dom";

export const Btn = ({ txt, acnt, square, input, func, submit }) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`${styles.btn} ${
        square && styles.btn_square
      } && styles.btn_acnt} ${acnt && styles.btn_acnt} ${
        input && styles.btn_input
      }`}
      onClick={() => (submit ? null : func())}
    >
      {txt}
    </button>
  );
};

export const LinkBtn = ({ txt, acnt, square, src }) => {
  return (
    <Link to={`/${src}`}>
      <button
        type="button"
        className={`${styles.btn} ${square && styles.btn_square} ${
          acnt && styles.btn_acnt
        }`}
      >
        {txt}
      </button>
    </Link>
  );
};
