import styles from "./List.module.scss";

import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { fetchPosts } from "../actions/fetchPosts";
import { homePosts } from "../actions/homePosts";
import { extractPosts } from "../actions/extractPosts";
import { userPosts } from "../actions/userPosts";
import { Load } from "./components/Load";
import { Posts } from "./components/Posts";
import { NotFound } from "./components/NotFound";

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
  const dispatch = useDispatch();

  const load = useRef();
  const list = useRef();

  const [page, setPage] = useState(0);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    setPage(hit.currentPage);
    setIntersecting(false);
  }, [hit.currentPage, hit.pages]);

  useEffect(() => {
    if (
      JSON.stringify(list.current.getBoundingClientRect().height) >
      window.innerHeight + 100
    ) {
      const observer = new IntersectionObserver(
        ([results]) => {
          if (results.isIntersecting && !intersecting) {
            if (page < hit.pages) {
              setIntersecting(results.isIntersecting);
            }
            setPage((prevPage) => prevPage + 1);
          }
        },
        {
          rootMargin: `0px 0px ${window.innerHeight}px 0px`,
        }
      );

      const ref = load.current;
      ref && observer.observe(ref);

      return () => {
        ref && observer.unobserve(ref);
      };
    }
  }, [hit.pages, intersecting, page]);

  useEffect(() => {
    search &&
      intersecting &&
      hit.pages &&
      page !== hit.pages &&
      dispatch(
        fetchPosts({
          index: index,
          value: search.value,
          target: search.target,
          type: search.type,
          page: page,
        })
      ).then(() => {
        setIntersecting(!intersecting);
      });

    home &&
      intersecting &&
      hit.pages &&
      page !== hit.pages &&
      dispatch(
        homePosts({
          index: select ? "companys" : index,
          follows:
            index !== "matters" || select
              ? user.follows
              : [user.uid, ...user.home],
          page: page,
        })
      ).then(() => {
        setIntersecting(!intersecting);
      });

    companys &&
      intersecting &&
      hit.pages &&
      page !== hit.pages &&
      dispatch(
        userPosts({
          uid: selectUser.uid,
          page: page,
        })
      ).then(() => {
        setIntersecting(!intersecting);
      });

    type &&
      intersecting &&
      hit.pages &&
      page !== hit.pages &&
      dispatch(
        extractPosts({
          index: index,
          type: type,
          objectIDs: type !== "requests" ? user[type] : user[type][index],
          page: page,
        })
      ).then(() => {
        setIntersecting(!intersecting);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className={select && styles.list_scroll}>
      {posts?.length ? (
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

      {posts?.length >= 50 && <Load load={load} page={page} hit={hit} />}
    </div>
  );
};
