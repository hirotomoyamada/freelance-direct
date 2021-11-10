import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const uploadResume = createAsyncThunk(
  "user/uploadResume",
  async (data) => {
    const uploadResume = functions.httpsCallable("fd-uploadResume");

    const url = await uploadResume({ type: data.type, file: data.file })
      .then(async ({ data }) => {
        return data;
      })
      .catch((e) => {
        return { error: e.message };
      });

    return url;
  }
);
