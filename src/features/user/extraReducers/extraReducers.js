import { login } from "../actions/login";
import { fetchUser } from "../actions/fetchUser";
import { uploadResume } from "../actions/uploadResume";

import * as reducers from "../reducers/reducers";

export const extraReducers = (builder) => {
  builder.addCase(login.fulfilled, (state, action) =>
    reducers.login(state, action)
  );
  builder.addCase(fetchUser.fulfilled, (state, action) =>
    reducers.fetchUser(state, action)
  );
  builder.addCase(uploadResume.fulfilled, (state, action) =>
    reducers.uploadResume(state, action)
  );

  builder.addMatcher(
    (action) => action.type.endsWith("/fetchPost/fulfilled"),
    (state, action) => reducers.addHistory(state, action)
  );
};
