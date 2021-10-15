export const homePosts = (state, action) => {
  if (action.payload) {
    if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
      state.home[action.payload.index].posts = [
        ...state.home[action.payload.index].posts,
        ...action.payload.posts,
      ];
    } else {
      state.home[action.payload.index].posts = action.payload.posts;

      if (action.payload.index === "matters") {
        state.home.matters.control = false;
      }
    }

    state.home[action.payload.index].hit = {
      posts: action.payload.hit.posts,
      pages: action.payload.hit.pages,
      currentPage: action.payload.hit.currentPage,
    };
  }
};
