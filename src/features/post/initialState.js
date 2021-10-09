export const initialState = {
  index: "post",

  search: {
    value: "",
    target: "",
    type: "",
    status: "",
    display: "",
    control: false,
  },

  sort: {
    status: "",
    display: "",
    control: false,
  },

  posts: {
    search: {
      posts: {
        posts: [],
        hit: {
          posts: 0,
          pages: 0,
          currentPage: 0,
        },
      },
      users: {
        posts: [],
        hit: {
          posts: 0,
          pages: 0,
          currentPage: 0,
        },
      },
    },

    bests: [],

    user: {
      posts: [],
      hit: {
        posts: 0,
        pages: 0,
        currentPage: 0,
      },
    },

    home: {
      posts: {
        posts: [],
        hit: {
          posts: 0,
          pages: 0,
          currentPage: 0,
        },
        control: true,
      },
      users: {
        posts: [],
        hit: {
          posts: 0,
          pages: 0,
          currentPage: 0,
        },
        control: true,
      },
    },

    likes: {
      posts: [],
      hit: {
        posts: 0,
        pages: 0,
        currentPage: 0,
      },
    },

    entries: {
      posts: [],
      hit: {
        posts: 0,
        pages: 0,
        currentPage: 0,
      },
    },

    history: {
      posts: [],
      hit: {
        posts: 0,
        pages: 0,
        currentPage: 0,
      },
    },

    requests: {
      enable: {
        posts: [],
        hit: {
          posts: 0,
          pages: 0,
          currentPage: 0,
        },
        control: true,
      },
      hold: {
        posts: [],
        hit: {
          posts: 0,
          pages: 0,
          currentPage: 0,
        },
        control: true,
      },
      disable: {
        posts: [],
        hit: {
          posts: 0,
          pages: 0,
          currentPage: 0,
        },
        control: true,
      },
    },
  },

  post: {},

  page: "home",

  load: true,
  fatch: false,
  notFound: false,
};
