import { functions } from "../../../firebase";

export const addLike = (state, action) => {
  state.user.likes = [action.payload.objectID, ...state.user.likes];

  const addLike = functions.httpsCallable("fd-addLike");
  addLike(action.payload.objectID).catch((e) => {});
};

export const removeLike = (state, action) => {
  state.user.likes = state.user.likes.filter(
    (objectID) => objectID !== action.payload.objectID
  );

  const removeLike = functions.httpsCallable("fd-removeLike");
  removeLike(action.payload.objectID).catch((e) => {});
};
