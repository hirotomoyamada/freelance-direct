import { functions } from "../../../firebase";

export const changeEmail = (state, action) => {
  state.user.profile.email = action.payload;

  const changeEmail = functions.httpsCallable("fd-changeEmail");
  changeEmail(action.payload).catch((e) => {});
};

export const changeState = (state, action) => {
  state.user.profile.state = action.payload;

  const changeState = functions.httpsCallable("fd-changeState");
  changeState(action.payload).catch((e) => {});
};
