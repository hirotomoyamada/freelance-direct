import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { homePosts } from "features/post/actions";
import * as postSlice from "features/post/postSlice";
import * as userSlice from "features/user/userSlice";

import { List } from "components/list/List";

import { Header } from "./components/header/Header";
import { Select } from "./components/select/Select";

import { RootState } from "app/store";
import { User } from "types/user";

interface PropType {
  user: User;
  handleClose: () => void;
}

export const Home: React.FC<PropType> = ({ user, handleClose }) => {
  const dispatch = useDispatch();

  const [select, setSelect] = useState<string[]>([]);

  const posts = useSelector((state: RootState) =>
    postSlice.posts({
      state: state,
      page: "home",
      index: "companys",
    })
  );

  const hit = useSelector((state: RootState) =>
    postSlice.hit({
      state: state,
      page: "home",
      index: "companys",
    })
  );

  useEffect(() => {
    user.home.length && setSelect(user.home);
  }, [user.home]);

  useEffect(() => {
    !posts?.length &&
      user.follows.length &&
      dispatch(
        homePosts({
          index: "companys",
          follows: user.follows,
          fetch: posts?.length ? true : false,
        })
      );
  }, [dispatch, posts, user.follows, user.uid]);

  const handleEdit = (): void => {
    dispatch(userSlice.updateHome(select));
  };

  const handleDelete = (): void => {
    setSelect([]);
  };

  const selectUser = (uid: string): void => {
    const found = select.find((id) => id === uid);

    select.indexOf(uid) < 0 && !found
      ? setSelect([uid, ...select])
      : setSelect(select.filter((id) => id !== uid));
  };

  return (
    <div className={styles.home}>
      <Header
        handleClose={handleClose}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        select={select}
      />

      <Select select={select} />

      <List
        user={user}
        posts={posts}
        hit={hit}
        select={select}
        selectUser={selectUser}
        home
      />
    </div>
  );
};
