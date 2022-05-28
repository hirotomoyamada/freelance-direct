import styles from "./Command.module.scss";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import * as userSlice from "features/user/userSlice";

import { Matter } from "types/post";
import { User } from "types/user";

interface PropType {
  post: Matter;
  user: User;
  item?: boolean;
}

export const Command: React.FC<PropType> = ({ post, user, item }) => {
  const dispatch = useDispatch();

  const [clickLike, setClickLike] = useState(false);
  const [like, setLike] = useState(false);
  const [entry, setEntry] = useState(false);

  useEffect(() => {
    const likes: string[] = user?.likes?.length ? user?.likes : [];
    const entries: string[] = user?.entries?.length ? user?.entries : [];

    setLike(likes.indexOf(post?.objectID) >= 0 ? true : false);
    setEntry(entries.indexOf(post?.objectID) >= 0 ? true : false);
  }, [post?.objectID, user.entries, user.likes]);

  const handleLike = (): void => {
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
    <div className={`${styles.command} ${item && styles.command_item}`}>
      <button onClick={handleLike} className={styles.command_btn}>
        {like ? (
          <FavoriteIcon
            className={`${styles.command_icon} ${styles.command_icon_like} ${
              clickLike && styles.command_icon_like_click
            }`}
          />
        ) : (
          <FavoriteBorderIcon className={styles.command_icon} />
        )}

        <span
          className={`${styles.command_count} ${
            like && styles.command_count_like
          }`}
        >
          {post?.likes}
        </span>
      </button>

      {entry && (
        <CheckCircleOutlineIcon
          className={`${styles.command_icon} ${styles.command_icon_entry}`}
        />
      )}
    </div>
  );
};
