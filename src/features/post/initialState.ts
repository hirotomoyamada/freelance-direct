import { Matter, Company } from "types/post";

export interface State {
  search: {
    matters: {
      posts: Matter[];
      hit: {
        posts: number;
        pages: number;
        currentPage: number;
      };
    };

    companys: {
      posts: Company[];
      hit: {
        posts: number;
        pages: number;
        currentPage: number;
      };
    };
  };

  user: {
    posts: Matter[];
    hit: {
      posts: number;
      pages: number;
      currentPage: number;
    };
  };

  home: {
    matters: {
      posts: Matter[];
      hit: {
        posts: number;
        pages: number;
        currentPage: number;
      };

      control: boolean;
    };

    companys: {
      posts: Company[];
      hit: {
        posts: number;
        pages: number;
        currentPage: number;
      };

      control: boolean;
    };
  };

  likes: {
    posts: Matter[];
    hit: {
      posts: number;
      pages: number;
      currentPage: number;
    };
  };

  entries: {
    posts: Matter[];
    hit: {
      posts: number;
      pages: number;
      currentPage: number;
    };
  };

  histories: {
    posts: Matter[];
    hit: {
      posts: number;
      pages: number;
      currentPage: number;
    };
  };

  requests: {
    enable: {
      posts: Company[];
      hit: {
        posts: number;
        pages: number;
        currentPage: number;
      };
    };

    hold: {
      posts: Company[];
      hit: {
        posts: number;
        pages: number;
        currentPage: number;
      };
    };

    disable: {
      posts: Company[];
      hit: {
        posts: number;
        pages: number;
        currentPage: number;
      };
    };
  };

  post: Matter | unknown;
  bests: Matter[];
}

export const initialState: State = {
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

  histories: {
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
    },

    hold: {
      posts: [],
      hit: {
        posts: 0,
        pages: 0,
        currentPage: 0,
      },
    },

    disable: {
      posts: [],
      hit: {
        posts: 0,
        pages: 0,
        currentPage: 0,
      },
    },
  },

  post: {},
  bests: [],
};
