import { functions } from "../../../firebase";

export const updateHome = (state, action) => {
  state.user.home = action.payload;

  const updateHome = functions.httpsCallable("fd-updateHome");
  updateHome(action.payload).catch((e) => {});
};
