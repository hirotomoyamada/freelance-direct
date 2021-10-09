import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as postSlice from "../../post/postSlice";
import * as userSlice from "../userSlice";

import { Header } from "../../../components/header/Header";

export const List = (props) => {
  const dispatch = useDispatch();

  const index = useSelector(postSlice.index);
  const user = useSelector(userSlice.user);
  const list = props.match.params.list;

  useEffect(() => {
    dispatch(postSlice.handlePage(list));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    list === "requests"
      ? dispatch(postSlice.handleIndex("hold"))
      : index !== "post" && dispatch(postSlice.handleIndex("post"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header user={user} type={list} index={index} />
    </div>
  );
};
