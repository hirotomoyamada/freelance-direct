import {
  ActionReducerMapBuilder,
  PayloadAction,
  ArgAction,
  ErrorAction,
} from "@reduxjs/toolkit";
import { auth } from "libs/firebase";
import { signOut } from "firebase/auth";

import { State } from "./initialState";
import { Login } from "features/user/actions";

import * as reducers from "./reducers";

export const extraReducers = (
  builder: ActionReducerMapBuilder<State>
): void => {
  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/logout"),
    (state) => {
      state.load.root = false;

      reducers.verified(state);
    }
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/pending"),
    (
      state,
      action: ArgAction<{
        pend?: boolean;
      }>
    ) => {
      if (action.type.includes("/login/")) {
        state.load.root = true;

        return;
      }

      if (action.meta.arg.pend) {
        state.load.pend = true;
      } else {
        state.load.fetch = true;
      }

      state.load.list = true;
    }
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/rejected"),
    (state, action: ErrorAction) => {
      if (action.type.includes("/login")) {
        if (
          action.error?.code.includes("cancelled") ||
          action.error?.code.includes("data-loss") ||
          action.error?.code.includes("internal")
        ) {
          void signOut(auth);
          state.announce.error = "エラーが発生しました";
        }

        if (action.error?.code.includes("invalid-argument")) {
          state.verified.email = true;
        }

        if (action.error?.code.includes("not-found")) {
          state.verified.profile = true;
        }

        if (action.error?.code.includes("permission-denied")) {
          state.verified.status = "hold";
        }

        if (action.error?.code.includes("unauthenticated")) {
          state.verified.status = "disable";
        }

        state.verified.access = false;
        state.load.root = false;

        return;
      }

      if (action.type.includes("/createProfile/")) {
        state.verified.error = action.error.message;
      }

      if (action.type.includes("/fetchUser/")) {
        state.notFound = true;
        state.announce.error = "ユーザーが存在しません";
      }

      if (action.type.includes("/fetchPost/")) {
        state.notFound = true;
        state.announce.error =
          "案件情報が削除されたか、非公開になったため取得できません";
      }

      if (action.type.includes("/uploadResume/")) {
        state.announce.error = action.error.message;
      }

      if (
        (action.type.includes("/fetchPosts/") ||
          action.type.includes("/extractPosts/") ||
          action.type.includes("/homePosts/") ||
          action.type.includes("/promotionPosts/") ||
          action.type.includes("/userPosts/")) &&
        (!state.modal.open || state.modal.type === "home")
      ) {
        state.announce.error = action.error.message;
      }

      state.load.pend = false;
      state.load.fetch = false;
      state.load.list = false;
    }
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/fulfilled"),
    (state, action: PayloadAction<Login["data"]>) => {
      if (action.type.includes("/login/")) {
        reducers.verified(state, action);

        state.load.root = false;

        return;
      }

      if (action.type.includes("/createProfile/")) {
        state.verified.email = false;
        state.verified.profile = false;
        state.verified.agree = false;
        state.verified.status = "hold";
      }

      if (action.type.includes("/uploadResume/")) {
        state.announce.success = "アップロードされました";
      }

      if (action.type.includes("/fetchPosts/")) {
        state.search.control = true;
      }

      state.load.pend = false;
      state.load.fetch = false;
      state.load.list = false;
    }
  );

  builder.addMatcher(
    (action: PayloadAction) =>
      action.type.endsWith("/editProfile") ||
      action.type.endsWith("/deleteResume") ||
      action.type.endsWith("/disableRequest") ||
      action.type.endsWith("/updateHome"),
    (state) => reducers.modal(state)
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/changeState"),
    (state) => {
      state.announce.success = "変更されました";
    }
  );
};
