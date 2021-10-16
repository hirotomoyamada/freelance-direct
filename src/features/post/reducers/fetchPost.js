export const fetchPost = (state, action) => {
  if (action.payload) {
    state.post = action.payload.post;
    state.bests = action.payload.bests;

    if (state.history.posts.length) {
      state.history.posts = [
        action.payload.post,
        ...state.history.posts.filter(
          (post) => post.objectID !== action.payload.post.objectID
        ),
      ];
    }
  }
};
