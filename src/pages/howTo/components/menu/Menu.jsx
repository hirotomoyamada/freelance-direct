import styles from "./Menu.module.scss";

export const Menu = ({ page, setPage }) => {
  const indexs = [
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
