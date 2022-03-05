import React from "react";
import styles from "./User.module.scss";

import Loader from "react-loader-spinner";

import { useUser } from "hooks/useUser";
import { RouteComponentProps } from "react-router-dom";

import { Meta } from "./Meta";

import { List } from "components/list/List";
import { Follow } from "components/follow/Follow";

import { Header } from "./components/header/Header";
import { Profile } from "./components/profile/Profile";
import { Edit } from "./components/edit/Edit";
import { Back } from "./components/back/Back";

import { Company } from "types/post";

export const User: React.FC<RouteComponentProps<{ uid: string }>> = (props) => {
  const uid = props.match.params.uid;
  const index = "matters";

  const [currentUser, user, posts, hit] = useUser(uid);

  return (
    <div className={styles.user}>
      <Meta user={user} />

      {user.uid && <Back />}

      {user.uid ? (
        <div>
          <Header user={user} />

          <div
            className={`${styles.user_inner} ${
              currentUser?.uid === user?.uid && styles.user_inner_none
            }`}
          >
            {currentUser?.uid === user?.uid ? (
              <Edit user={currentUser} />
            ) : (
              user?.uid && (
                <Follow user={currentUser} post={user as Company} profile />
              )
            )}

            <Profile currentUser={currentUser} user={user as Company} />
          </div>
        </div>
      ) : (
        <div className={styles.user_load}>
          <Loader type="Grid" color="#1d9bf0" height={56} width={56} />
        </div>
      )}

      {currentUser?.uid !== user?.uid && (
        <List
          index={index}
          user={currentUser}
          selectUser={user as Company}
          posts={posts}
          hit={hit}
          companys
        />
      )}
    </div>
  );
};
