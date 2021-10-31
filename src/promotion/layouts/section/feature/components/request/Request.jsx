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
          エージェントは、
          <span>
            あなたがリクエストを承認しないと個人情報を見ることができません。
          </span>
          <br />
          <br />
          リクエストを受けると、エージェントからのメッセージやプロフィールを見ることができます。
          <br />
          見せたいと思ったら承認するだけ。とても簡単です。
          <br />
          <br />
          あなたが見せたいと思うエージェントのみプロフィールを見せることができるので
          <br />
          不要な営業メッセージから、あなたを守ります。
        </p>
      </div>
    </div>
  );
};
