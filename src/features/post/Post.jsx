import styles from "./Post.module.scss";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchPost } from "./actions/fetchPost";

import * as rootSlice from "../root/rootSlice.js";
import * as userSlice from "../user/userSlice";
import * as postSlice from "./postSlice";

import { Meta } from "./Meta";
import { Main } from "./layouts/main/Main";
import { Footer } from "./layouts/footer/Footer";

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
    dispatch(rootSlice.handlePage("post"));
  }, [dispatch, pathname]);

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
    dispatch(rootSlice.handleModal({ type: "entry" }));
  };

  return (
    <div className={styles.post}>
      <Meta post={post} />

      <Main post={post} user={user} entry={entry} handleEntry={handleEntry} />

      <Footer post={post} posts={posts} user={user} />
    </div>
  );
};
