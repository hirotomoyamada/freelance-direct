import React from "react";
import styles from "../Header.module.scss";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Handles: React.FC<PropType> = ({ post }) => {
  const handles = post?.handles;
  return handles?.[0] ? (
    <div className={handles && styles.header_tags}>
      {handles?.[0] &&
        handles.map(
          (handle, index) =>
            handle &&
            index < 3 && (
              <div className={styles.header_tags_tag} key={index}>
                <h3 className={styles.header_tags_tag_txt}>{handle}</h3>
              </div>
            )
        )}
    </div>
  ) : (
    <></>
  );
};
