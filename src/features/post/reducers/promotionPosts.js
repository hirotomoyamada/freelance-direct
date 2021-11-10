export const promotionPosts = (state, action) => {
  if (!action.payload.error) {
    state.search.matters.posts = action.payload;
  }
};
