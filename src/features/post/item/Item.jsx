import styles from "./Item.module.scss";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as rootSlice from "../../root/rootSlice";

import { Post } from "./components/post/Post";
import { User } from "./components/user/User";
import { Menu } from "../menu/Menu";

import { Follow } from "../../../components/follow/Follow";
import { Request } from "../../../components/request/Request";

export const Item = ({ index, post, user, select, selectUser, none }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOpen = (index) => {
    dispatch(rootSlice.handleSearch({ control: true }));
    history.push(`/${index}/${index === "post" ? post?.objectID : post?.uid}`);
  };

  return (
    <div className={`${styles.item_outer} ${none && styles.item_outer_none}`}>
      {index === "matters" ? (
        <Menu post={post} user={user} postItem />
      ) : index !== "enable" && index !== "hold" && index !== "disable" ? (
        <Follow
          user={user}
          post={post}
          select={select}
          selectUser={selectUser}
        />
      ) : (
        <Request index={index} user={post} />
      )}
      {index === "matters" ? (
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
            (!post?.user?.uid || select || post?.status === "none") &&
            styles.item_btn_disable
          }`}
        >
          <article className={styles.item}>
            <User post={post} user={user} />
          </article>
        </button>
      )}
    </div>
  );
};
