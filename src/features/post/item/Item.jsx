import styles from "./Item.module.scss";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as postSlice from "../../post/postSlice";

import { Post } from "./components/post/Post";
import { User } from "./components/user/User";
import { Menu } from "../menu/Menu";

import { Follow } from "../../../components/follow/Follow";

export const Item = ({
  index,
  post,
  user,
  status,
  display,
  search,
  select,
  selectUser,
  companys,
  home,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePost = () => {
    search && dispatch(postSlice.handleSearch({ control: true }));
    history.push(`/post/${post.objectID}`);
  };

  const handleUser = () => {
    search && dispatch(postSlice.handleSearch({ control: true }));
    history.push(`/user/${post.uid}`);

    index === "companys" && dispatch(postSlice.handleIndex("matters"));
  };

  return (
    <div className={styles.item_outer}>
      {!companys ? (
        <Menu index={index} post={post} user={user} postItem />
      ) : (
        <Follow
          user={user}
          post={post}
          select={select}
          selectUser={selectUser}
        />
      )}
      {!companys ? (
        <button type="button" onClick={handlePost} className={styles.item_btn}>
          <article className={styles.item}>
            <Post
              index={index}
              post={post}
              user={user}
              status={status}
              display={display}
            />
          </article>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleUser}
          className={`${styles.item_btn} ${home && styles.item_btn_disable}`}
        >
          <article className={`${styles.item} ${home && styles.item_home}`}>
            <User post={post} user={user} />
          </article>
        </button>
      )}
    </div>
  );
};
