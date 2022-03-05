import styles from "./Btn.module.scss";
import { Link } from "react-router-dom";
import React from "react";

interface PropType {
  txt: string;
  src: string;
  func?: () => void;
  acnt?: boolean;
  square?: boolean;
  input?: boolean;
  submit?: boolean;
  hidden?: boolean;
  blank?: boolean;
}

export const Btn: React.FC<
  Pick<
    PropType,
    "txt" | "acnt" | "square" | "input" | "submit" | "hidden" | "func"
  >
> = ({ txt, acnt, square, input, func, submit, hidden }) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`${styles.btn} ${
        square && styles.btn_square
      } && styles.btn_acnt} ${acnt && styles.btn_acnt} ${
        input && styles.btn_input
      } ${hidden && styles.btn_hidden}`}
      onClick={() => (submit || !func ? null : func())}
    >
      {txt}
    </button>
  );
};

export const LinkBtn: React.FC<
  Pick<PropType, "txt" | "acnt" | "square" | "src" | "blank">
> = ({ txt, acnt, square, src, blank }) => {
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
