import styles from "./Footer.module.scss";
import Loader from "react-loader-spinner";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import * as postSlice from "../../post/postSlice";

import { Item } from "../../post/item/Item";

export const Footer = ({ post, posts, user }) => {
  const load = useSelector(postSlice.load);

  return (
    <div className={styles.side}>
      <span className={styles.side_tag}>投稿したユーザー</span>

      {post?.user ? (
        <Item user={user} post={post?.user} companys none />
      ) : (
        <div className={styles.side_load}>
          <Loader type="Grid" color="#4387f4" height={32} width={32} />
        </div>
      )}

      {post?.uid && (
        <Link to={`/user/${post?.user?.uid}`}>
          <span className={styles.side_desc}>このユーザーの他の投稿を見る</span>
        </Link>
      )}

      <span className={styles.side_tag}>こんな案件もオススメ</span>

      <div className={styles.side_list}>
        {posts?.length ? (
          posts.map(
            (post) =>
              post && <Item key={post?.objectID} post={post} user={user} />
          )
        ) : load ? (
          <div className={styles.side_load}>
            <Loader type="Grid" color="#4387f4" height={32} width={32} />
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
