import React from "react";
import styles from "./Main.module.scss";
import root from "../../Setting.module.scss";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import * as rootSlice from "features/root/rootSlice";

import { Uid } from "./components/Uid";
import { Email } from "./components/Email";
import { Password } from "./components/Password";
import { At } from "./components/At";
import { Provider } from "./components/provider/Provider";

import { User } from "types/user";

interface PropType {
  user: User;
  email: boolean;
  password: boolean;
  setEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
  setRemove: React.Dispatch<React.SetStateAction<boolean>>;
  handleProvider: (data: "google" | "twitter" | "github") => Promise<void>;
  handleLogout: () => void;
}

export const Main: React.FC<PropType> = ({
  user,
  email,
  setEmail,
  password,
  setPassword,
  setCreate,
  setRemove,
  handleProvider,
  handleLogout,
}) => {
  const ver = useSelector(rootSlice.ver);

  return (
    <div className={`${root.setting_inner} ${styles.main}`}>
      <Uid user={user} />

      <Email user={user} email={email} setEmail={setEmail} />

      <Password user={user} password={password} setPassword={setPassword} />

      <At user={user} />

      <Provider
        user={user}
        setCreate={setCreate}
        handleProvider={handleProvider}
      />

      <Provider
        social
        user={user}
        setCreate={setCreate}
        handleProvider={handleProvider}
      />

      <div className={`${styles.main_col} ${styles.main_col_center}`}>
        <Link to={"/howto"} className={styles.main_link}>
          How to App
        </Link>

        <Link
          to={"/terms"}
          state={{ setting: true }}
          className={styles.main_link}
        >
          利用規約
        </Link>

        <button
          type="button"
          onClick={() => setRemove(true)}
          className={styles.main_btn_delete}
        >
          アカウント削除
        </button>
      </div>

      <div className={`${styles.main_col} ${styles.main_col_center}`}>
        <span className={styles.main_link}>ver&nbsp;{ver}</span>
      </div>

      <button
        onClick={handleLogout}
        type="button"
        className={`${root.setting_btn} ${root.setting_btn_logout}`}
      >
        ログアウト
      </button>
    </div>
  );
};
