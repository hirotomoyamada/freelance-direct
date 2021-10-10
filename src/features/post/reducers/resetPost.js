export const resetPost = (state, action) => {
  if (action.payload === "user") {
    state.posts.user.posts = [];
  } else {
    state.post = {};
  }
};
