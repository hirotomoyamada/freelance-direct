import { functions } from "../../../firebase";

export const addEntry = (state, action) => {
  state.user.entries = [action.payload, ...state.user.entries];

  const addEntry = functions.httpsCallable("fd-addEntry");
  addEntry(action.payload).catch((e) => {});
};
