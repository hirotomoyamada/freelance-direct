import React from "react";
import styles from "../Main.module.scss";

import LocationOnIcon from "@material-ui/icons/LocationOn";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Location: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.main_wrap}>
      <LocationOnIcon className={styles.main_icon} />
      <p>{post?.location?.area}</p>
    </div>
  );
};
