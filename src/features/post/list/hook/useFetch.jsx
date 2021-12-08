import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { createObserver } from "../functions/createObserver";
import { fetchScroll } from "../functions/fetchScroll";

export const useFetch = (
  index,
  hit,
  user,
  selectUser,
  home,
  search,
  companys,
  type,
  select
) => {
  const dispatch = useDispatch();

  const list = useRef();
  const load = useRef();
  const [page, setPage] = useState(0);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    setPage(hit?.currentPage);
    setIntersecting(false);
  }, [hit?.currentPage, hit?.pages]);

  useEffect(() => {
    const observer = createObserver(
      list,
      hit,
      page,
      setPage,
      intersecting,
      setIntersecting
    );

    const ref = load.current;
    ref && observer?.observe(ref);

    return () => {
      ref && observer?.unobserve(ref);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hit?.pages, intersecting, page]);

  useEffect(() => {
    intersecting &&
      hit.pages &&
      page !== hit.pages &&
      fetchScroll(
        dispatch,
        index,
        user,
        selectUser,
        home,
        search,
        companys,
        type,
        select,
        page
      ).then(() => {
        setIntersecting(!intersecting);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return [list, load, page];
};
