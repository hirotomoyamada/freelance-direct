import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as rootSlice from "../../root/rootSlice";
import * as userSlice from "../userSlice";

import { Header } from "../../../components/header/Header";

export const List = (props) => {
  const dispatch = useDispatch();

  const index = useSelector(rootSlice.index);
  const user = useSelector(userSlice.user);
  const list = props.match.params.list;

  useEffect(() => {
    dispatch(rootSlice.handlePage(list));
  }, [dispatch, list]);

  useEffect(() => {
    list === "requests"
      ? dispatch(rootSlice.handleIndex("hold"))
      : index !== "matters" && dispatch(rootSlice.handleIndex("matters"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <div>
      <Header user={user} type={list} index={index} />
    </div>
  );
};
