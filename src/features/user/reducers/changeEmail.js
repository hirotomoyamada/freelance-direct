import { functions } from "../../../firebase";

export const changeEmail = (state, action) => {
  state.user.profile.email = action.payload;

  const changeEmail = functions.httpsCallable("fd-changeEmail");
  changeEmail({ email: action.payload }).catch((e) => {});
};
