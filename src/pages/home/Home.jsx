import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePosts } from "../../hooks/usePosts";

import { homePosts } from "../../features/post/actions/homePosts";

import * as rootSlice from "../../features/root/rootSlice";
import * as userSlice from "../../features/user/userSlice";

import { Header } from "../../components/header/Header";
import { List } from "../../components/list/List";

export const Home = () => {
  const dispatch = useDispatch();

  const index = useSelector(rootSlice.index);
  const user = useSelector(userSlice.user);

  const { posts, hit, control } = usePosts({ index: index, page: "home" });

  useEffect(() => {
    (index === "matters" || index === "companys") &&
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
      <Header user={user} type="home" index={index} />
      <List user={user} index={index} posts={posts} hit={hit} home />
    </div>
  );
};
