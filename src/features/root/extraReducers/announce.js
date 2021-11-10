export const announce = (builder) => {
  builder.addMatcher(
    (action) => action.type.endsWith("/changeState"),
    (state) => {
      state.announce.success = "変更されました";
    }
  );

  builder.addMatcher(
    (action) => action.type.endsWith("/addProvider"),
    (state) => {
      state.announce.success = "認証されました";
    }
  );
};
