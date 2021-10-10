import styles from "./Post.module.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { showPost } from "./functions/showPost";
import * as postSlice from "./postSlice";
import * as userSlice from "../user/userSlice";

import { Menu } from "../../components/menu/Menu";
import { Modal } from "../../components/modal/Modal";

import { Meta } from "./Meta";
import { Main } from "./layouts/main/Main";
import { Side } from "./layouts/side/Side";

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
    dispatch(postSlice.handlePage("post"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(showPost(objectID));

    return () => {
      dispatch(postSlice.resetPost());
    };
  }, [dispatch, objectID]);

  useEffect(() => {
    setEntry(user.entries?.indexOf(objectID) >= 0 ? true : false);
  }, [objectID, user.entries]);

  const handleEntry = () => {
    dispatch(userSlice.handleModal({ type: "entry", open: true }));
  };

  return (
    <div className={styles.post}>
      <Meta post={post} />

      <Main post={post} user={user} entry={entry} handleEntry={handleEntry} />

      <Side post={post} posts={posts} user={user} />

      {/* {Object.keys(post).length && <Menu user={user} back />} */}
      {/* <Modal user={user} post={post} /> */}
    </div>
  );
};
