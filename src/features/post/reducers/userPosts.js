export const userPosts = (state, action) => {
  if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
    state.posts.user.posts = [
      ...state.posts.user.posts,
      ...action.payload.posts,
    ];
  } else {
    state.posts.user.posts = action.payload.posts;
  }

  state.posts.user.hit = {
    posts: action.payload.hit.posts,
    pages: action.payload.hit.pages,
    currentPage: action.payload.hit.currentPage,
  };

  state.load = false;
};
