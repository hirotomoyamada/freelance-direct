import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const fetchPost = createAsyncThunk("post/fetchPost", async (data) => {
  const fetchPost = functions.httpsCallable("fd-fetchPost");
  const res = fetchPost(data)
    .then(({ data }) => {
      return {
        post: data.post,
        bests: data.bests.filter((post) => post),
      };
    })
    .catch(() => {
      return {
        notFound: true,
      };
    });

  return res;
});
