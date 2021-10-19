import styles from "./Follow.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as userSlice from "../../features/user/userSlice";

export const Follow = ({ user, post, profile, select, selectUser }) => {
  const dispatch = useDispatch();

  const [follow, setFollow] = useState(false);
  const [target, setTarget] = useState(false);

  useEffect(() => {
    setFollow(user?.follows?.indexOf(post?.uid) >= 0 ? true : false);
    select && setTarget(select.indexOf(post?.uid) >= 0 ? true : false);
  }, [post?.uid, select, user?.follows]);

  const handleFollow = () => {
    dispatch(
      !follow ? userSlice.addFollow(post) : userSlice.removeFollow(post)
    );
  };

  return post?.uid ? (
    !select ? (
      <button
        onClick={handleFollow}
        className={`${styles.follow} ${follow && styles.follow_followed} ${
          profile && styles.follow_profile
        }`}
      >
        {!follow ? "フォローする" : "フォロー中"}
      </button>
    ) : (
      <button
        onClick={() => selectUser(post.uid)}
        className={`${styles.follow} ${target && styles.follow_remove} ${
          !target && select.length >= 15 && styles.follow_disable
        }`}
      >
        {!target ? "未選択" : "解除"}
      </button>
    )
  ) : (
    <></>
  );
};