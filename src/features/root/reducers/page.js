export const page = (state, action) => {
  state.page = action.payload;

  if (action.payload === "requests") {
    state.index = "hold";
  } else if (
    state.index === "enable" ||
    state.index === "hold" ||
    state.index === "disable"
  ) {
    state.index = "matters";
  }
};
