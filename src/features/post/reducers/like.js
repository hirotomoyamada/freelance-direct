export const addLike = (state, action) => {
  if (state.posts.likes.posts.length) {
    state.posts.likes.posts = [
      action.payload,
      ...state.posts.likes.posts,
    ];
  }
};

export const removeLike = (state, action) => {
  state.posts.likes.posts = state.posts.likes.posts.filter((post) => post.objectID !== action.payload.objectID);
};
