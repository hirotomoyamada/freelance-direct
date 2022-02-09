import styles from "../Header.module.scss";

export const Title = ({ post }) => {
  const newPost = post?.createAt > Date.now() - 60 * 60 * 24 * 3 * 1000;

  return post?.title ? (
    <h1 className={styles.header_ttl}>
      {post.title}&nbsp;
      {newPost && <span className={styles.header_ttl_new}>NEW</span>}
    </h1>
  ) : (
    <></>
  );
};
