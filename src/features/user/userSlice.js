import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { login } from "./functions/login";
import { createProfile } from "./functions/createProfile";
import { showUser } from "./functions/showUser";

import * as reducers from "./reducers/reducers";

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout: (state) => reducers.logout(state),

    editProfile: (state, action) => reducers.editProfile(state, action),
    enableAgree: (state) => reducers.enableAgree(state),
    addProvider: (state, action) => reducers.addProvider(state, action),
    changeEmail: (state, action) => reducers.changeEmail(state, action),

    addLike: (state, action) => reducers.addLike(state, action),
    removeLike: (state, action) => reducers.removeLike(state, action),
    addEntry: (state, action) => reducers.addEntry(state, action),
    addFollow: (state, action) => reducers.addFollow(state, action),
    removeFollow: (state, action) => reducers.removeFollow(state, action),

    handleModal: (state, action) => reducers.handleModal(state, action),
    handleMenu: (state, action) => reducers.handleMenu(state, action),
    handleAnnounce: (state, action) => reducers.handleAnnounce(state, action),
    handleNotFound: (state, action) => reducers.handleNotFound(state, action),
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => reducers.load(state));
    builder.addCase(login.fulfilled, (state, action) =>
      reducers.login(state, action)
    );
    builder.addCase(createProfile.pending, (state) => reducers.load(state));
    builder.addCase(createProfile.fulfilled, (state) =>
      reducers.createProfile(state)
    );
    builder.addCase(showUser.fulfilled, (state, action) =>
      reducers.showUser(state, action)
    );
  },
});

export const {
  logout,

  editProfile,
  enableAgree,
  addProvider,
  changeEmail,

  addLike,
  removeLike,
  addEntry,
  addFollow,
  removeFollow,

  handleModal,
  handleMenu,
  handleAnnounce,
  handleNotFound,
} = userSlice.actions;

export const user = (state) => state.user.user;
export const selectUser = (state) => state.user.selectUser;
export const data = (state) => state.user.data;
export const verified = (state) => state.user.verified;
export const load = (state) => state.user.load;
export const modal = (state) => state.user.modal;
export const menu = (state) => state.user.menu;
export const announce = (state) => state.user.announce;
export const notFound = (state) => state.user.notFound;

export default userSlice.reducer;
