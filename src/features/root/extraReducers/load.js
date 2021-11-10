export const load = (builder) => {
  builder.addMatcher(
    (action) => action.type.endsWith("/pending"),
    (state, action) => {
      state.load.fetch = action.meta.arg.fetch ? true : false;
      state.load.list = true;
    }
  );

  builder.addMatcher(
    (action) => action.type.endsWith("/rejected"),
    (state) => {
      state.notFound = true;

      state.load.fetch = false;
      state.load.list = false;
    }
  );

  builder.addMatcher(
    (action) => action.type.endsWith("/fulfilled"),
    (state) => {
      state.load.fetch = false;
      state.load.list = false;
    }
  );
};
