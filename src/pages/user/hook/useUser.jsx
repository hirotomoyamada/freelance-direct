import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchUser } from "../../../features/user/actions/fetchUser";
import { userPosts } from "../../../features/post/actions/userPosts";

import * as rootSlice from "../../../features/root/rootSlice";
import * as userSlice from "../../../features/user/userSlice";
import * as postSlice from "../../../features/post/postSlice";

export const useUser = (uid) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const currentUser = useSelector(userSlice.user);
  const selectUser = useSelector(userSlice.selectUser);

  const user =
    currentUser?.uid === uid
      ? currentUser
      : selectUser?.uid === uid && selectUser;

  const posts = useSelector((state) =>
    postSlice.posts({
      state: state,
      page: "user",
    })
  );

  const hit = useSelector((state) =>
    postSlice.hit({
      state: state,
      page: "user",
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(rootSlice.handlePage("user"));
  }, [dispatch, pathname]);

  useEffect(() => {
    if (currentUser?.uid !== user?.uid) {
      dispatch(fetchUser(uid));
      dispatch(userPosts({ uid: uid }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  return [currentUser, user, posts, hit];
};
