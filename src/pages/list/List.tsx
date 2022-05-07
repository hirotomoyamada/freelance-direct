import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";

import { extractPosts } from "features/post/actions";

import * as rootSlice from "features/root/rootSlice";
import * as userSlice from "features/user/userSlice";
import * as postSlice from "features/post/postSlice";

import { Header } from "components/header/Header";
import { List as Main } from "components/list/List";
import { RootState } from "app/store";

export const List: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const index = useSelector(rootSlice.index);
  const user = useSelector(userSlice.user);
  const { list: type } = useParams<{
    list: "likes" | "entries" | "requests" | "histories";
  }>();

  const posts = useSelector((state: RootState) =>
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

  const hit = useSelector((state: RootState) =>
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
    type === "likes" ||
    type === "requests" ||
    type === "histories" ||
    type === "entries"
      ? dispatch(rootSlice.handlePage(type))
      : navigate("/");
  }, [dispatch, history, type]);

  useEffect(() => {
    type &&
      ((type === "requests" && index !== "matters") ||
        (type !== "requests" && index === "matters")) &&
      !posts?.length &&
      dispatch(
        extractPosts({
          index: index,
          type: type,
          objectIDs:
            type !== "requests"
              ? user[type]
              : user[type][index as "enable" | "hold" | "disable"],
          fetch: posts?.length ? true : false,
        })
      );
  }, [dispatch, index, type, user]);

  return (
    <div>
      <Header user={user} type={type} index={index} />
      <Main user={user} index={index} type={type} posts={posts} hit={hit} />
    </div>
  );
};
