import styles from "./User.module.scss";
import { useUser } from "./hook/useUser";

import Loader from "react-loader-spinner";

import { Header } from "./layouts/header/Header";
import { Profile } from "./layouts/profile/Profile";
import { List } from "../post/list/List";

import { Follow } from "../../components/follow/Follow";
import { Edit } from "./components/edit/Edit";
import { Back } from "./components/back/Back";

import { Meta } from "./Meta";

export const User = (props) => {
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
              user?.uid && <Follow user={currentUser} post={user} profile />
            )}

            <Profile currentUser={currentUser} user={user} />
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
          selectUser={user}
          posts={posts}
          hit={hit}
          companys
        />
      )}
    </div>
  );
};
