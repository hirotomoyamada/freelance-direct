import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "../../../icon/Icon";

export const Header = ({ user }) => {
  return (
    <Link to={`/user/${user.uid}`} className={styles.header}>
      <div className={styles.header_icon}>
        <Icon src={user?.icon} />
      </div>
      <div className={styles.header_wrap}>
        <p className={styles.header_name}>{user?.profile?.name}</p>
        <span className={styles.header_uid}>{user?.uid}</span>
      </div>
    </Link>
  );
};
