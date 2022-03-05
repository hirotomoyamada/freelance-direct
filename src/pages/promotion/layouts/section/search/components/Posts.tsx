import React from "react";
import { Matter } from "types/post";
import styles from "../Search.module.scss";

import { Item } from "./item/Item";

interface PropType {
  posts: Matter[];
  handleOpen: () => void;
}

export const Posts: React.FC<PropType> = ({ posts, handleOpen }) => {
  return (
    <div className={styles.search_list}>
      {posts.map((post) => (
        <button type="button" key={post.objectID} onClick={() => handleOpen()}>
          <Item post={post} />
        </button>
      ))}
    </div>
  );
};
