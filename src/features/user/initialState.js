export const initialState = {
  user: {
    uid: "",
    icon: "",
    cover: "",
    provider: [],
    profile: {},
    likes: [],
    entries: [],
    history: [],
    follows: [],
    requests: [],
    home: [],
    createAt: "",
    updateAt: "",
  },

  selectUser: {},

  modal: {
    type: "",
    open: false,
  },

  menu: { display: false, control: false },

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

  load: true,
  notFound: false,
};
