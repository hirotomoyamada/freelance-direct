export const addLike = (state, action) => {
  if (state.likes.posts.length) {
    state.likes.posts = [action.payload, ...state.likes.posts];
  }
};

export const removeLike = (state, action) => {
  state.likes.posts = state.likes.posts.filter(
    (post) => post.objectID !== action.payload.objectID
  );
};
