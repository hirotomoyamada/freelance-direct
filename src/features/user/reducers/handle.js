export const handleAnnounce = (state, action) => {
  if (action.payload === "reset") {
    state.announce = {
      success: "",
      error: "",
    };
  } else {
    state.announce[action.payload.type] = action.payload.text;
  }
};

export const handleModal = (state, action) => {};

export const handleMenu = (state, action) => {
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

export const handleNotFound = (state, action) => {};
