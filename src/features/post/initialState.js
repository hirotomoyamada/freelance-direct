export const initialState = {
  index: "matters",

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
      matters: {
        posts: [],
        hit: {
          posts: 0,
          pages: 0,
          currentPage: 0,
        },
      },
      companys: {
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
      matters: {
        posts: [],
        hit: {
          posts: 0,
          pages: 0,
          currentPage: 0,
        },
        control: true,
      },
      companys: {
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
