import styles from "./Modal.module.scss";

import { Input } from "./components/Input";
import { Social } from "./components/Social";

export const Modal = ({ handleClose, open }) => {
  return (
    <div className={open ? styles.open : styles.close}>
      <div className={styles.overlay} onClick={handleClose}></div>

      <div className={styles.modal}>
        <div className={styles.modal_inner}>
          <h1 className={styles.modal_ttl}>新規登録</h1>
          <Input />

          <p className={styles.modal_strike}>
            <span>または</span>
          </p>

          <Social />
        </div>
      </div>
    </div>
  );
};
