import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import * as reducers from "./reducers/reducers";
import { extraReducers } from "./extraReducers/extraReducers";

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    resetPost: (state, action) => reducers.resetPost(state, action),
  },

  extraReducers: (builder) => extraReducers(builder),
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
