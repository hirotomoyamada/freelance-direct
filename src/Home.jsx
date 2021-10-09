import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/header/Header";
import * as userSlice from "./features/user/userSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSlice.user);
  const menu = useSelector(userSlice.menu);

  return (
    <div>
      <Header user={user} />
    </div>
  );
};
