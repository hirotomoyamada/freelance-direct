import React from "react";

import { useDispatch, useSelector } from "react-redux";
import * as postSlice from "../../post/postSlice";
import * as userSlice from "../userSlice";

import { Header } from "../../../components/header/Header";

export const Setting = () => {
  const dispatch = useDispatch();

  const index = useSelector(postSlice.index);
  const user = useSelector(userSlice.user);

  return (
    <div>
      <Header user={user} type="setting" />
    </div>
  );
};
