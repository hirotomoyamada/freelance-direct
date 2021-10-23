import styles from "../Nav.module.scss";

import { Icon } from "@material-ui/core";

export const Btn = ({ icon, page, i, user, text, handlePage }) => {
  return (
    <li>
      <button
        type="button"
        onClick={() => handlePage(i)}
        className={`${styles.nav_btn} ${page === i && styles.nav_btn_current} ${
          i === "requests" &&
          user?.requests?.hold?.length &&
          styles.nav_btn_notice
        }`}
      >
        <Icon className={styles.nav_btn_icon} component={icon} />
        <span className={styles.nav_btn_txt}>{text}</span>
      </button>
    </li>
  );
};
