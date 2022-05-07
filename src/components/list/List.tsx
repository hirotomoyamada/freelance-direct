import React from "react";
import styles from "./List.module.scss";

import { useScrollFetch } from "hooks/useScrollFetch";

import { Posts } from "./components/posts/Posts";
import { NotFound } from "./components/notFound/NotFound";
import { Load } from "./components/load/Load";

import { Matter, Company } from "types/post";
import { User } from "types/user";

interface PropType {
  user: User;
  index?: "matters" | "companys" | "enable" | "hold" | "disable";
  type?: "likes" | "entries" | "requests" | "histories";
  posts?: (Matter | undefined)[] | (Company | undefined)[];
  search?: {
    value: string | null;
    target: string | null;
    type: string | null;
    control: boolean;
  };
  hit?: {
    posts: number;
    pages: number;
    currentPage: number;
  };
  home?: boolean;
  companys?: boolean;
  select?: string[];
  selectUser?: Company | ((uid: string) => void);
}

export const List: React.FC<PropType> = ({
  user,
  index,
  type,
  posts,
  search,
  hit,
  home,
  companys,
  select,
  selectUser,
}) => {
  const [list, load, page] = useScrollFetch({
    index,
    hit,
    user,
    selectUser,
    home,
    search,
    companys,
    type,
    select,
  });

  return (
    <div className={select && styles.list}>
      {posts?.length ? (
        <Posts
          index={index}
          posts={posts}
          user={user}
          list={list}
          select={select}
          selectUser={selectUser as (uid: string) => void}
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

      {hit?.pages && page < hit?.pages - 1 ? (
        <Load load={load} page={page} hit={hit} />
      ) : (
        <></>
      )}
    </div>
  );
};
