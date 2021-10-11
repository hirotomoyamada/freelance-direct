import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { promotionPosts } from "./functions/promotionPosts";
import { fetchPosts } from "./functions/fetchPosts";
import { userPosts } from "./functions/userPosts";
import { homePosts } from "./functions/homePosts";
import { extractPosts } from "./functions/extractPosts";
import { fetchPost } from "./functions/fetchPost";

import * as reducers from "./reducers/reducers";

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    resetPost: (state, action) => reducers.resetPost(state, action),

    handleIndex: (state, action) => reducers.handleIndex(state, action),
    handleSearch: (state, action) => reducers.handleSearch(state, action),
    handleSort: (state, action) => reducers.handleSort(state, action),
    handlePage: (state, action) => reducers.handlePage(state, action),
    handleNotFound: (state, action) => reducers.handleNotFound(state, action),
    handleControl: (state) => reducers.handleControl(state),
  },

  extraReducers: (builder) => {
    builder.addCase(promotionPosts.pending, (state) => reducers.load(state));
    builder.addCase(promotionPosts.fulfilled, (state, action) =>
      reducers.promotionPosts(state, action)
    );

    builder.addCase(fetchPosts.pending, (state, action) => {
      action.meta.arg.fetch && reducers.fetch(state);
      reducers.load(state);
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) =>
      reducers.fetchPosts(state, action)
    );

    builder.addCase(userPosts.pending, (state) => reducers.load(state));
    builder.addCase(userPosts.fulfilled, (state, action) =>
      reducers.userPosts(state, action)
    );

    builder.addCase(homePosts.pending, (state, action) => {
      action.meta.arg.fetch && reducers.fetch(state);
      reducers.load(state);
    });
    builder.addCase(homePosts.fulfilled, (state, action) =>
      reducers.homePosts(state, action)
    );

    builder.addCase(extractPosts.pending, (state) => reducers.load(state));
    builder.addCase(extractPosts.fulfilled, (state, action) =>
      reducers.extractPosts(state, action)
    );

    builder.addCase(fetchPost.pending, (state) => reducers.load(state));
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
  },
});

export const {
  resetPost,

  handleIndex,
  handleSearch,
  handleSort,
  handlePage,
  handleNotFound,
  handleControl,
} = postSlice.actions;

export const index = (state) => state.post.index;

export const search = (state) => state.post.search;

export const posts = ({ state, page, index }) =>
  index
    ? state.post.posts[page]?.[index]?.posts
    : state.post.posts[page]?.posts;
export const hit = ({ state, page, index }) =>
  index ? state.post.posts[page]?.[index]?.hit : state.post.posts[page]?.hit;
export const control = ({ state, index }) =>
  state.post.posts.home[index].control;

export const post = (state) => state.post.post;
export const bests = (state) => state.post.posts.bests;

export const page = (state) => state.post.page;
export const modal = (state) => state.post.modal;

export const load = (state) => state.post.load;
export const fetch = (state) => state.post.fetch;
export const notFound = (state) => state.post.notFound;

export default postSlice.reducer;
