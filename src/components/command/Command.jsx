import styles from "./Command.module.scss";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import * as userSlice from "../../features/user/userSlice";

export const Command = ({ post, user, postItem }) => {
  const dispatch = useDispatch();

  const [clickLike, setClickLike] = useState(false);
  const [like, setLike] = useState(false);
  const [entry, setEntry] = useState(false);

  useEffect(() => {
    setLike(user.likes?.indexOf(post?.objectID) >= 0 ? true : false);
    setEntry(user.entries?.indexOf(post?.objectID) >= 0 ? true : false);
  }, [post?.objectID, user.entries, user.likes]);

  const handleLike = () => {
    if (!like) {
      dispatch(userSlice.addLike(post));

      setClickLike(true);
    } else {
      dispatch(userSlice.removeLike(post));

      setClickLike(false);
    }

    setLike(!like);
  };

  return (
    <div className={`${styles.command} ${postItem && styles.command_postItem}`}>
      <button onClick={handleLike}>
        {like ? (
          <FavoriteIcon
            className={`${styles.command_icon} ${styles.command_icon_like} ${
              clickLike && styles.command_icon_like_click
            }`}
          />
        ) : (
          <FavoriteBorderIcon className={styles.command_icon} />
        )}
      </button>
      {entry && (
        <CheckCircleOutlineIcon
          className={`${styles.command_icon} ${styles.command_icon_entry}`}
        />
      )}
    </div>
  );
};
