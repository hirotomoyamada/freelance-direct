import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePosts } from "./hook/usePosts";

import { fetchPosts } from "./features/post/actions/fetchPosts";

import * as rootSlice from "./features/root/rootSlice";
import * as userSlice from "./features/user/userSlice";

import { Header } from "./components/header/Header";
import { List } from "./features/post/list/List";

export const Search = () => {
  const dispatch = useDispatch();

  const index = useSelector(rootSlice.index);
  const search = useSelector(rootSlice.search);
  const user = useSelector(userSlice.user);

  const { posts, hit } = usePosts({ index: index, page: "search" });

  useEffect(() => {
    // (index === "matters" || index === "companys") && // ver 1.1.0
    // ------ 削除予定 ------
    index === "matters" &&
    // ------ 削除予定 ------
      !search.control &&
      dispatch(
        fetchPosts({
          index: index,
          value: search.value,
          target: search.target,
          type: search.type,
          fetch: posts?.length && true,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dispatch,
    index,
    search.control,
    search.target,
    search.type,
    search.value,
  ]);

  return (
    <div>
      <Header user={user} type="search" index={index} />
      <List user={user} index={index} posts={posts} hit={hit} search={search} />
    </div>
  );
};
