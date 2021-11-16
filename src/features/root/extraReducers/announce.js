export const announce = (builder) => {
  builder.addMatcher(
    (action) => action.type.endsWith("/changeState"),
    (state) => {
      state.announce.success = "変更されました";
    }
  );

  builder.addMatcher(
    (action) => action.type.endsWith("/uploadResume/fulfilled"),
    (state, action) => {
      if (!action.payload.error) {
        state.announce.success = "アップロードされました";
      }

      if (action.payload.error) {
        state.announce.error = action.payload.error;
      }
    }
  );

  builder.addMatcher(
    (action) =>
      action.type.endsWith("/fetchPosts/fulfilled") ||
      action.type.endsWith("/extractPosts/fulfilled") ||
      action.type.endsWith("/homePosts/fulfilled") ||
      action.type.endsWith("/promotionPosts/fulfilled") ||
      action.type.endsWith("/userPosts/fulfilled"),
    (state, action) => {
      if (
        action.payload.error &&
        (!state.modal.open || state.modal.type === "home")
      ) {
        state.announce.error = action.payload.error;
      }
    }
  );
};
