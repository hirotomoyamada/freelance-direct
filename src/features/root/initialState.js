export const initialState = {
  index: "matters",
  
  page: "home",

  menu: { display: false, control: false },

  search: {
    value: "",
    target: "",
    type: "",
    status: "",
    display: "",
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
  },

  load: {
    root: true,
    list: true,
    fetch: false,
  },

  notFound: false,
};
