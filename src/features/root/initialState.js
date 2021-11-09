export const initialState = {
  index: "matters",

  page: "home", // ver 1.1.0
  // ------ 削除予定 ------
  // page: "search",
  // ------ 削除予定 ------

  menu: { display: false, control: false },

  search: {
    value: "",
    target: "",
    type: "",
    control: false,
  },

  modal: {
    type: "",
    open: false,
  },

  announce: {
    success: "",
    error: "",
  },

  data: {},

  verified: {
    index: false,
    email: false,
    profile: false,
    agree: false,
    status: "",
    access: true,
    demo: false,
    error: "",
  },

  load: {
    root: true,
    list: true,
    fetch: false,
  },

  notFound: false,
};
