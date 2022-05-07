import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePosts } from "hooks/usePosts";
import { useParams } from "react-router-dom";
import { homePosts } from "features/post/actions";

import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";

import { Header } from "components/header/Header";
import { List } from "components/list/List";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams<{ index: "matters" | "companys" }>();
  const rootIndex = useSelector(rootSlice.index);
  const index = params.index ? params.index : rootIndex;
  const user = useSelector(userSlice.user);

  const [posts, hit, control] = usePosts({ index: index, page: "home" });

  useEffect(() => {
    if (params.index) {
      dispatch(rootSlice.handleIndex(params.index));
    }
  }, [params.index]);

  useEffect(() => {
    (!posts?.length || control) &&
      (index === "matters" || index === "companys") &&
      dispatch(
        homePosts({
          index: index,
          follows:
            index === "matters" ? [user.uid, ...user.home] : user.follows,
          fetch: posts?.length ? true : false,
        })
      );
  }, [dispatch, index, user.home]);

  return (
    <div>
      <Header user={user} type="home" index={index} />
      <List user={user} index={index} posts={posts} hit={hit} home />
    </div>
  );
};
