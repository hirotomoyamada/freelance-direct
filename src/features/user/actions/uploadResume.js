import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const uploadResume = createAsyncThunk(
  "user/uploadResume",
  async (data) => {
    console.log(data);
    const uploadResume = functions.httpsCallable("fd-uploadResume");

    const file = uploadResume(data)
      .then(async ({ data }) => {
        console.log(data);
        return data;
      })
      .catch((e) => {
        console.log(e);
      });

    return file;
  }
);
