import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

import { initialState } from "features/user/initialState";

import * as reducers from "features/user/reducers";
import { extraReducers } from "features/user/extraReducers";

import { User } from "types/user";
import { Matter, Company } from "types/post";

export interface Profile {
  icon: string;
  cover: string;
  nickName: string;
  position: string;
  body: string | null;
  age: number;
  sex: string;
  location: string;
  period: {
    year: number | null;
    month: number | null;
  };
  costs: {
    display: "public" | "private";
    type: string;
    min: number | null;
    max: number | null;
  };
  handles: string[];
  tools: string[];
  skills: string[];
  urls: string[];
  clothes: string | null;
  working: number | null;
  resident: string | null;
  uid?: string;
}

export interface Provider {
  provider: string;
  email?: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout: () => reducers.logout(),
    editProfile: (state, action: PayloadAction<Profile>) =>
      reducers.editProfile(state, action),
    addProvider: (state, action: PayloadAction<Provider>) =>
      reducers.addProvider(state, action),
    changeEmail: (state, action: PayloadAction<string>) =>
      reducers.changeEmail(state, action),
    changeState: (state, action: PayloadAction<string>) =>
      reducers.changeState(state, action),
    deleteResume: (state) => reducers.deleteResume(state),
    addLike: (state, action: PayloadAction<Matter>) =>
      reducers.addLike(state, action),
    removeLike: (state, action: PayloadAction<Matter>) =>
      reducers.removeLike(state, action),
    addEntry: (state, action: PayloadAction<Matter>) =>
      reducers.addEntry(state, action),
    addFollow: (state, action: PayloadAction<Company>) =>
      reducers.addFollow(state, action),
    removeFollow: (state, action: PayloadAction<Company>) =>
      reducers.removeFollow(state, action),
    enableRequest: (state, action: PayloadAction<Company>) =>
      reducers.enableRequest(state, action),
    disableRequest: (state, action: PayloadAction<Company>) =>
      reducers.disableRequest(state, action),
    updateHome: (state, action: PayloadAction<string[]>) =>
      reducers.updateHome(state, action),
  },

  extraReducers: (builder) => extraReducers(builder),
});

export const {
  logout,
  editProfile,
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

export const user = (state: RootState): User => state.user.user as User;
export const selectUser = (state: RootState): Company =>
  state.user.selectUser as Company;

export default userSlice.reducer;
