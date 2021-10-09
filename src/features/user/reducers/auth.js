export const login = (state, action) => {
  if (action.payload && action.payload.user) {
    state.verified.status = "enable";

    state.user.uid = action.payload.user.uid;
    state.user.icon = action.payload.user.icon;
    state.user.cover = action.payload.user.cover;
    state.user.provider = action.payload.user.provider;
    state.user.profile = action.payload.user.profile;
    state.user.agree = action.payload.user.agree;
    state.user.createAt = action.payload.user.createAt;
    state.user.updateAt = action.payload.user.updateAt;
    state.user.likes = action.payload.user.likes;
    state.user.entries = action.payload.user.entries;
    state.user.requests = action.payload.user.requests;
    state.user.history = action.payload.user.history;
    state.user.follows = action.payload.user.follows;
    state.user.home = action.payload.user.home;

    if (action.payload.user.agree === "disable") {
      state.verified.agree = true;
    }

    state.data = action.payload.data;
    state.verified.demo = action.payload.demo;
  }

  if (action.payload && action.payload.emailVerified) {
    state.verified.email = action.payload.emailVerified;
  }

  if (action.payload && action.payload.profileVerified) {
    state.verified.profile = action.payload.profileVerified;
  }

  if (action.payload && action.payload.statusVerified) {
    state.verified.status = action.payload.statusVerified;
    state.verified.access = false;
  }

  state.load = false;
};

export const logout = (state) => {
  state.user = {};
  state.load = false;
  state.verified = {
    index: false,
    email: false,
    profile: false,
    agree: false,
    status: "",
    access: false,
  };
};
