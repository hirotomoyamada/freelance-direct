import styles from "./Post.module.scss";
import { usePost } from "./hook/usePost";

import { Meta } from "./Meta";
import { Main } from "./layouts/main/Main";
import { Footer } from "./layouts/footer/Footer";
import { useEntry } from "./hook/useEntry";

export const Post = (props) => {
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
