import * as reducers from "../reducers/reducers";

export const user = (builder) => {
  builder.addMatcher(
    (action) => action.type.endsWith("/addLike"),
    (state, action) => reducers.addLike(state, action)
  );
  builder.addMatcher(
    (action) => action.type.endsWith("/removeLike"),
    (state, action) => reducers.removeLike(state, action)
  );

  builder.addMatcher(
    (action) => action.type.endsWith("/addEntry"),
    (state, action) => reducers.addEntry(state, action)
  );

  builder.addMatcher(
    (action) => action.type.endsWith("/addFollow"),
    (state, action) => reducers.addFollow(state, action)
  );
  builder.addMatcher(
    (action) => action.type.endsWith("/removeFollow"),
    (state, action) => reducers.removeFollow(state, action)
  );

  builder.addMatcher(
    (action) => action.type.endsWith("/enableRequest"),
    (state, action) => reducers.enableRequest(state, action)
  );
  builder.addMatcher(
    (action) => action.type.endsWith("/disableRequest"),
    (state, action) => reducers.disableRequest(state, action)
  );

  builder.addMatcher(
    (action) => action.type.endsWith("/updateHome"),
    (state) => reducers.resetControl(state)
  );
};
