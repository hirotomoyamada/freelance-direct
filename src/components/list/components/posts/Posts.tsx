import React from "react";
import styles from "./Posts.module.scss";

import { Item } from "components/item/Item";

import { Matter, Company } from "types/post";
import { User } from "types/user";

interface PropType {
  user: User;
  posts: Matter[] | Company[];
  list: React.RefObject<HTMLDivElement>;
  index?: "matters" | "companys" | "enable" | "hold" | "disable";
  select?: string[];
  selectUser?: (uid: string) => void;
}

export const Posts: React.FC<PropType> = ({
  user,
  posts,
  list,
  index,
  select,
  selectUser,
}) => {
  return (
    <div className={styles.posts} ref={list}>
      {posts.map(
        (post) =>
          post && (
            <Item
              key={
                (post as Matter).objectID
                  ? (post as Matter).objectID
                  : (post as Company).uid
              }
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
