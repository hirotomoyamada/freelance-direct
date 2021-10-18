import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/root/rootSlice";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    root: rootReducer,
    post: postReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["root/handleModal", "post/deletePost"],
      },
    }),
});
