import styles from "./Post.module.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchPost } from "./functions/fetchPost";
import * as rootSlice from "../root/rootSlice.js";
import * as userSlice from "../user/userSlice";
import * as postSlice from "./postSlice";

import { Meta } from "./Meta";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

export const Post = (props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const objectID = props.match.params.objectID;
  const post = useSelector(postSlice.post);
  const posts = useSelector(postSlice.bests);
  const user = useSelector(userSlice.user);

  const [entry, setEntry] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(rootSlice.handlePage("post"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPost(objectID));

    return () => {
      dispatch(postSlice.resetPost());
    };
  }, [dispatch, objectID]);

  useEffect(() => {
    setEntry(user.entries?.indexOf(objectID) >= 0 ? true : false);
  }, [objectID, user.entries]);

  const handleEntry = () => {
    dispatch(rootSlice.handleModal({ type: "entry", open: true }));
  };

  return (
    <div className={styles.post}>
      <Meta post={post} />

      <Main post={post} user={user} entry={entry} handleEntry={handleEntry} />

      <Footer post={post} posts={posts} user={user} />
    </div>
  );
};
