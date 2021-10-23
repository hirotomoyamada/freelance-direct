import { fetchPosts } from "../../actions/fetchPosts";
import { homePosts } from "../../actions/homePosts";
import { userPosts } from "../../actions/userPosts";
import { extractPosts } from "../../actions/extractPosts";

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
