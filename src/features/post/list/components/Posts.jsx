import styles from "../List.module.scss";

import { Item } from "../../item/Item";

export const Posts = ({ index, posts, user, list }) => {
  return (
    <div className={styles.list} ref={list}>
      {posts.map((post) =>
        index !== "companys"
          ? post && (
              <Item
                key={post.objectID}
                index={index}
                post={post}
                user={user}
                search
              />
            )
          : post && (
              <Item
                key={post.uid}
                index={index}
                post={post}
                user={user}
                search
                companys
              />
            )
      )}
    </div>
  );
};
