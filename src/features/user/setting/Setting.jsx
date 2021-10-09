import React from "react";

import { useDispatch, useSelector } from "react-redux";
import * as userSlice from "../userSlice";

import { Header } from "../../../components/header/Header";

export const Setting = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSlice.user);

  return (
    <div>
      <Header user={user} type="setting" />
    </div>
  );
};
