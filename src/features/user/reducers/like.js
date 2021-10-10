import { functions } from "../../../firebase";

export const addLike = (state, action) => {
  state.user.likes = [action.payload, ...state.user.likes];

  const addLike = functions.httpsCallable("fd-addLike");
  addLike(action.payload).catch((e) => {});
};

export const removeLike = (state, action) => {
  state.user.likes = state.user.likes.filter(
    (objectID) => objectID !== action.payload
  );

  const removeLike = functions.httpsCallable("fd-removeLike");
  removeLike(action.payload).catch((e) => {});
};
