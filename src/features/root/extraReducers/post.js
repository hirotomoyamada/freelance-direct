export const post = (builder) => {
  builder.addMatcher(
    (action) => action.type.endsWith("/fetchPosts/fulfilled"),
    (state) => {
      state.search.control = true;
    }
  );
};
