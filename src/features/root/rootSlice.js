import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import * as reducers from "./reducers/reducers";
import { extraReducers } from "./extraReducers/extraReducers";

export const rootSlice = createSlice({
  name: "root",
  initialState,

  reducers: {
    handleIndex: (state, action) => reducers.index(state, action),
    handleSearch: (state, action) => reducers.search(state, action),
    handlePage: (state, action) => reducers.page(state, action),
    handleMenu: (state, action) => reducers.menu(state, action),
    handleModal: (state, action) => reducers.modal(state, action),
    handleAnnounce: (state, action) => reducers.announce(state, action),
    handleNotFound: (state, action) => reducers.notFound(state, action),
    handleVerified: (state, action) => reducers.verified(state, action),
  },

  extraReducers: (builder) => extraReducers(builder),
});

export const {
  handleIndex,
  handleSearch,
  handlePage,
  handleMenu,
  handleModal,
  handleAnnounce,
  handleNotFound,
  handleVerified,
} = rootSlice.actions;

export const index = (state) => state.root.index;
export const page = (state) => state.root.page;
export const menu = (state) => state.root.menu;
export const search = (state) => state.root.search;
export const modal = (state) => state.root.modal;
export const announce = (state) => state.root.announce;
export const notFound = (state) => state.root.notFound;
export const data = (state) => state.root.data;
export const verified = (state) => state.root.verified;
export const load = (state) => state.root.load;

export default rootSlice.reducer;
