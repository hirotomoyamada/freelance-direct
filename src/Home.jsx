import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as userSlice from "./features/user/userSlice";
import * as postSlice from "./features/post/postSlice";

import { Header } from "./components/header/Header";

export const Home = () => {
  const dispatch = useDispatch();

  const index = useSelector(postSlice.index);
  const user = useSelector(userSlice.user);
  const info = useSelector(userSlice.data).information;

  useEffect(() => {
    (index === "enable" || index === "hold" || index === "disable") &&
      dispatch(postSlice.handleIndex("post"));
  }, [dispatch, index]);

  return (
    <div>
      <Header user={user} type="home" info={info} index={index} />
    </div>
  );
};
