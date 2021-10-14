import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const extractPosts = createAsyncThunk(
  "post/extractPosts",
  async (data) => {
    const extractPosts = functions.httpsCallable("fd-extractPosts");
    const posts = extractPosts({
      index: data.index,
      type: data.type,
      objectIDs: data.objectIDs,
      page: data.page,
    })
      .then(({ data }) => {
        return {
          index: data.index,
          type: data.type,
          posts: data.posts.filter((post) => post),
          hit: data.hit,
        };
      })
      .catch((e) => {});

    return posts;
  }
);
