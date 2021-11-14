import * as reducers from "../reducers/reducers";

export const modal = (builder) => {
  builder.addMatcher(
    (action) =>
      action.type.endsWith("/editProfile") ||
      action.type.endsWith("/deleteResume") ||
      action.type.endsWith("/disableRequest") ||
      action.type.endsWith("/updateHome"),
    (state) => reducers.modal(state)
  );

  builder.addMatcher(
    (action) => action.type.endsWith("/enableAgree"),
    (state, action) => {
      state.verified.agree = false;

      if (action.payload.profile?.nickName) {
        reducers.modal(state);
      } else {
        state.modal.type = "profile";
      }
    }
  );
};
