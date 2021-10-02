export const initialState = {
  user: {
    uid: "",
    icon: "",
    cover: "",
    provider: [],
    profile: {},
    posts: { matters: [], resources: [] },
    entries: { matters: [], resources: [], persons: [] },
    likes: { matters: [], resources: [], persons: [] },
    follows: [],
    createAt: "",
    updateAt: "",
  },

  selectUser: {},

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
