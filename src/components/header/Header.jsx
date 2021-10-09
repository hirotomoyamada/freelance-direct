import styles from "./Header.module.scss";

import { useDispatch } from "react-redux";
import * as userSlice from "../../features/user/userSlice";
import * as postSlice from "../../features/post/postSlice";

import { Icon } from "../icon/Icon";
import { Search } from "./components/search/Search";
import { Menu } from "./components/menu/Menu";
import { Information } from "./components/information/Information";

export const Header = ({ user, index, info, posts, type }) => {
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(userSlice.handleMenu("open"));
  };

  const handleIndex = (i) => {
    if (i === index) {
      return;
    }
    window.scrollTo(0, 0);
    dispatch(postSlice.handleIndex(i));
  };

  return (
    <div
      className={`${styles.header} ${
        type === "requests" && styles.header_requests
      }`}
    >
      <div
        className={`${styles.header_container} ${
          (type === "home" || type === "search") && styles.header_container_menu
        } ${type === "requests" && styles.header_container_requests}`}
      >
        <button
          type="button"
          className={styles.header_icon}
          onClick={handleMenu}
        >
          <Icon src={user?.icon} />
        </button>
        {type === "search" ? (
          <Search index={index} posts={posts} />
        ) : type === "home" ? (
          <Information info={info} />
        ) : (
          <div className={styles.header_wrap}>
            {type === "likes"
              ? "いいね"
              : type === "requests"
              ? "リクエスト"
              : type === "entries"
              ? "お問い合わせ"
              : type === "history"
              ? "履歴"
              : type === "setting" && "アカウント設定"}
          </div>
        )}
      </div>

      {(type === "home" || type === "search" || type === "requests") && (
        <Menu index={index} type={type} handleIndex={handleIndex} />
      )}
    </div>
  );
};
