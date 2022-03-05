import React from "react";
import { OwnDispatch } from "@reduxjs/toolkit";
import {
  fetchPosts,
  homePosts,
  userPosts,
  extractPosts,
} from "features/post/actions";
import { Company } from "types/post";
import { User } from "types/user";

export const createObserver = (
  list: React.RefObject<HTMLDivElement>,
  hit:
    | {
        posts: number;
        pages: number;
        currentPage: number;
      }
    | undefined,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  intersecting: boolean,
  setIntersecting: React.Dispatch<React.SetStateAction<boolean>>
): IntersectionObserver | undefined => {
  const listHeight = Number(
    JSON.stringify(list?.current?.getBoundingClientRect().height)
  );

  const innerHeight = window.innerHeight + 100;

  if (listHeight > innerHeight) {
    return new IntersectionObserver(
      ([results]) => {
        if (results.isIntersecting && !intersecting) {
          if (hit && page < hit.pages) {
            setIntersecting(true);
          }
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        rootMargin: `0px 0px ${innerHeight}px 0px`,
      }
    );
  }
};

export const fetchScroll = async (
  dispatch: OwnDispatch,
  index: "matters" | "companys" | "enable" | "hold" | "disable" | undefined,
  user: User,
  selectUser: Company | ((uid: string) => void) | undefined,
  home: boolean | undefined,
  search:
    | {
        value: string | null;
        target: string | null;
        type: string | null;
        control: boolean;
      }
    | undefined,
  companys: boolean | undefined,
  type: "likes" | "entries" | "requests" | "histories" | undefined,
  select: string[] | undefined,
  page: number
): Promise<void> => {
  if (search && (index === "matters" || index === "companys")) {
    await dispatch(
      fetchPosts({
        index: index,
        value: search.value,
        target: search.target,
        type: search.type,
        page: page,
      })
    );
  }

  if ((home || select) && (index === "matters" || index === "companys")) {
    await dispatch(
      homePosts({
        index: select ? "companys" : index,
        follows:
          index !== "matters" || select
            ? user.follows
            : [user.uid, ...user.home],
        page: page,
      })
    );
  }

  if (companys && selectUser) {
    await dispatch(
      userPosts({
        uid: (selectUser as Company).uid,
        page: page,
      })
    );
  }

  if (type) {
    if (type !== "requests" && index === "matters") {
      await dispatch(
        extractPosts({
          index: index,
          type: type,
          objectIDs: user[type],
          page: page,
        })
      );
    }

    if (
      type === "requests" &&
      (index === "enable" || index === "hold" || index === "disable")
    ) {
      await dispatch(
        extractPosts({
          index: index,
          type: type,
          objectIDs: user[type][index],
          page: page,
        })
      );
    }
  }
};
