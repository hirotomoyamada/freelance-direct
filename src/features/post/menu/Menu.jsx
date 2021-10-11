import styles from "./Menu.module.scss";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import * as userSlice from "../../user/userSlice";

export const Menu = ({ post, user, postItem }) => {
  const dispatch = useDispatch();

  const [like, setLike] = useState(false);
  const [entry, setEntry] = useState(false);

  useEffect(() => {
    setLike(user.likes?.indexOf(post?.objectID) >= 0 ? true : false);
    setEntry(user.entries?.indexOf(post?.objectID) >= 0 ? true : false);
  }, [post?.objectID, user.entries, user.likes]);

  const handleLike = () => {
    if (!like) {
      dispatch(userSlice.addLike(post));
    } else {
      dispatch(userSlice.removeLike(post));
    }

    setLike(!like);
  };

  return (
    <div className={`${styles.menu} ${postItem && styles.menu_postItem}`}>
      <button onClick={handleLike}>
        {like ? (
          <FavoriteIcon
            className={`${styles.menu_icon} ${styles.menu_icon_like}`}
          />
        ) : (
          <FavoriteBorderIcon className={styles.menu_icon} />
        )}
      </button>
      {entry && (
        <CheckCircleOutlineIcon
          className={`${styles.menu_icon} ${styles.menu_icon_entry}`}
        />
      )}
    </div>
  );
};
