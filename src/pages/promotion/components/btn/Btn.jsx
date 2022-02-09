import styles from "./Btn.module.scss";
import { Link } from "react-router-dom";

export const Btn = ({ txt, acnt, square, input, func, submit, hidden }) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`${styles.btn} ${
        square && styles.btn_square
      } && styles.btn_acnt} ${acnt && styles.btn_acnt} ${
        input && styles.btn_input
      } ${hidden && styles.btn_hidden}`}
      onClick={() => (submit ? null : func())}
    >
      {txt}
    </button>
  );
};

export const LinkBtn = ({ txt, acnt, square, src, blank }) => {
  return !blank ? (
    <Link
      to={`/${src}`}
      className={`${styles.btn} ${square && styles.btn_square} ${
        acnt && styles.btn_acnt
      }`}
    >
      {txt}
    </Link>
  ) : (
    <a
      href={src}
      className={`${styles.btn} ${square && styles.btn_square} ${
        acnt && styles.btn_acnt
      }`}
      target="_blank"
      rel="noreferrer noopener"
    >
      {txt}
    </a>
  );
};
