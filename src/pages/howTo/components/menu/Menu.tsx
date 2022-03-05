import React from "react";
import styles from "./Menu.module.scss";

interface PropType {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export const Menu: React.FC<PropType> = ({ page, setPage }) => {
  const indexs: { page: string; name: string }[] = [
    { page: "home", name: "ホーム" },
    { page: "search", name: "検索" },
    { page: "likes", name: "いいね" },
    { page: "entries", name: "エントリー" },
    { page: "requests", name: "リクエスト" },
    { page: "histories", name: "閲覧履歴" },
    { page: "notice", name: "通知" },
    { page: "profile", name: "プロフィール" },
  ];

  return (
    <div className={styles.menu}>
      {indexs.map((index) => (
        <button
          key={index.page}
          type="button"
          onClick={() => setPage(index.page)}
          className={`${styles.menu_btn} ${
            index.page === page && styles.menu_btn_current
          }`}
        >
          {index.name}
        </button>
      ))}
    </div>
  );
};
