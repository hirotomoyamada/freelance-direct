import styles from "./Header.module.scss";

export const Header = ({ user, handleClose, handleBack, cover, icon }) => {
  return (
    <div className={styles.header}>
      <button
        type="button"
        className={`${styles.header_cancel} ${
          !user.profile.nickName &&
          !cover &&
          !icon &&
          styles.header_cancel_disable
        }`}
        onClick={!cover && !icon ? handleClose : handleBack}
      >
        {cover || icon ? "保存" : "キャンセル"}
      </button>
      {!cover && !icon && (
        <button className={styles.header_submit} type="submit">
          保存
        </button>
      )}
    </div>
  );
};
