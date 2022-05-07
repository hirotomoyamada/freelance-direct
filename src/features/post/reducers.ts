import { PayloadAction } from "@reduxjs/toolkit";

import { State } from "features/post/initialState";
import { Matter, Company } from "types/post";

import {
  FetchPost,
  FetchPosts,
  ExtractPosts,
  HomePosts,
  UserPosts,
} from "features/post/actions";

export const fetchPosts = (
  state: State,
  action: PayloadAction<FetchPosts["data"]>
): void => {
  if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
    state.search[action.payload.index].posts = [
      ...state.search[action.payload.index].posts,
      ...action.payload.posts,
    ] as (Matter | undefined)[] | (Company | undefined)[];
  } else {
    state.search[action.payload.index].posts = action.payload.posts;
  }

  state.search[action.payload.index].hit = {
    posts: action.payload.hit.posts,
    pages: action.payload.hit.pages,
    currentPage: action.payload.hit.currentPage,
  };
};

export const extractPosts = (
  state: State,
  action: PayloadAction<ExtractPosts["data"]>
): void => {
  if (action.payload.type !== "requests") {
    if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
      state[action.payload.type].posts = [
        ...state[action.payload.type].posts,
        ...action.payload.posts,
      ] as (Matter | undefined)[];
    } else {
      state[action.payload.type].posts = action.payload.posts as (
        | Matter
        | undefined
      )[];
    }

    state[action.payload.type].hit = {
      posts: action.payload.hit.posts,
      pages: action.payload.hit.pages,
      currentPage: action.payload.hit.currentPage,
    };
  } else {
    if (
      action.payload.index !== "matters" &&
      action.payload.index !== "companys"
    ) {
      if (
        action.payload.hit.currentPage !== 0 &&
        action.payload.hit.pages > 1
      ) {
        state[action.payload.type][action.payload.index].posts = [
          ...state[action.payload.type][action.payload.index].posts,
          ...action.payload.posts,
        ] as (Company | undefined)[];
      } else {
        state[action.payload.type][action.payload.index].posts = action.payload
          .posts as (Company | undefined)[];
      }

      state[action.payload.type][action.payload.index].hit = {
        posts: action.payload.hit.posts,
        pages: action.payload.hit.pages,
        currentPage: action.payload.hit.currentPage,
      };
    }
  }
};

export const homePosts = (
  state: State,
  action: PayloadAction<HomePosts["data"]>
): void => {
  if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
    state.home[action.payload.index].posts = [
      ...state.home[action.payload.index].posts,
      ...action.payload.posts,
    ] as (Matter | undefined)[] | (Company | undefined)[];
  } else {
    state.home[action.payload.index].posts = action.payload.posts;

    if (action.payload.index === "matters") {
      state.home.matters.control = false;
    }
  }

  state.home[action.payload.index].hit = {
    posts: action.payload.hit.posts,
    pages: action.payload.hit.pages,
    currentPage: action.payload.hit.currentPage,
  };
};

export const promotionPosts = (
  state: State,
  action: PayloadAction<(Matter | undefined)[]>
): void => {
  state.search.matters.posts = action.payload;
};

export const userPosts = (
  state: State,
  action: PayloadAction<UserPosts["data"]>
): void => {
  if (action.payload.hit.currentPage !== 0 && action.payload.hit.pages > 1) {
    state.user.posts = [...state.user.posts, ...action.payload.posts];
  } else {
    state.user.posts = action.payload.posts;
  }

  state.user.hit = {
    posts: action.payload.hit.posts,
    pages: action.payload.hit.pages,
    currentPage: action.payload.hit.currentPage,
  };
};

export const fetchPost = (
  state: State,
  action: PayloadAction<FetchPost["data"]>
): void => {
  if (action.payload) {
    state.post = action.payload.post;
    state.bests = action.payload.bests;

    if (state.histories.posts.length) {
      state.histories.posts = [
        action.payload.post,
        ...state.histories.posts.filter(
          (post) => post && post.objectID !== action.payload.post.objectID
        ),
      ];
    }
  }
};

export const resetPost = (
  state: State,
  action: PayloadAction<string | void>
): void => {
  if (action.type === "post/resetPost" || action.payload === "post") {
    state.post = {};
    state.bests = [];

    return;
  }

  if (Object.keys(state.post as Matter)?.length) {
    state.post = {};
    state.bests = [];
  } else {
    Object.keys(state).forEach((posts) => {
      if (posts === "bests" || posts === "post") {
        return;
      }

      if (
        posts === "likes" ||
        posts === "entries" ||
        posts === "histories" ||
        posts === "user"
      ) {
        if (posts !== "user") {
          state[posts].posts = state[posts].posts.slice(0, 50);
        } else {
          state[posts].posts = [];
        }

        state[posts].hit.currentPage = 0;
      }

      if (posts === "search" || posts === "home") {
        Object.keys(state[posts]).forEach((index) => {
          if (index === "matters" || index === "companys") {
            state[posts][index].posts = state[posts][index].posts.slice(0, 50);
            state[posts][index].hit.currentPage = 0;
          }
        });
      }

      if (posts === "requests") {
        Object.keys(state.requests).forEach((index) => {
          if (index === "matters" || index === "companys") {
            state.requests[index as keyof State["requests"]].posts =
              state.requests[index as keyof State["requests"]].posts.slice(
                0,
                50
              );
            state.requests[
              index as keyof State["requests"]
            ].hit.currentPage = 0;
          }
        });
      }
    });
  }
};

export const addLike = (state: State, action: PayloadAction<Matter>): void => {
  if (state.likes.posts.length) {
    state.likes.posts = [action.payload, ...state.likes.posts];
  }
};

export const removeLike = (
  state: State,
  action: PayloadAction<Matter>
): void => {
  state.likes.posts = state.likes.posts.filter(
    (post) => post && post.objectID !== action.payload.objectID
  );
};

export const addEntry = (state: State, action: PayloadAction<Matter>): void => {
  if (state.entries.posts.length) {
    state.entries.posts = [action.payload, ...state.entries.posts];
  }
};

export const addFollow = (
  state: State,
  action: PayloadAction<Company>
): void => {
  if (state.home.companys.posts.length) {
    state.home.companys.posts = [action.payload, ...state.home.companys.posts];
  }

  state.home.matters.control = true;
};

export const removeFollow = (
  state: State,
  action: PayloadAction<Company>
): void => {
  state.home.companys.posts = state.home.companys.posts.filter(
    (post) => post && post.uid !== action.payload.uid
  );

  state.home.matters.posts = state.home.matters.posts.filter(
    (post) => post && post.uid !== action.payload.uid
  );
};

export const enableRequest = (
  state: State,
  action: PayloadAction<Company>
): void => {
  Object.keys(state.requests).forEach((type) => {
    if (type === "enable") {
      if (state.requests[type].posts.length) {
        state.requests[type].posts = [
          action.payload,
          ...state.requests[type].posts,
        ];
      }
    }

    if (type === "hold" || type === "disable") {
      state.requests[type].posts = state.requests[type].posts.filter(
        (user) => user && user.uid !== action.payload.uid
      );
    }
  });
};

export const disableRequest = (
  state: State,
  action: PayloadAction<Company>
): void => {
  Object.keys(state.requests).forEach((type) => {
    if (type === "disable") {
      if (state.requests[type].posts) {
        state.requests[type].posts = [
          action.payload,
          ...state.requests[type].posts,
        ];
      }
    }

    if (type === "hold" || type === "enable") {
      state.requests[type].posts = state.requests[type].posts.filter(
        (user) => user && user.uid !== action.payload.uid
      );
    }
  });
};

export const resetControl = (state: State): void => {
  state.home.matters.control = true;
};

// memo
// export const load = (state: State) => {
//   state.load = true;
// };

// export const fetch = (state: State) => {
//   state.fetch = true;
// };
