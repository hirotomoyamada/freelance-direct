import styles from "./Main.module.scss";
import root from "../../Setting.module.scss";

import { Link } from "react-router-dom";

import { Uid } from "./components/Uid";
import { Email } from "./components/Email";
import { Password } from "./components/Password";
import { At } from "./components/At";
import { Provider } from "./components/provider/Provider";

export const Main = ({
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
          to={{ pathname: "/terms", state: { setting: true } }}
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
