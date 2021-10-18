import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions, auth } from "../../../firebase";

export const createProfile = createAsyncThunk(
  "user/createProfile",
  async (data) => {
    const createProfile = functions.httpsCallable("fd-createProfile");

    createProfile(data)
      .then(async ({ data }) => {
        await auth.currentUser
          .updateProfile({
            displayName: data.profile.nickName,
          })
          .catch((e) => {});
      })
      .catch((e) => {});
  }
);
