import React from "react";
import styles from "./Item.module.scss";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as rootSlice from "features/root/rootSlice";

import { Command } from "components/command/Command";
import { Follow } from "components/follow/Follow";
import { Request } from "components/request/Request";

import { Post } from "./components/post/Post";
import { User } from "./components/user/User";

import * as PostType from "types/post";
import * as UserType from "types/user";

interface PropType {
  post: PostType.Matter | PostType.Company | PostType.Matter["user"];
  user: UserType.User;
  index?: "matters" | "companys" | "enable" | "hold" | "disable";
  select?: string[];
  selectUser?: (uid: string) => void;
  none?: boolean;
}

export const Item: React.FC<PropType> = ({
  index,
  post,
  user,
  select,
  selectUser,
  none,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = (index: "user" | "post"): void => {
    dispatch(rootSlice.handleSearch({ control: true }));
    navigate(
      `/${index}/${
        index === "post"
          ? (post as PostType.Matter)?.objectID
          : (post as PostType.Company)?.uid
      }`
    );
  };

  return (
    <div className={`${styles.item_outer} ${none && styles.item_outer_none}`}>
      {index === "matters" ? (
        <Command post={post as PostType.Matter} user={user} item />
      ) : index !== "enable" && index !== "hold" && index !== "disable" ? (
        <Follow
          user={user}
          post={post as PostType.Company}
          select={select}
          selectUser={selectUser}
        />
      ) : (
        <Request index={index} user={post as PostType.Company} />
      )}
      {index === "matters" ? (
        <button
          type="button"
          onClick={() => handleOpen("post")}
          className={`${styles.item_btn} ${
            !(post as PostType.Matter)?.objectID && styles.item_btn_disable
          }`}
        >
          <article className={styles.item}>
            <Post post={post as PostType.Matter} />
          </article>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => handleOpen("user")}
          className={`${styles.item_btn} ${
            (!post?.uid ||
              select ||
              ("type" in post && post.type === "none")) &&
            styles.item_btn_disable
          }`}
        >
          <article className={styles.item}>
            <User post={post as PostType.Company} />
          </article>
        </button>
      )}
    </div>
  );
};
