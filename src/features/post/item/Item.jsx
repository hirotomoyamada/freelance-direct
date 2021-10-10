import styles from "./Item.module.scss";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as postSlice from "../../post/postSlice";

import { Post } from "./components/post/Post";
import { User } from "./components/user/User";
import { Menu } from "../menu/Menu";

import { Follow } from "../../../components/follow/Follow";

export const Item = ({
  post,
  user,
  search,
  select,
  selectUser,
  companys,
  home,
  none,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOpen = (index) => {
    search && dispatch(postSlice.handleSearch({ control: true }));
    history.push(`/${index}/${post.objectID}`);
  };

  return (
    <div className={`${styles.item_outer} ${none && styles.item_outer_none}`}>
      {!companys ? (
        <Menu post={post} user={user} postItem />
      ) : (
        <Follow
          user={user}
          post={post}
          select={select}
          selectUser={selectUser}
        />
      )}
      {!companys ? (
        <button
          type="button"
          onClick={() => handleOpen("post")}
          className={`${styles.item_btn} ${
            !post?.objectID && styles.item_btn_disable
          }`}
        >
          <article className={styles.item}>
            <Post post={post} user={user} />
          </article>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => handleOpen("user")}
          className={`${styles.item_btn} ${
            (home || !post?.uid) && styles.item_btn_disable
          }`}
        >
          <article className={`${styles.item} ${home && styles.item_home}`}>
            <User post={post} user={user} />
          </article>
        </button>
      )}
    </div>
  );
};
