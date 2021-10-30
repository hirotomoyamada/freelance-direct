export const promotionPosts = (state, action) => {
  if (action.payload) {
    state.search.matters.posts = action.payload;
  }
};
