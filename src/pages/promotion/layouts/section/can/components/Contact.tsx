import React from "react";
import styles from "../Can.module.scss";

interface PropType {
  option?: boolean;
}
export const Contact: React.FC<PropType> = ({ option }) => {
  return (
    <div className={styles.can_container}>
      <div className={styles.can_cnt}>
        <h2 className={styles.can_cnt_ttl}>
          {!option ? "案件元に直接問い合わせ" : "プロフィールからアプローチ"}
        </h2>

        {!option ? (
          <p className={styles.can_cnt_desc}>
            あなたが関心を持った<span>案件を保有する案件担当に</span>
            <br />
            直接問い合わせすることができます。
            <br />
            <br />
            案件担当は、SNSやメールアドレスを公開しています。
            <br />
            あなたが、よく使うSNSで連絡を取ることもできます。
          </p>
        ) : (
          <p className={styles.can_cnt_desc}>
            エンジニアのプロフィールはとても充実しています。
            <br />
            <br />
            業務を依頼したいフリーランスへ
            <br />
            簡単にアプローチすることも可能です。
            <br />
            <br />
            アプローチにはメッセージも送付することができるので
            <br />
            レスポンシブ率を底上げします。
          </p>
        )}
      </div>

      <figure className={`${styles.can_visual} ${styles.can_contact}`}>
        <img
          src={`${process.env.PUBLIC_URL}/img/promotion/can_contact.svg`}
          alt=""
          className={styles.can_visual_img}
        />
      </figure>
    </div>
  );
};
