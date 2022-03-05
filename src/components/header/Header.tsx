import React from "react";
import styles from "./Header.module.scss";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

import { Icon } from "components/icon/Icon";

import { Search } from "./components/search/Search";
import { Menu } from "./components/menu/Menu";
import { Information } from "./components/information/Information";
import { User } from "types/user";

interface PropType {
  user?: User;
  index?: "matters" | "companys" | "enable" | "hold" | "disable";
  type?:
    | "home"
    | "search"
    | "likes"
    | "entries"
    | "requests"
    | "histories"
    | "terms"
    | "setting"
    | "back";
  back?: boolean;
  email?: boolean;
  password?: boolean;
  create?: boolean;
  remove?: boolean;
  terms?: boolean;
  handleCancel?: () => void;
}

export const Header: React.FC<PropType> = ({
  user,
  index,
  type,
  back,
  email,
  password,
  create,
  remove,
  terms,
  handleCancel,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const info = useSelector(rootSlice.data)?.information;

  const handleMenu = (): void => {
    dispatch(rootSlice.handleMenu("open"));
  };

  const handleIndex = (
    i: "matters" | "companys" | "enable" | "hold" | "disable"
  ): void => {
    if (i === index) {
      return;
    }
    window.scrollTo(0, 0);
    dispatch(rootSlice.handleIndex(i));
  };

  const handleBack = (): void => {
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
          <Icon src={(user as User)?.icon} />
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
              ? "エントリー"
              : type === "histories"
              ? "閲覧履歴"
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
      } ${terms && styles.header_terms}`}
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
        {(!email && !password && !create && !remove) || type
          ? type === "terms"
            ? "利用規約"
            : ""
          : ""}
      </span>
    </div>
  );
};
