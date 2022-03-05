import React from "react";
import styles from "./Footer.module.scss";
import Loader from "react-loader-spinner";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

import { Item } from "components/item/Item";

import { Matter } from "types/post";
import { User } from "types/user";

interface PropType {
  post: Matter;
  posts: Matter[];
  user: User;
}

export const Footer: React.FC<PropType> = ({ post, posts, user }) => {
  const load = useSelector(rootSlice.load);
  const index = "matters";

  return (
    <div className={styles.side}>
      <span className={styles.side_tag}>投稿したユーザー</span>

      {post?.user ? (
        <Item user={user} post={post?.user} none />
      ) : (
        <div className={styles.side_load}>
          <Loader type="Grid" color="#1d9bf0" height={32} width={32} />
        </div>
      )}

      {post?.uid && (
        <Link to={`/user/${post?.user?.uid}`}>
          <span className={styles.side_desc}>
            このユーザー の他の投稿を見る
          </span>
        </Link>
      )}

      <span className={styles.side_tag}>こんな案件もオススメ</span>

      <div className={styles.side_list}>
        {posts?.length ? (
          posts.map(
            (post) =>
              post && (
                <Item
                  index={index}
                  key={post?.objectID}
                  post={post}
                  user={user}
                />
              )
          )
        ) : load ? (
          <div className={styles.side_load}>
            <Loader type="Grid" color="#1d9bf0" height={32} width={32} />
          </div>
        ) : (
          <span className={styles.side_desc}>
            似ている案件が見つかりませんでした
          </span>
        )}
      </div>
    </div>
  );
};
