import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

import { login } from "./actions/login";
import { fetchUser } from "./actions/fetchUser";

import * as reducers from "./reducers/reducers";
import { uploadResume } from "./actions/uploadResume";

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout: () => {
      return initialState;
    },

    editProfile: (state, action) => reducers.editProfile(state, action),
    enableAgree: (state) => reducers.enableAgree(state),
    addProvider: (state, action) => reducers.addProvider(state, action),
    changeEmail: (state, action) => reducers.changeEmail(state, action),

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

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) =>
      reducers.login(state, action)
    );
    builder.addCase(fetchUser.fulfilled, (state, action) =>
      reducers.fetchUser(state, action)
    );
    builder.addCase(uploadResume.fulfilled, (state, action) =>
      reducers.uploadResume(state, action)
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/fetchPost/fulfilled"),
      (state, action) => reducers.addHistory(state, action)
    );
  },
});

export const {
  logout,

  editProfile,
  enableAgree,
  addProvider,
  changeEmail,

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
