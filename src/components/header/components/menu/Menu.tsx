import React from "react";
import styles from "./Menu.module.scss";
import { useNavigate } from "react-router-dom";

interface PropType {
  handleIndex: (
    i: "matters" | "companys" | "enable" | "hold" | "disable"
  ) => void;
  index?: "matters" | "companys" | "enable" | "hold" | "disable";
  type:
    | "home"
    | "search"
    | "likes"
    | "entries"
    | "requests"
    | "histories"
    | "terms"
    | "setting";
}

export const Menu: React.FC<PropType> = ({ handleIndex, index, type }) => {
  const navigate = useNavigate();

  return type !== "requests" ? (
    <div className={styles.menu}>
      <button
        onClick={() => navigate(`/${type}/matters`)}
        className={`${styles.menu_btn} ${
          index === "matters" && styles.menu_btn_active
        }`}
      >
        案件
      </button>

      <button
        onClick={() => navigate(`/${type}/companys`)}
        className={`${styles.menu_btn} ${
          index === "companys" && styles.menu_btn_active
        }`}
      >
        {type === "home" ? "フォロー" : "営業"}
      </button>
    </div>
  ) : (
    <div className={`${styles.menu} ${styles.menu_requests}`}>
      <button
        onClick={() => handleIndex("enable")}
        className={`${styles.menu_btn} ${
          index === "enable" && styles.menu_btn_active
        }`}
      >
        承認済み
      </button>

      <button
        onClick={() => handleIndex("hold")}
        className={`${styles.menu_btn} ${
          index === "hold" && styles.menu_btn_active
        }`}
      >
        未承認
      </button>

      <button
        onClick={() => handleIndex("disable")}
        className={`${styles.menu_btn} ${
          index === "disable" && styles.menu_btn_active
        }`}
      >
        ブロック
      </button>
    </div>
  );
};
