import React from "react";
import root from "../../Feature.module.scss";
import styles from "./Follow.module.scss";

export const Follow: React.FC = () => {
  return (
    <div className={`${root.feature_container} ${styles.follow}`}>
      <figure className={`${root.feature_figure} ${styles.follow_figure}`}>
        <div className={styles.follow_figure_user}>
          <img
            src={`${process.env.PUBLIC_URL}/img/promotion/feature_follow_kimura.png`}
            alt=""
            className={`${styles.follow_figure_card}`}
          />

          <img
            src={`${process.env.PUBLIC_URL}/img/promotion/feature_follow_suzuki.png`}
            alt=""
            className={`${styles.follow_figure_card} ${styles.follow_figure_card_acnt}`}
          />

          <img
            src={`${process.env.PUBLIC_URL}/img/promotion/feature_follow_sasaki.png`}
            alt=""
            className={`${styles.follow_figure_card}`}
          />

          <img
            src={`${process.env.PUBLIC_URL}/img/promotion/feature_follow_yamaguchi.png`}
            alt=""
            className={`${styles.follow_figure_card}`}
          />
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/feature_follow.png`}
          alt=""
          className={styles.follow_figure_mockup}
        />
      </figure>

      <div className={root.feature_cnt}>
        <span className={root.feature_cnt_ttl}>フォロー</span>

        <p className={root.feature_cnt_desc}>
          フリーランスへの<span>案件担当のプロフィールは充実しています。</span>
          <br />
          <br />
          気になった案件担当は、
          <span>気軽にフォローすることで案件の更新をチェックできます。</span>
          <br />
          <br />
          タブレット・スマートフォンにも対応しているので、
          <br />
          外出時でもリアルタイムに案件や担当者の動向を
          <span>調べることができます。</span>
        </p>
      </div>
    </div>
  );
};
