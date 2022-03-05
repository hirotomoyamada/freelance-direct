import React from "react";
import styles from "./Post.module.scss";

import { RouteComponentProps } from "react-router-dom";
import { usePost } from "hooks/usePost";
import { useEntry } from "hooks/useEntry";

import { Meta } from "./Meta";

import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

export const Post: React.FC<RouteComponentProps<{ objectID: string }>> = (
  props
) => {
  const objectID = props.match.params.objectID;
  const [post, posts, user] = usePost(objectID);
  const [entry, handleEntry] = useEntry(user, objectID);

  return (
    <div className={styles.post}>
      <Meta post={post} />

      <Main post={post} user={user} entry={entry} handleEntry={handleEntry} />

      {posts?.length ? <Footer post={post} posts={posts} user={user} /> : <></>}
    </div>
  );
};
