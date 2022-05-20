import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { State } from "features/user/initialState";
import { FetchPost } from "features/post/actions";
import { User } from "types/user";

import * as actions from "features/user/actions";
import * as reducers from "features/user/reducers";

export const extraReducers = (
  builder: ActionReducerMapBuilder<State>
): void => {
  builder.addCase(actions.login.fulfilled, (state, action) =>
    reducers.login(state, action)
  );
  builder.addCase(actions.editProfile.fulfilled, (state, action) =>
    reducers.editProfile(state, action)
  );
  builder.addCase(actions.fetchUser.fulfilled, (state, action) =>
    reducers.fetchUser(state, action)
  );
  builder.addCase(actions.uploadResume.fulfilled, (state, action) =>
    reducers.uploadResume(state, action)
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/fetchPost/fulfilled"),
    (state, action: PayloadAction<FetchPost["data"]>) =>
      reducers.addHistory(state, action)
  );

  builder.addMatcher(
    (action: PayloadAction) => action.type.endsWith("/enableAgree"),
    (state) => {
      (state.user as User).agree = "enalble";
    }
  );
};
