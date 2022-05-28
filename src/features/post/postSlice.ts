import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { initialState, State } from "features/post/initialState";
import { Matter, Company } from "types/post";

import * as reducers from "features/post/reducers";
import { extraReducers } from "features/post/extraReducers";

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    resetPost: (state, action: PayloadAction) =>
      reducers.resetPost(state, action),
  },

  extraReducers: (builder) => extraReducers(builder),
});

export const { resetPost } = postSlice.actions;

export const posts = ({
  state,
  index,
  page,
}: {
  state: RootState;
  index?: "matters" | "companys" | "enable" | "hold" | "disable";
  page?:
    | "home"
    | "search"
    | "likes"
    | "entries"
    | "entries"
    | "histories"
    | "requests"
    | "user";
}): (Matter | undefined)[] | (Company | undefined)[] | undefined => {
  if (index) {
    if (
      (index === "matters" || index === "companys") &&
      (page === "home" || page === "search")
    ) {
      return state.post[page][index].posts;
    }

    if (index !== "matters" && index !== "companys" && page === "requests") {
      return state.post.requests[index].posts;
    }
  }

  if (
    !index &&
    (page === "likes" ||
      page === "entries" ||
      page === "histories" ||
      page === "user")
  ) {
    return state.post[page].posts;
  }
};

export const hit = ({
  state,
  index,
  page,
}: {
  state: RootState;
  index?: "matters" | "companys" | "enable" | "hold" | "disable";
  page?:
    | "home"
    | "search"
    | "likes"
    | "entries"
    | "entries"
    | "histories"
    | "requests"
    | "user";
}):
  | {
      posts: number;
      pages: number;
      currentPage: number;
    }
  | undefined => {
  if (index) {
    if (
      (index === "matters" || index === "companys") &&
      (page === "home" || page === "search")
    ) {
      return state.post[page][index].hit;
    }

    if (index !== "matters" && index !== "companys" && page === "requests") {
      return state.post.requests[index].hit;
    }
  }

  if (
    !index &&
    (page === "likes" ||
      page === "entries" ||
      page === "histories" ||
      page === "user")
  ) {
    return state.post[page].hit;
  }
};

export const control = ({
  state,
  index,
}: {
  state: RootState;
  index: "matters" | "companys";
}): boolean => state.post.home[index].control;

export const post = (state: RootState): Matter => state.post.post as Matter;
export const bests = (state: RootState): State["bests"] => state.post.bests;

export default postSlice.reducer;
