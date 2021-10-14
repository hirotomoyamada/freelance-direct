import styles from "./User.module.scss";

import Loader from "react-loader-spinner";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser } from "./actions/fetchUser";
import { userPosts } from "../post/actions/userPosts";
import * as rootSlice from "../root/rootSlice";
import * as userSlice from "./userSlice";
import * as postSlice from "../post/postSlice";

import { Header } from "./components/header/Header";
import { Edit } from "./components/edit/Edit";
import { Profile } from "./components/profile/Profile";
import { Follow } from "../../components/follow/Follow";

import { Meta } from "./Meta";
import { List } from "../post/list/List";

export const User = (props) => {
  const dispatch = useDispatch();

  const uid = props.match.params.uid;

  const currentUser = useSelector(userSlice.user);
  const selectUser = useSelector(userSlice.selectUser);
  const user =
    currentUser?.uid === uid
      ? currentUser
      : selectUser?.uid === uid && selectUser;

  const posts = useSelector((state) =>
    postSlice.posts({
      state: state,
      page: "user",
    })
  );

  const hit = useSelector((state) =>
    postSlice.hit({
      state: state,
      page: "user",
    })
  );

  useEffect(() => {
    dispatch(rootSlice.handlePage("user"));
  }, [dispatch]);

  useEffect(() => {
    if (currentUser?.uid !== user?.uid) {
      dispatch(fetchUser(uid));
      dispatch(userPosts({ uid: uid }));
      dispatch(postSlice.resetPost("user"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  return (
    <div className={styles.user}>
      <Meta user={user} />

      {user.uid ? (
        <>
          <Header user={user} />

          <div className={styles.user_inner}>
            {currentUser?.uid === user?.uid ? (
              <Edit />
            ) : (
              user?.uid && <Follow user={currentUser} post={user} profile />
            )}

            <Profile currentUser={currentUser} user={user} />
          </div>
        </>
      ) : (
        <div className={styles.user_load}>
          <Loader type="Grid" color="#4387f4" height={56} width={56} />
        </div>
      )}

      {currentUser?.uid !== user?.uid && (
        <List
          user={currentUser}
          selectUser={selectUser}
          posts={posts}
          hit={hit}
        />
      )}
    </div>
  );
};
