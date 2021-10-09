import styles from "./Footer.module.scss";
import { auth } from "../../../../firebase";

import { Icon } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const Footer = () => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <div className={styles.footer}>
      <button type="button" onClick={logout} className={styles.footer_logout}>
        <Icon className={styles.footer_logout_icon} component={ExitToAppIcon} />
        <span className={styles.footer_logout_txt}>ログアウト</span>
      </button>
    </div>
  );
};
