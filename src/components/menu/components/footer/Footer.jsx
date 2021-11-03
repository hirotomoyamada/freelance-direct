import styles from "./Footer.module.scss";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useDispatch } from "react-redux";
import { auth } from "../../../../firebase";

import * as rootSlice from "../../../../features/root/rootSlice";

import { Icon } from "@material-ui/core";

export const Footer = () => {
  const dispatch = useDispatch();

  const logout = () => {
    document.body.classList.add("fadeIn");
    document.body.classList.remove("fadeOut");

    setTimeout(() => {
      auth.signOut();
    }, 400);

    setTimeout(() => {
      document.body.classList.add("fadeOut");
      document.body.classList.remove("fadeIn");
    }, 700);

    dispatch(
      rootSlice.handleAnnounce({
        type: "success",
        text: "ログアウトしました",
      })
    );
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
