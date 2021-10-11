export const fetchPost = (state, action) => {
  if (!action.payload.notFound) {
    state.post = action.payload.post;
    state.bests = action.payload.bests;
  } else {
    state.notFound = action.payload.notFound;
  }
};
