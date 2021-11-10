import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const promotionPosts = createAsyncThunk(
  "post/promotionPosts",
  async (data) => {
    const promotionPosts = functions.httpsCallable("fd-promotionPosts");

    const posts = await promotionPosts(data)
      .then(({ data }) => {
        return data;
      })
      .catch((e) => {});

    return posts;
  }
);
