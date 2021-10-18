import styles from "../List.module.scss";

import { Item } from "../../item/Item";

export const Posts = ({ index, posts, user, list, select, selectUser }) => {
  return (
    <div
      className={styles.list}
      ref={list}
    >
      {posts.map(
        (post) =>
          post && (
            <Item
              key={post.objectID ? post.objectID : post.uid}
              index={index}
              post={post}
              user={user}
              select={select}
              selectUser={selectUser}
            />
          )
      )}
    </div>
  );
};
