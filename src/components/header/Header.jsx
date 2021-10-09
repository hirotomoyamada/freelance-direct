import styles from "./Header.module.scss";
import { Icon } from "../icon/Icon";

import { useDispatch } from "react-redux";
import * as userSlice from "../../features/user/userSlice";

export const Header = ({ user }) => {
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(userSlice.handleMenu("open"));
  };

  return (
    <div className={styles.header}>
      <button type="button" className={styles.header_icon} onClick={handleMenu}>
        <Icon src={user?.icon} />
      </button>
    </div>
  );
};
