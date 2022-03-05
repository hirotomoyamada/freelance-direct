import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchUser } from "features/user/actions";
import { userPosts } from "features/post/actions";

import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";
import * as postSlice from "features/post/postSlice";
import { RootState } from "app/store";
import { User } from "types/user";
import { Matter, Company } from "types/post";

export const useUser = (
  uid: string
): [
  currentUser: User,
  user: User | Company,
  posts: Matter[],
  hit:
    | {
        posts: number;
        pages: number;
        currentPage: number;
      }
    | undefined
] => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const currentUser = useSelector(userSlice.user);
  const selectUser = useSelector(userSlice.selectUser);

  const user = currentUser?.uid === uid ? currentUser : selectUser;

  const posts = useSelector((state: RootState) =>
    postSlice.posts({
      state: state,
      page: "user",
    })
  ) as Matter[];

  const hit = useSelector((state: RootState) =>
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
  }, [uid]);

  return [currentUser, user, posts, hit];
};
