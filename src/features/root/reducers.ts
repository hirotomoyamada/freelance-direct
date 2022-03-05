import { PayloadAction } from "@reduxjs/toolkit";
import { functions } from "libs/firebase";
import { httpsCallable, HttpsCallable } from "firebase/functions";

import { State } from "features/root/initialState";
import { User } from "types/user";

import { Announce, Modal, Search } from "features/root/rootSlice";
import { Login } from "features/user/actions";

export const index = (
  state: State,
  action: PayloadAction<"matters" | "companys" | "enable" | "hold" | "disable">
): void => {
  state.index = action.payload;

  if (state.page !== "post") {
    state.search.value = null;
    state.search.target = null;
    state.search.type = null;
    state.search.control = false;
  }
};

export const page = (state: State, action: PayloadAction<string>): void => {
  state.page = action.payload;

  if (action.payload === "requests") {
    state.index = "hold";
  }

  if (
    action.payload !== "requests" &&
    (state.index === "enable" ||
      state.index === "hold" ||
      state.index === "disable" ||
      action.payload === "likes" ||
      action.payload === "histories" ||
      action.payload === "entries")
  ) {
    state.index = "matters";
  }
};

export const search = (
  state: State,
  action: PayloadAction<Search | undefined>
): void => {
  if (!action?.payload) {
    state.search.value = null;
    state.search.control = false;
  }

  if (action?.payload?.target) {
    state.search.target = action.payload.target;
    state.search.control = false;
  }

  if (action?.payload?.type) {
    state.search.type = action.payload.type;
    state.search.control = false;
  }

  if (action?.payload?.value) {
    state.search.value = action.payload.value;
    state.search.control = false;
  }

  if (action?.payload?.control) {
    state.search.control = action.payload.control;
  }
};

export const menu = (
  state: State,
  action: PayloadAction<"open" | "close" | "reset">
): void => {
  if (action.payload === "open") {
    state.menu.display = true;
    state.menu.control = true;
  }

  if (action.payload === "close") {
    state.menu.display = false;
  }

  if (action.payload === "reset") {
    state.menu.display = false;
    state.menu.control = false;
  }
};

export const modal = (
  state: State,
  action?: PayloadAction<Modal | undefined>
): void => {
  if (action?.payload) {
    state.modal.type = action.payload.type;
    state.modal.text = action.payload.text;
    state.modal.close = action.payload.close;
    state.modal.delete = action.payload.delete;
    state.modal.open = true;
  } else {
    state.modal.type = null;
    state.modal.text = undefined;
    state.modal.close = undefined;
    state.modal.delete = undefined;
    state.modal.open = false;
  }
};

export const announce = (
  state: State,
  action: PayloadAction<Announce | undefined>
): void => {
  if (action.payload?.success || action.payload?.error) {
    state.announce.success = action.payload.success;
    state.announce.error = action.payload.error;
  } else {
    state.announce = {
      success: undefined,
      error: undefined,
    };
  }
};

export const notFound = (
  state: State,
  action: PayloadAction<boolean>
): void => {
  state.notFound = action.payload;
  state.load.root = false;
};

export const verified = (
  state: State,
  action?: PayloadAction<Login["data"]>
): void => {
  if (action?.payload) {
    if (action.payload.user) {
      state.verified.status = "enable";

      if (!action.payload.user.profile.nickName) {
        state.modal.type = "profile";
        state.modal.open = true;
      }

      if (action.payload.user.agree === "disable") {
        state.verified.agree = true;

        state.modal.type = "agree";
        state.modal.open = true;
      }

      if (action.payload && state.verified.demo) {
        state.verified.demo = action.payload.demo;
        state.modal.type = "demo";
        state.modal.open = true;
      }

      state.data = action.payload.data;
    }
  } else {
    state.verified = {
      index: false,
      email: false,
      profile: false,
      agree: false,
      status: "promo",
      access: false,
      demo: false,
      error: null,
    };
  }
  state.load.root = false;
};

export const agree = (state: State, action: PayloadAction<User>): void => {
  state.verified.agree = false;

  if (action.payload.profile.nickName) {
    state.modal.open = false;
  } else {
    state.modal.type = "profile";
  }

  const enableAgree: HttpsCallable = httpsCallable(functions, "fd-enableAgree");

  void enableAgree().then(() => {
    window.location.reload();
  });
};
