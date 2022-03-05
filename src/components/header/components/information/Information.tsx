import React from "react";
import styles from "./Information.module.scss";

import { useDispatch } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

import InfoIcon from "@material-ui/icons/Info";
import SettingsIcon from "@material-ui/icons/Settings";

interface PropType {
  info:
    | {
        body: string;
        title: string;
        updateAt: number;
      }
    | undefined;
}

export const Information: React.FC<PropType> = ({ info }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.info}>
      <button
        type="button"
        onClick={() => dispatch(rootSlice.handleModal({ type: "info" }))}
        className={styles.info_wrap}
      >
        <InfoIcon className={styles.info_icon} />
        <span className={styles.info_title}>{info?.title}</span>
      </button>

      <button
        type="button"
        onClick={() => dispatch(rootSlice.handleModal({ type: "home" }))}
        className={styles.setting}
      >
        <SettingsIcon className={styles.setting_icon} />
      </button>
    </div>
  );
};
