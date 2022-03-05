import React from "react";
import styles from "../Header.module.scss";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Tools: React.FC<PropType> = ({ post }) => {
  const tools = post?.tools;

  return tools?.[0] ? (
    <div className={tools && styles.header_tags}>
      {tools?.[0] &&
        tools.map(
          (tool, index) =>
            tool &&
            index < 3 && (
              <div
                className={`${styles.header_tags_tag} ${styles.header_tags_tag_tools}`}
                key={index}
              >
                <h3 className={styles.header_tags_tag_txt}>{tool}</h3>
              </div>
            )
        )}
    </div>
  ) : (
    <></>
  );
};
