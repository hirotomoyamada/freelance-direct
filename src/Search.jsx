import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as userSlice from "./features/user/userSlice";
import * as postSlice from "./features/post/postSlice";

import { Header } from "./components/header/Header";

export const Search = () => {
  const dispatch = useDispatch();

  const index = useSelector(postSlice.index);
  const user = useSelector(userSlice.user);

  useEffect(() => {
    dispatch(postSlice.handlePage("search"));
  }, [dispatch]);

  useEffect(() => {
    (index === "enable" || index === "hold" || index === "disable") &&
      dispatch(postSlice.handleIndex("post"));
  }, [dispatch, index]);

  return (
    <div>
      <Header user={user} type="search" index={index} />
    </div>
  );
};
