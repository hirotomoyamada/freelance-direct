import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from "../../../firebase";

export const fetchUser = createAsyncThunk("user/fetchUser", async (data) => {
  const fetchUser = functions.httpsCallable("fd-fetchUser");
  const user = fetchUser(data)
    .then(({ data }) => {
      return data;
    })

  return user;
});
