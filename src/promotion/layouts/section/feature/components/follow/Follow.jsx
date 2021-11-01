import root from "../../Feature.module.scss";
import styles from "./Follow.module.scss";

export const Follow = () => {
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
          フリーランスへの案件担当者のプロフィールは充実しています。
          <br />
          気になった案件担当者は、気軽にフォローすることで日々の案件の更新をチェックできます。
          <br />
          <br />
          タブレット・スマートフォンにも対応しているので、
          <br />
          外出時でもリアルタイムに案件や担当者の動向を調べることができます。
        </p>
      </div>
    </div>
  );
};
