import styles from "./Header.module.scss";
import { Icon } from "../../../icon/Icon";

export const Header = ({ user, handlePage }) => {
  return (
    <button
      type="button"
      className={styles.header}
      onClick={() => {
        handlePage("user");
      }}
    >
      <div className={styles.header_icon}>
        <Icon src={user?.icon} />
      </div>
      <div className={styles.header_wrap}>
        <p className={styles.header_nickName}>{user?.profile?.nickName}</p>
        <span className={styles.header_uid}>{user?.uid}</span>
      </div>
    </button>
  );
};
