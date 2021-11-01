import root from "../../Feature.module.scss";
import styles from "./Request.module.scss";

export const Request = () => {
  return (
    <div className={`${root.feature_container} ${styles.request}`}>
      <figure className={`${root.feature_figure} ${styles.request_figure}`}>
        <div className={styles.request_figure_hold}>
          <img
            src={`${process.env.PUBLIC_URL}/img/promotion/feature_request_matsumoto.png`}
            alt=""
            className={`${styles.request_figure_card}`}
          />

          <img
            src={`${process.env.PUBLIC_URL}/img/promotion/feature_request_nakamura.png`}
            alt=""
            className={`${styles.request_figure_card}`}
          />

          <img
            src={`${process.env.PUBLIC_URL}/img/promotion/feature_request_yamaguchi.png`}
            alt=""
            className={`${styles.request_figure_card}`}
          />
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/feature_request.png`}
          alt=""
          className={styles.request_figure_mockup}
        />
      </figure>

      <div className={root.feature_cnt}>
        <span className={root.feature_cnt_ttl}>リクエスト</span>

        <p className={root.feature_cnt_desc}>
          営業担当者は、
          <span>
            あなたがリクエストを承認しないと個人情報を見ることができません。
          </span>
          <br />
          <br />
          リクエストを受けると、案件担当者からのメッセージを見ることができます。
          <br />
          話を聞いてみたいと思ったら、承認するだけ。
          <br />
          <br />
          あなたが繋がりたいと思う案件担当者のみ個人情報を見せることができるので
          <br />
          不要な営業メッセージから、あなたを守ります。
        </p>
      </div>
    </div>
  );
};
