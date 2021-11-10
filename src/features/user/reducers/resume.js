import { functions } from "../../../firebase";

export const uploadResume = (state, action) => {
  if (!action.payload.error) {
    state.user.resume.url = action.payload;
  }
};

export const deleteResume = (state) => {
  state.user.resume.key = "";
  state.user.resume.url = "";

  const deleteResume = functions.httpsCallable("fd-deleteResume");
  deleteResume().catch((e) => {});
};
