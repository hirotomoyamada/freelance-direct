export const userPosts = (state, action) => {
  if (action.payload) {
    if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
      state.user.posts = [...state.user.posts, ...action.payload.posts];
    } else {
      state.user.posts = action.payload.posts;
    }

    state.user.hit = {
      posts: action.payload.hit.posts,
      pages: action.payload.hit.pages,
      currentPage: action.payload.hit.currentPage,
    };
  }
};
