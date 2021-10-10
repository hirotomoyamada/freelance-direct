import styles from "./Modal.module.scss";

import { useSelector } from "react-redux";
import * as postSlice from "../../features/post/postSlice";
import * as userSlice from "../../features/user/userSlice";

import { Profile } from "../../features/user/profile/Profile";
import { Entry } from "../../features/user/entry/Entry";
import { Home } from "../../features/user/home/Home";

export const Modal = ({ index, user, post, selectUser }) => {
  const postModal = useSelector(postSlice.modal);
  const userModal = useSelector(userSlice.modal);
  const type = postModal.type
    ? postModal.type
    : userModal.type && userModal.type;
  const open = postModal.open
    ? postModal.open
    : userModal.open && userModal.open;

  const Inner = () => {
    switch (type) {
      case "home":
        return <Home user={user} />;
      case "profile":
        return <Profile user={user} />;
      case "entry":
        return <Entry index={index} user={user} post={post} />;
      default:
        return <></>;
    }
  };

  return (
    <div className={open ? styles.open : styles.close}>
      <div className={styles.overlay}></div>
      <div className={`${styles.modal} ${type !== "home" && styles.modal_sp}`}>
        <Inner />
      </div>
    </div>
  );
};

export const VerificationModal = ({ verification, text, cancel, submit }) => {
  return (
    <div className={verification ? styles.open : styles.close}>
      <div className={styles.overlay}></div>

      <div className={styles.modal}>
        <div className={styles.modal_verification}>
          <p className={styles.modal_ttl}>{text}を削除</p>
          <span className={styles.modal_desc}>
            本当にこの{text}を削除してよろしいですか？
          </span>
          <div className={styles.modal_menu}>
            <button
              type="button"
              className={styles.modal_menu_cancel}
              onClick={cancel}
            >
              キャンセル
            </button>
            <button
              type={submit !== "submit" ? "button" : "submit"}
              className={styles.modal_menu_submit}
              onClick={submit !== "submit" ? submit : undefined}
            >
              削除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
