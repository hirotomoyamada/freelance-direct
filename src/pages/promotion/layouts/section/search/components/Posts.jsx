import styles from "../Search.module.scss";

import { Item } from "./item/Item";

export const Posts = ({ posts, handleOpen }) => {
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
