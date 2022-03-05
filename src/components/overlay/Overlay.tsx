import React from "react";
import styles from "./Overlay.module.scss";

import { useDispatch, useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

export const Overlay: React.FC = () => {
  const dispatch = useDispatch();
  const menu = useSelector(rootSlice.menu);

  return (
    <div
      className={`${styles.overlay} ${
        menu.display
          ? styles.overlay_open
          : menu.control && styles.overlay_close
      }`}
      onClick={() => dispatch(rootSlice.handleMenu("close"))}
    ></div>
  );
};
