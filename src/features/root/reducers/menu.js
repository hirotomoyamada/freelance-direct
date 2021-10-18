export const menu = (state, action) => {
  if (action.payload === "open") {
    state.menu.display = true;
    state.menu.control = true;
  }

  if (action.payload === "close") {
    state.menu.display = false;
  }

  if (action.payload === "reset") {
    state.menu.display = false;
    state.menu.control = false;
  }
};
