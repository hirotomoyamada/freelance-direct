import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import * as reducers from "./reducers/reducers";
import { extraReducers } from "./extraReducers/extraReducers";

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout: () => {
      return initialState;
    },

    editProfile: (state, action) => reducers.editProfile(state, action),
    enableAgree: (state, action) => reducers.enableAgree(state, action),
    addProvider: (state, action) => reducers.addProvider(state, action),
    changeEmail: (state, action) => reducers.changeEmail(state, action),
    changeState: (state, action) => reducers.changeState(state, action),

    deleteResume: (state) => reducers.deleteResume(state),

    addLike: (state, action) => reducers.addLike(state, action),
    removeLike: (state, action) => reducers.removeLike(state, action),
    addEntry: (state, action) => reducers.addEntry(state, action),
    addFollow: (state, action) => reducers.addFollow(state, action),
    removeFollow: (state, action) => reducers.removeFollow(state, action),
    enableRequest: (state, action) => reducers.enableRequest(state, action),
    disableRequest: (state, action) => reducers.disableRequest(state, action),
    updateHome: (state, action) => reducers.updateHome(state, action),
  },

  extraReducers: (builder) => extraReducers(builder),
});

export const {
  logout,

  editProfile,
  enableAgree,
  addProvider,
  changeEmail,
  changeState,

  deleteResume,

  addLike,
  removeLike,
  addEntry,
  addFollow,
  removeFollow,
  enableRequest,
  disableRequest,
  updateHome,
} = userSlice.actions;

export const user = (state) => state.user.user;
export const selectUser = (state) => state.user.selectUser;

export default userSlice.reducer;
