import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import * as functions from "functions";

import { Company } from "types/post";
import { User } from "types/user";

interface PropType {
  user: User;
  selectUser?: Company | ((uid: string) => void);
  index?: "matters" | "companys" | "enable" | "hold" | "disable";
  hit?: {
    posts: number;
    pages: number;
    currentPage: number;
  };
  search?: {
    value: string | null;
    target: string | null;
    type: string | null;
    control: boolean;
  };
  type?: "likes" | "entries" | "requests" | "histories";
  select?: string[];
  home?: boolean;
  companys?: boolean;
}

export const useScrollFetch = ({
  index,
  hit,
  user,
  selectUser,
  home,
  search,
  companys,
  type,
  select,
}: PropType): [
  list: React.RefObject<HTMLDivElement>,
  load: React.RefObject<HTMLDivElement>,
  page: number
] => {
  const dispatch = useDispatch();

  const list = useRef<HTMLDivElement>(null);
  const load = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(0);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (hit) {
      setPage(hit.currentPage);
      setIntersecting(false);
    }
  }, [hit?.currentPage, hit?.pages]);

  useEffect(() => {
    const observer = functions.list.createObserver(
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
  }, [hit?.pages, intersecting, page]);

  useEffect(() => {
    intersecting &&
      hit?.pages &&
      page !== hit.pages &&
      functions.list
        .fetchScroll(
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
        )
        .then(() => {
          setIntersecting(!intersecting);
        });
  }, [page]);

  return [list, load, page];
};
