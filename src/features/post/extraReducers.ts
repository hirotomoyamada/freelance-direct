import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";

import { State } from "features/post/initialState";

import * as actions from "features/post/actions";
import * as reducers from "features/post/reducers";
import { Matter, Company } from "types/post";

export const extraReducers = (
  builder: ActionReducerMapBuilder<State>
): void => {
  builder.addCase(actions.promotionPosts.fulfilled, (state, action) =>
    reducers.promotionPosts(state, action)
  );

  builder.addCase(actions.fetchPosts.fulfilled, (state, action) =>
    reducers.fetchPosts(state, action)
  );

  builder.addCase(actions.userPosts.fulfilled, (state, action) =>
    reducers.userPosts(state, action)
  );

  builder.addCase(actions.homePosts.fulfilled, (state, action) =>
    reducers.homePosts(state, action)
  );

  builder.addCase(actions.extractPosts.fulfilled, (state, action) =>
    reducers.extractPosts(state, action)
  );

  builder.addCase(actions.fetchPost.fulfilled, (state, action) =>
    reducers.fetchPost(state, action)
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/handleIndex"),
    (state, action: PayloadAction) => reducers.resetPost(state, action)
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/handlePage"),
    (state, action: PayloadAction) => reducers.resetPost(state, action)
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/addLike"),
    (state, action: PayloadAction<Matter>) => reducers.addLike(state, action)
  );
  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/removeLike"),
    (state, action: PayloadAction<Matter>) => reducers.removeLike(state, action)
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/addEntry"),
    (state, action: PayloadAction<Matter>) => reducers.addEntry(state, action)
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/addFollow"),
    (state, action: PayloadAction<Company>) => reducers.addFollow(state, action)
  );
  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/removeFollow"),
    (state, action: PayloadAction<Company>) =>
      reducers.removeFollow(state, action)
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/enableRequest"),
    (state, action: PayloadAction<Company>) =>
      reducers.enableRequest(state, action)
  );
  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/disableRequest"),
    (state, action: PayloadAction<Company>) =>
      reducers.disableRequest(state, action)
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/updateHome"),
    (state) => reducers.resetControl(state)
  );
};
