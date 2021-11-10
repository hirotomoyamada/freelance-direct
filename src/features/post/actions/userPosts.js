import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const userPosts = createAsyncThunk("post/userPosts", async (data) => {
  const userPosts = functions.httpsCallable("fd-userPosts");

  const posts = await userPosts({
    uid: data.uid,
    page: data.page,
  })
    .then(({ data }) => {
      return {
        posts: data.posts.filter((post) => post),
        hit: data.hit,
      };
    })
    .catch((e) => {
      return { error: "ページを更新してください" };
    });

  return posts;
});
