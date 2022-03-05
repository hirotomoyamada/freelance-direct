import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchPost } from "features/post/actions";

import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";
import * as postSlice from "features/post/postSlice";

import { Matter } from "types/post";
import { User } from "types/user";

export const usePost = (
  objectID: string
): [post: Matter, posts: Matter[], user: User] => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const post = useSelector(postSlice.post);
  const posts = useSelector(postSlice.bests);
  const user = useSelector(userSlice.user);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(rootSlice.handlePage("post"));
  }, [dispatch, pathname]);

  useEffect(() => {
    dispatch(fetchPost(objectID));

    return () => {
      dispatch(postSlice.resetPost());
    };
  }, [dispatch, objectID]);

  return [post, posts, user];
};
