import styles from "../Nav.module.scss";

import { Icon } from "@material-ui/core";

export const Btn = ({ icon, page, current, user, text, handlePage }) => {
  return (
    <li>
      <button
        type="button"
        onClick={() => handlePage(current)}
        className={`${styles.nav_btn} ${
          page === current && styles.nav_btn_current
        }`}
      >
        <Icon className={styles.nav_btn_icon} component={icon} />
        <span className={styles.nav_btn_txt}>{text}</span>
      </button>
    </li>
  );
};
