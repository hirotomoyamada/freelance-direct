import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "libs/firebase";
import { httpsCallable, HttpsCallable } from "firebase/functions";

import { Matter, Company } from "types/post";

export interface FetchPosts {
  arg: {
    index: "matters" | "companys";
    target?: string | null;
    value?: string | null;
    type?: string | null;
    page?: number | null;
    pend?: boolean;
  };

  data: {
    index: "matters" | "companys";
    posts: Matter[] | Company[];
    hit: {
      currentPage: number;
      posts: number;
      pages: number;
    };
  };
}

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (arg: FetchPosts["arg"]): Promise<FetchPosts["data"]> => {
    const fetchPosts: HttpsCallable<FetchPosts["arg"], FetchPosts["data"]> =
      httpsCallable(functions, "fd-fetchPosts");

    const { data } = await fetchPosts({
      index: arg.index,
      target: arg.target,
      value: arg.value,
      type: arg.type,
      page: arg.page,
    });

    return data;
  }
);

export interface ExtractPosts {
  arg: {
    index: "matters" | "companys" | "enable" | "hold" | "disable";
    type: "likes" | "entries" | "requests" | "histories";
    objectIDs: string[];
    page?: number;
    pend?: boolean;
  };

  data: {
    index: "matters" | "companys" | "enable" | "hold" | "disable";
    type: "likes" | "entries" | "requests" | "histories";
    posts: Matter[] | Company[];
    hit: {
      currentPage: number;
      posts: number;
      pages: number;
    };
  };
}

export const extractPosts = createAsyncThunk(
  "post/extractPosts",
  async (arg: ExtractPosts["arg"]): Promise<ExtractPosts["data"]> => {
    const extractPosts: HttpsCallable<
      ExtractPosts["arg"],
      ExtractPosts["data"]
    > = httpsCallable(functions, "fd-extractPosts");

    const { data } = await extractPosts({
      index: arg.index,
      type: arg.type,
      objectIDs: arg.objectIDs,
      page: arg.page,
    });

    return data;
  }
);

export interface HomePosts {
  arg: {
    index: "matters" | "companys";
    follows: string[];
    page?: number;
    pend?: boolean;
  };
  data: {
    index: "matters" | "companys";
    posts: Matter[] | Company[];
    hit: {
      currentPage: number;
      posts: number;
      pages: number;
    };
  };
}

export const homePosts = createAsyncThunk(
  "post/homePosts",
  async (arg: HomePosts["arg"]): Promise<HomePosts["data"]> => {
    const homePosts: HttpsCallable<HomePosts["arg"], HomePosts["data"]> =
      httpsCallable(functions, "fd-homePosts");

    const { data } = await homePosts({
      index: arg.index,
      follows: arg.follows,
      page: arg.page,
    });

    return data;
  }
);

export interface UserPosts {
  arg: {
    uid: string;
    page?: number;
  };

  data: {
    posts: Matter[];
    hit: {
      currentPage: number;
      posts: number;
      pages: number;
    };
  };
}

export const userPosts = createAsyncThunk(
  "post/userPosts",
  async (arg: UserPosts["arg"]): Promise<UserPosts["data"]> => {
    const userPosts: HttpsCallable<UserPosts["arg"], UserPosts["data"]> =
      httpsCallable(functions, "fd-userPosts");

    const { data } = await userPosts({
      uid: arg.uid,
      page: arg.page,
    });

    return data;
  }
);

export interface FetchPost {
  arg: string;

  data: {
    post: Matter;
    bests: (Matter | undefined)[];
  };
}

export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async (arg: FetchPost["arg"]): Promise<FetchPost["data"]> => {
    const fetchPost: HttpsCallable<FetchPost["arg"], FetchPost["data"]> =
      httpsCallable(functions, "fd-fetchPost");

    const { data } = await fetchPost(arg);

    return data;
  }
);

export const promotionPosts = createAsyncThunk(
  "post/promotionPosts",
  async (arg: string): Promise<Matter[]> => {
    const promotionPosts: HttpsCallable<string, Matter[]> = httpsCallable(
      functions,
      "fd-promotionPosts"
    );

    const { data } = await promotionPosts(arg);

    return data;
  }
);
