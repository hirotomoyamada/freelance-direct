// import { useEffect } from "react"; // ver 1.1.0
import {
  // useDispatch, // ver 1.1.0
  useSelector,
} from "react-redux";

import { usePosts } from "./hook/usePosts";

// import { homePosts } from "./features/post/actions/homePosts"; // ver 1.1.0

import * as rootSlice from "./features/root/rootSlice";
import * as userSlice from "./features/user/userSlice";

import { Header } from "./components/header/Header";
import { List } from "./features/post/list/List";

export const Home = () => {
  // const dispatch = useDispatch(); // ver 1.1.0

  const index = useSelector(rootSlice.index);
  const user = useSelector(userSlice.user);

  const {
    posts,
    hit,
    // control, // ver 1.1.0
  } = usePosts({ index: index, page: "home" });

  // ver 1.1.0
  // useEffect(() => {
  //   (index === "matters" || index === "companys") &&
  //     (!posts.length || control) &&
  //     dispatch(
  //       homePosts({
  //         index: index,
  //         follows:
  //           index === "matters" ? [user.uid, ...user.home] : user.follows,
  //         fetch: posts.length && true,
  //       })
  //     );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch, index, user.home]);

  return (
    <div>
      <Header user={user} type="home" index={index} />
      <List user={user} index={index} posts={posts} hit={hit} home />
    </div>
  );
};
