import root from "../Section.module.scss";
import styles from "./Search.module.scss";

import { useSelector } from "react-redux";

import * as rootSlice from "../../../../features/root/rootSlice";
import * as postSlice from "../../../../features/post/postSlice";

import { Posts } from "./components/Posts";
import { NotFound } from "./components/NotFound";
import { Btn } from "../../../components/btn/Btn";
import { Form } from "./components/form/Form";

export const Search = ({ handleOpen }) => {
  const load = useSelector(rootSlice.load).list;

  const posts = useSelector((state) =>
    postSlice.posts({ state: state, page: "search", index: "matters" })
  );

  return (
    <section className={`${styles.search} ${root.section}`}>
      <div className={`${root.section_inner} ${root.section_inner_content}`}>
        <h1 className={`${styles.search_ttl} ${root.section_ttl}`}>
          探してみよう
        </h1>

        <Form />

        {posts.length ? (
          <Posts posts={posts} handleOpen={handleOpen} />
        ) : (
          <NotFound load={load} />
        )}

        <div className={styles.search_more}>
          <Btn txt="もっとみる" func={handleOpen} />
        </div>
      </div>
    </section>
  );
};
