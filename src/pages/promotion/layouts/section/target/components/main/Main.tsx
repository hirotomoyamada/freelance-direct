import React from "react";
import root from "../../../Section.module.scss";
import styles from "./Main.module.scss";

interface PropType {
  option?: boolean;
}
export const Main: React.FC<PropType> = ({ option }) => {
  const position = [
    "フロントエンドエンジニア",
    "バックエンドエンジニア",
    "アプリエンジニア",
    "サーバーサイドエンジニア",
    "インフラエンジニア",
    "システムエンジニア",
    "セキュリティエンジニア",
    "データエンジニア",
    "マークアップエンジニア",
    "テストエンジニア",
    "テスター",
    "AIエンジニア",
    "PM/PL",
    "リードエンジニア",
    "UX/UI",
    "Webディレクター",
    "Webデザイナー",
    "Webプランナー",
    "ゲームプランナー",
    "ゲームデザイナー",
    "ゲームエンジニア",
  ];

  const location = [
    "東京都",
    "神奈川県",
    "千葉県",
    "埼玉県",
    "大阪府",
    "京都府",
    "奈良県",
    "兵庫県",
    "滋賀県",
    "愛知県",
    "広島県",
    "福岡県",
    "宮城県",
    "その他",
  ];

  return (
    <div className={styles.main}>
      {!option ? (
        <h1 className={`${styles.main_ttl} ${root.section_ttl}`}>
          ご利用いただける方
        </h1>
      ) : (
        <h1 className={`${styles.main_ttl} ${root.section_ttl}`}>
          利用している<span>フリーランスの方</span>
        </h1>
      )}

      <div className={styles.main_container}>
        <span className={styles.main_tag}>ポジション</span>
        <div className={styles.main_wrap}>
          {position.map((t, index) => (
            <span key={index}>{t}</span>
          ))}
        </div>
      </div>

      <div className={styles.main_container}>
        <span className={styles.main_tag}>エリア</span>
        <div className={styles.main_wrap}>
          {location.map((t, index) => (
            <span key={index}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
