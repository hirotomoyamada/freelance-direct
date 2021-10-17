import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const uploadResume = createAsyncThunk(
  "user/uploadResume",
  async (data) => {
    const uploadResume = functions.httpsCallable("fd-uploadResume");
    const url = uploadResume(data.file)
      .then(async ({ data }) => {
        return data;
      })
      .catch((e) => {});

    return url;
  }
);
