export const fetchPost = (state, action) => {
  if (action.payload) {
    state.post = action.payload.post;
    state.bests = action.payload.bests;

    if (state.histories.posts.length) {
      state.histories.posts = [
        action.payload.post,
        ...state.histories.posts.filter(
          (post) => post.objectID !== action.payload.post.objectID
        ),
      ];
    }
  }
};
