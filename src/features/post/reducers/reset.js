export const resetPost = (state, action) => {
  if (action.payload) {
    if (action.payload !== "post") {
      if (Object.keys(state.post).length) {
        state.post = {};
        state.bests = [];
      } else {
        Object.keys(state).forEach((type) => {
          if (type === "bests" || type === "post") {
            return;
          }
          if (type !== "home" && type !== "search" && type !== "requests") {
            if (type !== "user") {
              state[type].posts = state[type].posts.slice(0, 50);
            } else {
              state[type].posts = [];
            }
            state[type].hit.currentPage = 0;
          } else {
            Object.keys(state[type]).forEach((index) => {
              state[type][index].posts = state[type][index].posts.slice(0, 50);
              state[type][index].hit.currentPage = 0;
            });
          }
        });
      }
    }
  } else {
    state.post = {};
    state.bests = [];
  }
};

export const resetControl = (state) => {
  state.home.matters.control = true;
};
