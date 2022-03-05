import React from "react";
import styles from "../Main.module.scss";

import ScheduleIcon from "@material-ui/icons/Schedule";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Times: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.main_wrap}>
      <ScheduleIcon className={styles.main_icon} />
      <div className={styles.main_field}>
        <span>
          {post?.times?.start}&nbsp;〜&nbsp;{post?.times?.end}
        </span>
      </div>
    </div>
  );
};
