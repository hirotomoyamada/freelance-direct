import { fetchPosts } from "../../../features/post/actions/fetchPosts";
import { homePosts } from "../../../features/post/actions/homePosts";
import { userPosts } from "../../../features/post/actions/userPosts";
import { extractPosts } from "../../../features/post/actions/extractPosts";

export const fetchScroll = async (
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
) => {
  await dispatch(
    search
      ? fetchPosts({
          index: index,
          value: search.value,
          target: search.target,
          type: search.type,
          page: page,
        })
      : home
      ? homePosts({
          index: select ? "companys" : index,
          follows:
            index !== "matters" || select
              ? user.follows
              : [user.uid, ...user.home],
          page: page,
        })
      : companys
      ? userPosts({
          uid: selectUser.uid,
          page: page,
        })
      : type &&
        extractPosts({
          index: index,
          type: type,
          objectIDs: type !== "requests" ? user[type] : user[type][index],
          page: page,
        })
  );
};
