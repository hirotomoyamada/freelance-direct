import { functions } from "../../../firebase";

export const uploadResume = (state, action) => {};

export const deleteResume = (state) => {
  const deleteResume = functions.httpsCallable("fd-deleteFile");
  deleteResume().catch((e) => {});
};
