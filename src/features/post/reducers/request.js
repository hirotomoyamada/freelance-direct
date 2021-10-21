export const enableRequest = (state, action) => {
  Object.keys(state.requests).forEach((type) => {
    if (type === "enable") {
      if (state.requests[type].posts.length) {
        state.requests[type].posts = [
          action.payload,
          ...state.requests[type].posts,
        ];
      }
    } else {
      state.requests[type].posts = state.requests[type].posts.filter(
        (user) => user.uid !== action.payload.uid
      );
    }
  });
};

export const disableRequest = (state, action) => {
  Object.keys(state.requests).forEach((type) => {
    if (type === "disable") {
      if (state.requests[type].posts) {
        state.requests[type].posts = [
          action.payload,
          ...state.requests[type].posts,
        ];
      }
    } else {
      state.requests[type].posts = state.requests[type].posts.filter(
        (user) => user.uid !== action.payload.uid
      );
    }
  });
};
