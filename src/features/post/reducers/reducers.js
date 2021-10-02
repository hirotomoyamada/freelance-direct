import { selectIndex, selectPost } from "./select";

import { addLike, removeLike } from "./like";
import { addEntry } from "./entry";
import { addFollow, removeFollow } from "./follow";

import {
  handleModal,
  handlePage,
  handleSearch,
  handleSort,
  handleNotFound,
} from "./handle";

import { promotionPosts } from "./promotionPosts";
import { fetchPosts } from "./fetchPosts";
import { followsPosts } from "./followsPosts";
import { userPosts } from "./userPosts";
import { extractPosts } from "./extractPosts";
import { showPost } from "./showPost";

import { load, fetch } from "./load";

export {
  selectIndex,
  selectPost,
  addLike,
  removeLike,
  addEntry,
  addFollow,
  removeFollow,
  handleSearch,
  handleModal,
  handlePage,
  handleSort,
  handleNotFound,
  promotionPosts,
  fetchPosts,
  followsPosts,
  userPosts,
  extractPosts,
  showPost,
  load,
  fetch,
};
