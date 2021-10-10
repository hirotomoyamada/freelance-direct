export const fetchUser = (state, action) => {
  if (!action.payload.notFound) {
    state.selectUser = action.payload;
  } else {
    state.notFound = action.payload.notFound;
  }
};
