export const addEntry = (state, action) => {
  if (state.posts.entries.posts.length) {
    state.posts.entries.posts = [action.payload, ...state.posts.entries.posts];
  }
};
