import styles from "./List.module.scss";

import { Posts } from "./components/Posts";
import { NotFound } from "./components/NotFound";
import { Load } from "./components/Load";

import { useFetch } from "./hook/useFetch";

export const List = ({
  index,
  posts,
  user,
  home,
  search,
  companys,
  select,
  selectUser,
  type,
  hit,
}) => {
  const [list, load, page] = useFetch(
    index,
    hit,
    user,
    selectUser,
    home,
    search,
    companys,
    type,
    select
  );

  return (
    <div className={select && styles.list_scroll}>
      {posts?.length &&
      // ------ 削除予定 ------
      index === "matters" // ver 1.1.0
      // ------ 削除予定 ------
       ? (
        <Posts
          index={index}
          posts={posts}
          user={user}
          list={list}
          select={select}
          selectUser={selectUser}
        />
      ) : (
        <NotFound
          index={index}
          list={list}
          select={select}
          home={home}
          companys={companys}
        />
      )}

      {hit.pages && page < hit.pages - 1 && (
        <Load load={load} page={page} hit={hit} />
      )}
    </div>
  );
};
