import { post } from "./post";
import { user } from "./user";
import { root } from "./root";

export const extraReducers = (builder) => {
  post(builder);
  root(builder);
  user(builder);
};
