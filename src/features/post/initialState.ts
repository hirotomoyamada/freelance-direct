import * as Post from "types/post";

type Matter = {
  posts: (Post.Matter | undefined)[];
  hit: {
    posts: number;
    pages: number;
    currentPage: number;
  };
};

type Company = {
  posts: (Post.Company | undefined)[];
  hit: {
    posts: number;
    pages: number;
    currentPage: number;
  };
};

export interface State {
  search: {
    matters: Matter;
    companys: Company;
  };

  home: {
    matters: Matter & { control: boolean };
    companys: Company & { control: boolean };
  };

  user: Matter;
  likes: Matter;
  entries: Matter;
  histories: Matter;

  requests: {
    enable: Company;
    hold: Company;
    disable: Company;
  };

  post: Matter | unknown;
  bests: (Post.Matter | undefined)[];
}

const posts = {
  posts: [],
  hit: {
    posts: 0,
    pages: 0,
    currentPage: 0,
  },
};

export const initialState: State = {
  search: {
    matters: posts,
    companys: posts,
  },

  home: {
    matters: { ...posts, control: true },
    companys: { ...posts, control: true },
  },

  user: posts,
  likes: posts,
  entries: posts,
  histories: posts,

  requests: {
    enable: posts,
    hold: posts,
    disable: posts,
  },

  post: {},
  bests: [],
};
