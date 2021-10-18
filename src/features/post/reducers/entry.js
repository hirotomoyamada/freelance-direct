export const addEntry = (state, action) => {
  if (state.entries.posts.length) {
    state.entries.posts = [action.payload, ...state.entries.posts];
  }
};
