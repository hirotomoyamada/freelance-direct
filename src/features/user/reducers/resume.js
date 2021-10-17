import { functions } from "../../../firebase";

export const uploadResume = (state, action) => {
  state.user.profile.resume = action.payload;
};

export const deleteResume = (state) => {
  state.user.profile.resume = "";

  const deleteResume = functions.httpsCallable("fd-deleteResume");
  deleteResume().catch((e) => {});
};
