import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { extractPosts } from "../../features/post/actions/extractPosts";

import * as rootSlice from "../../features/root/rootSlice";
import * as userSlice from "../../features/user/userSlice";
import * as postSlice from "../../features/post/postSlice";

import { Header } from "../../components/header/Header";
import { List as Main } from "../../features/post/list/List";

export const List = (props) => {
  const dispatch = useDispatch();

  const index = useSelector(rootSlice.index);
  const user = useSelector(userSlice.user);
  const type = props.match.params.list;

  const posts = useSelector((state) =>
    postSlice.posts({
      state: state,
      page: type,
      index:
        type === "requests"
          ? index === "enable" || index === "hold" || index === "disable"
            ? index
            : "hold"
          : undefined,
    })
  );

  const hit = useSelector((state) =>
    postSlice.hit({
      state: state,
      page: type,
      index:
        type === "requests"
          ? index === "enable" || index === "hold" || index === "disable"
            ? index
            : "hold"
          : undefined,
    })
  );

  useEffect(() => {
    dispatch(rootSlice.handlePage(type));
  }, [dispatch, type]);

  useEffect(() => {
    // ver 1.1.0
    // ((type === "requests" && index !== "matters") ||
    //   (type !== "requests" && index === "matters")) &&
    // ------ 削除予定 ------
    type !== "requests" && index === "matters" &&
    // ------ 削除予定 ------
    !posts.length &&
      dispatch(
        extractPosts({
          index: index,
          type: type,
          objectIDs: type !== "requests" ? user[type] : user[type][index],
          fetch: posts.length && true,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, index, type, user]);

  return (
    <div>
      <Header user={user} type={type} index={index} />
      <Main user={user} index={index} type={type} posts={posts} hit={hit} />
    </div>
  );
};
