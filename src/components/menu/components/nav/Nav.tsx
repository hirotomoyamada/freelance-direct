import React from "react";
import styles from "./Nav.module.scss";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import HistoryIcon from "@material-ui/icons/History";
import SettingsIcon from "@material-ui/icons/Settings";

import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

import { Btn } from "./components/Btn";
import { User } from "types/user";

interface PropType {
  page: string;
  user: User;
  handlePage: (p: string) => void;
  disable: boolean;
}

export const Nav: React.FC<PropType> = ({
  page,
  user,
  handlePage,
  disable,
}) => {
  const navs: {
    [T in string]: {
      text: string;
      icon: OverridableComponent<
        SvgIconTypeMap<Record<string, unknown>, "svg">
      >;
    };
  }[] = [
    {
      home: { text: "ホーム", icon: HomeIcon },
      search: { text: "検索", icon: SearchIcon },
    },
    {
      likes: { text: "いいね", icon: FavoriteBorderIcon },
      entries: { text: "エントリー", icon: CheckCircleOutlineIcon },
      requests: { text: "リクエスト", icon: PersonAddIcon },
      histories: { text: "閲覧履歴", icon: HistoryIcon },
    },
    {
      setting: { text: "設定", icon: SettingsIcon },
    },
  ];

  return (
    <nav className={`${styles.nav} ${disable && styles.nav_disable}`}>
      {navs.map((nav, index) => (
        <div className={styles.nav_wrap} key={index}>
          {Object.keys(nav).map((i) => (
            <Btn
              key={i}
              i={i}
              page={page}
              user={user}
              icon={nav[i].icon}
              text={nav[i].text}
              handlePage={handlePage}
            />
          ))}
        </div>
      ))}
    </nav>
  );
};
