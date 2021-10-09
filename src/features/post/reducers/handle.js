export const handleIndex = (state, action) => {
  state.index = action.payload;

  if (state.page === "post") {
    state.search.value = "";
    state.search.target = "";
    state.search.type = "";
    state.search.control = false;
  }
};

export const handleSearch = (state, action) => {
  if (!action.payload) {
    state.search.value = "";
    state.search.control = false;
  }

  if (action?.payload?.target) {
    state.search.target = action.payload.target;
    state.search.control = false;
  }

  if (action?.payload?.type) {
    state.search.type = action.payload.type;
    state.search.control = false;
  }

  if (action?.payload?.value) {
    state.search.value = action.payload.value;
    state.search.control = false;
  }

  if (action?.payload?.control) {
    state.search.control = action.payload.control;
  }
};

export const handleSort = (state, action) => {
  state.sort.status = action.payload.status
    ? action.payload.status !== "reset"
      ? action.payload.status
      : ""
    : state.sort.status;

  state.sort.display = action.payload.display
    ? action.payload.display !== "reset"
      ? action.payload.display
      : ""
    : state.sort.display;

  state.sort.control = true;
};

export const handlePage = (state, action) => {
  if (action.payload === "post" || action.payload === "setting") {
    state.page = action.payload;
  } else {
    if (state.page === "post" || state.page === "setting") {
      state.posts.bests = [];
    } else {
      Object.keys(state.posts).forEach((type) => {
        if (type === "bests") {
          return;
        }

        if (type !== "home" && type !== "search" && type !== "requests") {
          if (type !== "user") {
            state.posts[type].posts = state.posts[type].posts.slice(0, 50);
          } else {
            state.posts[type].posts = [];
          }
          state.posts[type].hit.currentPage = 0;
        } else {
          Object.keys(state.posts[type]).forEach((index) => {
            state.posts[type][index].posts = state.posts[type][
              index
            ].posts.slice(0, 50);

            state.posts[type][index].hit.currentPage = 0;
          });
        }
      });
    }

    state.page = action.payload;
  }
};

export const handleNotFound = (state, action) => {
  state.notFound = action.payload;
  state.load = false;
};

export const handleControl = (state) => {
  state.posts.home.posts.control = true;
  state.posts.home.users.control = true;
};
