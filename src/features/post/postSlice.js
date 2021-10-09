import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { promotionPosts } from "./functions/promotionPosts";
import { fetchPosts } from "./functions/fetchPosts";
import { userPosts } from "./functions/userPosts";
import { followsPosts } from "./functions/followsPosts";
import { extractPosts } from "./functions/extractPosts";
import { showPost } from "./functions/showPost";

import * as reducers from "./reducers/reducers";

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    addLike: (state, action) => reducers.addLike(state, action),
    removeLike: (state, action) => reducers.removeLike(state, action),
    addEntry: (state, action) => reducers.addEntry(state, action),
    addFollow: (state, action) => reducers.addFollow(state, action),
    removeFollow: (state, action) => reducers.removeFollow(state, action),

    handleIndex: (state, action) => reducers.handleIndex(state, action),
    handleSearch: (state, action) => reducers.handleSearch(state, action),
    handleSort: (state, action) => reducers.handleSort(state, action),
    handlePage: (state, action) => reducers.handlePage(state, action),
    handleNotFound: (state, action) => reducers.handleNotFound(state, action),
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

    builder.addCase(followsPosts.pending, (state, action) => {
      action.meta.arg.fetch && reducers.fetch(state);
      reducers.load(state);
    });
    builder.addCase(followsPosts.fulfilled, (state, action) =>
      reducers.followsPosts(state, action)
    );

    builder.addCase(extractPosts.pending, (state) => reducers.load(state));
    builder.addCase(extractPosts.fulfilled, (state, action) =>
      reducers.extractPosts(state, action)
    );

    builder.addCase(showPost.pending, (state) => reducers.load(state));
    builder.addCase(showPost.fulfilled, (state, action) =>
      reducers.showPost(state, action)
    );
  },
});

export const {
  handleIndex,
  selectPost,

  addLike,
  removeLike,
  addEntry,
  addFollow,
  removeFollow,

  handleSearch,
  handleSort,
  handlePage,
  handleNotFound,
} = postSlice.actions;

export const index = (state) => state.post.index;

export const search = (state) => state.post.search;
export const sort = (state) => state.post.sort;

export const posts = ({ state, page, index }) =>
  page && state.post.posts[page][index].posts;
export const hit = ({ state, page, index }) =>
  page && state.post.posts[page][index].hit;
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
