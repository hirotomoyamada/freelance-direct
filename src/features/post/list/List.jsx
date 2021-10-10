import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { fetchPosts } from "../functions/fetchPosts";
import { followsPosts } from "../functions/followsPosts";
import { Load } from "./components/Load";
import { Posts } from "./components/Posts";
import { NotFound } from "./components/NotFound";

export const List = ({ index, posts, user, home, search, hit }) => {
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
          if (results.isIntersecting && !intersecting && page < hit.pages) {
            setIntersecting(results.isIntersecting);
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
        followsPosts({
          index: index,
          follows: [user.uid, ...user.home],
          page: page,
        })
      ).then(() => {
        setIntersecting(!intersecting);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      {posts?.length ? (
        <Posts index={index} posts={posts} user={user} list={list} />
      ) : (
        <NotFound index={index} list={list} />
      )}

      {posts?.length >= 50 && <Load load={load} page={page} hit={hit} />}
    </>
  );
};
