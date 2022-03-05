import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as rootSlice from "features/root/rootSlice";
import * as postSlice from "features/post/postSlice";

import { Matter } from "types/post";
import { Company } from "types/post";
import { RootState } from "app/store";

interface PropType {
  index: "matters" | "companys" | "enable" | "hold" | "disable";
  page:
    | "home"
    | "search"
    | "likes"
    | "entries"
    | "histories"
    | "requests"
    | "user";
}

export const usePosts = ({
  index,
  page,
}: PropType): [
  posts: Matter[] | Company[] | undefined,
  hit:
    | {
        posts: number;
        pages: number;
        currentPage: number;
      }
    | undefined,
  control: boolean
] => {
  const dispatch = useDispatch();

  const posts = useSelector((state: RootState) =>
    postSlice.posts({
      state: state,
      page: page,
      index: index === "matters" || index === "companys" ? index : "matters",
    })
  );

  const hit = useSelector((state: RootState) =>
    postSlice.hit({
      state: state,
      page: page,
      index: index === "matters" || index === "companys" ? index : "matters",
    })
  );

  const control = useSelector((state: RootState) =>
    postSlice.control({
      state: state,
      index: "matters",
    })
  );

  useEffect(() => {
    dispatch(rootSlice.handlePage(page));
  }, [dispatch, page]);

  return [posts, hit, control];
};
