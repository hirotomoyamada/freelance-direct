import React, { useEffect, useState } from "react";
import styles from "./Follow.module.scss";

import { useDispatch, useSelector } from "react-redux";

import * as userSlice from "features/user/userSlice";
import * as rootSlice from "features/root/rootSlice";
import { Company } from "types/post";
import { User } from "types/user";

interface PropType {
  user: User;
  post: Company;
  profile?: boolean;
  select?: string[];
  selectUser?: (uid: string) => void;
}

export const Follow: React.FC<PropType> = ({
  user,
  post,
  profile,
  select,
  selectUser,
}) => {
  const dispatch = useDispatch();

  const page = useSelector(rootSlice.page);

  const [follow, setFollow] = useState(false);
  const [target, setTarget] = useState(false);

  useEffect(() => {
    const follows: string[] = user?.follows?.length ? user?.follows : [];

    setFollow(follows.indexOf(post?.uid) >= 0 ? true : false);
    select && setTarget(select.indexOf(post?.uid) >= 0 ? true : false);
  }, [post?.uid, select, user?.follows]);

  const handleFollow = () => {
    dispatch(
      !follow ? userSlice.addFollow(post) : userSlice.removeFollow(post)
    );
  };

  return post?.uid && (post?.status !== "none" || page === "home") ? (
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
        onClick={() => selectUser && selectUser(post.uid)}
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
