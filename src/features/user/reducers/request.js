import { functions } from "../../../firebase";

export const enableRequest = (state, action) => {
  Object.keys(state.user.requests).forEach((type) => {
    if (type === "enable") {
      state.user.requests[type] = [
        action.payload.uid,
        ...state.user.requests[type],
      ];
    } else {
      state.user.requests[type] = state.user.requests[type].filter(
        (uid) => uid !== action.payload.uid
      );
    }
  });

  const enableRequest = functions.httpsCallable("fd-enableRequest");
  enableRequest(action.payload.uid).catch((e) => {});
};

export const disableRequest = (state, action) => {
  Object.keys(state.user.requests).forEach((type) => {
    if (type === "disable") {
      state.user.requests[type] = [
        action.payload.uid,
        ...state.user.requests[type],
      ];
    } else {
      state.user.requests[type] = state.user.requests[type].filter(
        (uid) => uid !== action.payload.uid
      );
    }
  });

  const disableRequest = functions.httpsCallable("fd-disableRequest");
  disableRequest(action.payload.uid).catch((e) => {});
};
