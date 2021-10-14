import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { homePosts } from "./features/post/actions/homePosts";

import * as rootSlice from "./features/root/rootSlice";
import * as userSlice from "./features/user/userSlice";
import * as postSlice from "./features/post/postSlice";

import { Header } from "./components/header/Header";
import { Fetch } from "./components/load/Load";

import { List } from "./features/post/list/List";

export const Home = () => {
  const dispatch = useDispatch();

  const index = useSelector(rootSlice.index);
  const user = useSelector(userSlice.user);

  const posts = useSelector((state) =>
    postSlice.posts({
      state: state,
      page: "home",
      index: index === "matters" || index === "companys" ? index : "matters",
    })
  );

  const hit = useSelector((state) =>
    postSlice.hit({
      state: state,
      page: "search",
      index: index === "matters" || index === "companys" ? index : "matters",
    })
  );

  const control = useSelector((state) =>
    postSlice.control({
      state: state,
      index: index === "matters" || index === "companys" ? index : "matters",
    })
  );

  useEffect(() => {
    dispatch(rootSlice.handlePage("home"));
  }, [dispatch]);

  useEffect(() => {
    (index === "enable" || index === "hold" || index === "disable") &&
      dispatch(rootSlice.handleIndex("matters"));
  }, [dispatch, index]);

  useEffect(() => {
    (index === "matters" || index === "resources") &&
      (!posts.length || control) &&
      dispatch(
        homePosts({
          index: index,
          follows:
            index === "matters" ? [user.uid, ...user.home] : user.follows,
          fetch: posts.length && true,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, index, user.home]);

  return (
    <div>
      <Fetch />

      <Header user={user} type="home" index={index} />
      <List user={user} index={index} posts={posts} hit={hit} home />
    </div>
  );
};
