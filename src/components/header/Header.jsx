import styles from "./Header.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as rootSlice from "../../features/root/rootSlice";

import { Icon } from "../icon/Icon";
import { Search } from "./components/search/Search";
import { Menu } from "./components/menu/Menu";
import { Information } from "./components/information/Information";

export const Header = ({
  user,
  index,
  type,
  back,
  email,
  password,
  create,
  remove,
  handleCancel,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const info = useSelector(rootSlice.data).information;

  const handleMenu = () => {
    dispatch(rootSlice.handleMenu("open"));
  };

  const handleIndex = (i) => {
    if (i === index) {
      return;
    }
    window.scrollTo(0, 0);
    dispatch(rootSlice.handleIndex(i));
  };

  const handleBack = () => {
    history.goBack();
  };

  return !back || type === "setting" ? (
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
          <Search index={index} />
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
  ) : (
    <div
      className={`${styles.header} ${styles.header_back} ${
        !type && styles.header_none
      }`}
    >
      <button
        type="button"
        className={styles.header_back_cancel}
        onClick={
          !email && !password && !create && !remove ? handleBack : handleCancel
        }
      >
        もどる
      </button>
      <span className={styles.header_back_ttl}>
        {!email && !password && !create && !remove ? type : ""}
      </span>
    </div>
  );
};
