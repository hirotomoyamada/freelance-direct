import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { User } from "types/user";
import styles from "./Header.module.scss";

interface PropType {
  user: User;
  fetch?: boolean;
  handleClose: () => void;
  handleBack: () => void;
  cover: boolean;
  icon: boolean;
}

export const Header: React.FC<PropType> = ({
  user,
  fetch,
  handleClose,
  handleBack,
  cover,
  icon,
}) => {
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
          {fetch ? <ThreeDots color="#FFF" height={24} width={24} /> : "保存"}
        </button>
      )}
    </div>
  );
};
