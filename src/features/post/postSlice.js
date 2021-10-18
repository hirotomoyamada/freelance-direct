import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { promotionPosts } from "./actions/promotionPosts";
import { fetchPosts } from "./actions/fetchPosts";
import { userPosts } from "./actions/userPosts";
import { homePosts } from "./actions/homePosts";
import { extractPosts } from "./actions/extractPosts";
import { fetchPost } from "./actions/fetchPost";

import * as reducers from "./reducers/reducers";

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    resetPost: (state, action) => reducers.resetPost(state, action),
  },

  extraReducers: (builder) => {
    builder.addCase(promotionPosts.fulfilled, (state, action) =>
      reducers.promotionPosts(state, action)
    );

    builder.addCase(fetchPosts.fulfilled, (state, action) =>
      reducers.fetchPosts(state, action)
    );

    builder.addCase(userPosts.fulfilled, (state, action) =>
      reducers.userPosts(state, action)
    );

    builder.addCase(homePosts.fulfilled, (state, action) =>
      reducers.homePosts(state, action)
    );

    builder.addCase(extractPosts.fulfilled, (state, action) =>
      reducers.extractPosts(state, action)
    );

    builder.addCase(fetchPost.fulfilled, (state, action) =>
      reducers.fetchPost(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/addLike"),
      (state, action) => reducers.addLike(state, action)
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/removeLike"),
      (state, action) => reducers.removeLike(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/addEntry"),
      (state, action) => reducers.addEntry(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/addFollow"),
      (state, action) => reducers.addFollow(state, action)
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/removeFollow"),
      (state, action) => reducers.removeFollow(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/updateHome"),
      (state) => reducers.resetControl(state)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/handleIndex"),
      (state, action) => reducers.resetPost(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/handlePage"),
      (state, action) => reducers.resetPost(state, action)
    );
  },
});

export const { resetPost } = postSlice.actions;

export const posts = ({ state, page, index }) =>
  index ? state.post[page]?.[index]?.posts : state.post[page]?.posts;
export const hit = ({ state, page, index }) =>
  index ? state.post[page]?.[index]?.hit : state.post[page]?.hit;
export const control = ({ state, index }) => state.post.home[index].control;

export const post = (state) => state.post.post;
export const bests = (state) => state.post.bests;

export default postSlice.reducer;
