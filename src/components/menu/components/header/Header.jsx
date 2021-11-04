import styles from "./Header.module.scss";
import { Icon } from "../../../icon/Icon";

export const Header = ({ user, handlePage, disable }) => {
  const nickName = [
    "天才エンジニア",
    "究極形態プログラマー",
    "天元突破フリーエンジニア",
    "パーフェクトプログラマー",
  ][Math.floor(Math.random() * 3)];

  return (
    <button
      type="button"
      className={`${styles.header} ${disable && styles.header_disable}`}
      onClick={() => {
        handlePage("user");
      }}
    >
      <div className={styles.header_icon}>
        <Icon src={user?.icon} />
      </div>
      <div className={styles.header_container}>
        <div className={styles.header_wrap}>
          <p className={styles.header_nickName}>
            {user?.profile?.nickName ? user.profile.nickName : nickName}
          </p>
          <span
            className={`${styles.header_state} ${
              (user?.profile?.state === "確定" ||
                user?.profile?.state === "商談中" ||
                user?.profile?.state === "情報収集中") &&
              styles.header_state_disable
            } ${user?.profile?.state === "至急" && styles.header_state_hurry}`}
          >
            {user?.profile?.state}
          </span>
        </div>
        <span className={styles.header_uid}>{user?.uid}</span>
      </div>
    </button>
  );
};
