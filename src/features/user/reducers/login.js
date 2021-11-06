export const login = (state, action) => {
  if (action.payload && action.payload.user) {
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
    state.user.histories = action.payload.user.histories;
    state.user.resume = action.payload.user.resume;
    state.user.follows = action.payload.user.follows;
    state.user.home = action.payload.user.home;
  }
};
