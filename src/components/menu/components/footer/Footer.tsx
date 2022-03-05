import React from "react";
import styles from "./Footer.module.scss";

import { auth } from "libs/firebase";
import { signOut } from "firebase/auth";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useDispatch } from "react-redux";

import * as rootSlice from "features/root/rootSlice";

import { Icon } from "@material-ui/core";

export const Footer: React.FC = () => {
  const dispatch = useDispatch();

  const logout = (): void => {
    dispatch(rootSlice.handleMenu("close"));

    document.body.classList.add("fadeIn");
    document.body.classList.remove("fadeOut");

    setTimeout(() => {
      void signOut(auth);
    }, 400);

    setTimeout(() => {
      document.body.classList.add("fadeOut");
      document.body.classList.remove("fadeIn");
    }, 700);

    dispatch(
      rootSlice.handleAnnounce({
        success: "ログアウトしました",
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
