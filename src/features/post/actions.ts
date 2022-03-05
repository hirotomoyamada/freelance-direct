import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "libs/firebase";
import { httpsCallable, HttpsCallable } from "firebase/functions";

import { Matter, Company } from "types/post";

export interface FetchPosts {
  org: {
    index: "matters" | "companys";
    target?: string | null;
    value?: string | null;
    type?: string | null;
    page?: number | null;
    fetch?: boolean;
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
  async (org: FetchPosts["org"]): Promise<FetchPosts["data"]> => {
    const fetchPosts: HttpsCallable<FetchPosts["org"], FetchPosts["data"]> =
      httpsCallable(functions, "fd-fetchPosts");

    const { data } = await fetchPosts({
      index: org.index,
      target: org.target,
      value: org.value,
      type: org.type,
      page: org.page,
    });

    return data;
  }
);

export interface ExtractPosts {
  org: {
    index: "matters" | "companys" | "enable" | "hold" | "disable";
    type: "likes" | "entries" | "requests" | "histories";
    objectIDs: string[];
    page?: number;
    fetch?: boolean;
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
  async (org: ExtractPosts["org"]): Promise<ExtractPosts["data"]> => {
    const extractPosts: HttpsCallable<
      ExtractPosts["org"],
      ExtractPosts["data"]
    > = httpsCallable(functions, "fd-extractPosts");

    const { data } = await extractPosts({
      index: org.index,
      type: org.type,
      objectIDs: org.objectIDs,
      page: org.page,
    });

    return data;
  }
);

export interface HomePosts {
  org: {
    index: "matters" | "companys";
    follows: string[];
    page?: number;
    fetch?: boolean;
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
  async (org: HomePosts["org"]): Promise<HomePosts["data"]> => {
    const homePosts: HttpsCallable<HomePosts["org"], HomePosts["data"]> =
      httpsCallable(functions, "fd-homePosts");

    const { data } = await homePosts({
      index: org.index,
      follows: org.follows,
      page: org.page,
    });

    return data;
  }
);

export interface UserPosts {
  org: {
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
  async (org: UserPosts["org"]): Promise<UserPosts["data"]> => {
    const userPosts: HttpsCallable<UserPosts["org"], UserPosts["data"]> =
      httpsCallable(functions, "fd-userPosts");

    const { data } = await userPosts({
      uid: org.uid,
      page: org.page,
    });

    return data;
  }
);

export interface FetchPost {
  org: string;

  data: {
    post: Matter;
    bests: Matter[];
  };
}

export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async (org: FetchPost["org"]): Promise<FetchPost["data"]> => {
    const fetchPost: HttpsCallable<FetchPost["org"], FetchPost["data"]> =
      httpsCallable(functions, "fd-fetchPost");

    const { data } = await fetchPost(org);

    return data;
  }
);

export const promotionPosts = createAsyncThunk(
  "post/promotionPosts",
  async (org: string): Promise<Matter[]> => {
    const promotionPosts: HttpsCallable<string, Matter[]> = httpsCallable(
      functions,
      "fd-promotionPosts"
    );

    const { data } = await promotionPosts(org);

    return data;
  }
);
